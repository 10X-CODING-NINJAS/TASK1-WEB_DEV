const mongoose = require('mongoose');
const shortid = require('shortid');

const urlSchema = new mongoose.Schema({
    longUrl: { 
        type: String,
        required: true
    },
    shortid: { 
        type: String, 
        required: true,
        unique: true
    },
    createdAt: { 
        type: Date, 
        default: Date.now
    }
});

module.exports = mongoose.model('Url', urlSchema);