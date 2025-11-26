const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Member = require('./models/Member');
const Event = require('./models/Event');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// DATABASE CONNECTION
const MONGO_URI = 'mongodb+srv://ramasubham136_db_user:KPcE5nkmt27a3MiM@cluster0.jrxvtln.mongodb.net/?appName=Cluster0';

mongoose.connect(MONGO_URI)
    .then(() => console.log('✅ Connected to MongoDB!'))
    .catch(err => console.error('❌ Connection Error:', err));

// --- ROUTES ---

// 1. Add Event
app.get('/add-event', async (req, res) => {
    try {
        const newEvent = new Event({
            title: "Winter Hackathon",
            date: "December 20, 2025",
            location: "Main Auditorium",
            description: "A 24-hour coding challenge!"
        });
        await newEvent.save();
        res.send("✅ Test Event Added to Database!");
    } catch (err) {
        res.status(500).send("Error: " + err.message);
    }
});

// 2. Get Events
app.get('/events', async (req, res) => {
    const events = await Event.find();
    res.json(events);
});

// 3. Add Member
app.get('/add-test', async (req, res) => {
    try {
        const newMember = new Member({
            name: "Rama Subham",
            role: "Backend Lead",
            email: "ramasubham136@gmail.com",
            year: 3
        });
        await newMember.save();
        res.send("✅ Test Member Added!");
    } catch (err) {
        res.status(500).send("Error: " + err.message);
    }
});

// 4. Get Members
app.get('/members', async (req, res) => {
    const members = await Member.find();
    res.json(members);
});

// 5. Home Page
app.get('/', (req, res) => {
    res.send("✅ Backend is Live & Connected to MongoDB!");
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});