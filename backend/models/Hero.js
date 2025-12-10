const mongoose = require('mongoose');

const HeroSchema = new mongoose.Schema({
    title: String,
    subtitle: String,
    imageUrl: String,
    ctaText: String,
    ctaLink: String,
    order: { type: Number, default: 0 },
    isActive: { type: Boolean, default: true }
});

module.exports = mongoose.model('Hero', HeroSchema);