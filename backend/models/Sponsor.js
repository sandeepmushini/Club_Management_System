const mongoose = require('mongoose');

const SponsorSchema = new mongoose.Schema({
    name: String,
    logoUrl: String,
    website: String,
    tier: { type: String, default: 'Standard' }, // Gold, Silver, Bronze
    isActive: { type: Boolean, default: true }
});

module.exports = mongoose.model('Sponsor', SponsorSchema);