const express = require('express');
const shortid = require('shortid');
const router = express.Router();
const Url = require('../model/Url');

router.post('/shorten', async (req, res) =>{
    const {longUrl} = req.body;
    const shortId = shortid.generate();
    const shortUrl = `http://localhost:5000/${shortId}`;

    const url = new Url({longUrl, shortid: shortId});
    await url.save();

    res.json({shortUrl});
});

router.get('/:shortId', async(req, res)=>{
    const{shortId} = req.params;
    const url = await Url.findOne({ shortid: shortId });
    
    if(url) return res.redirect(url.longUrl);
    res.status(404).send('URL not found pa');
});

module.exports = router;


