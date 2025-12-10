const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
    name: String,
    email: String,
    subject: String,
    message: String,
    status: { type: String, default: 'New' }, // New, Read, Responded
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Contact', ContactSchema);