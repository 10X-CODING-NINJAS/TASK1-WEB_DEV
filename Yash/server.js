const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors'); 
require('dotenv').config();

const PORT = 5000;
const app = express();

app.use(cors());  
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));


mongoose.connect(process.env.MONGO_URI, {dbname: 'tiny-url',})
    .then(() => console.log('MOngoDB connected'))
    .catch((err) => console.error('mongo conn error:', err));

app.use('/', require('./routes/url'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


app.listen(PORT, () => console.log(`server running on http://localhost:${PORT}`));