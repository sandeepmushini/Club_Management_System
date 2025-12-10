const mongoose = require('mongoose');

const SocialSchema = new mongoose.Schema({
    platform: String, // e.g., "Instagram", "LinkedIn"
    url: String,
    icon: String,     // e.g., "fa-instagram"
    isActive: { type: Boolean, default: true }
});

module.exports = mongoose.model('SocialMedia', SocialSchema);