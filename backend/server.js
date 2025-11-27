const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// Import all 3 Blueprints
const Member = require('./models/Member');
const Event = require('./models/Event');
const Project = require('./models/Project');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json()); // Allows server to read JSON data sent by frontend

// DATABASE CONNECTION
const MONGO_URI = 'mongodb+srv://ramasubham136_db_user:KPcE5nkmt27a3MiM@cluster0.jrxvtln.mongodb.net/?appName=Cluster0';

mongoose.connect(MONGO_URI)
    .then(() => console.log('✅ Connected to MongoDB!'))
    .catch(err => console.error('❌ Connection Error:', err));

// --- ROUTES ---

// 1. MEMBERS (Get & Add)
app.get('/members', async (req, res) => {
    const members = await Member.find();
    res.json(members);
});

app.post('/members', async (req, res) => {
    try {
        const newMember = new Member(req.body); // Create from sent data
        await newMember.save();
        res.json({ message: "Member Saved!", member: newMember });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 2. EVENTS (Get & Add)
app.get('/events', async (req, res) => {
    const events = await Event.find();
    res.json(events);
});

app.post('/events', async (req, res) => {
    try {
        const newEvent = new Event(req.body);
        await newEvent.save();
        res.json({ message: "Event Saved!", event: newEvent });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 3. PROJECTS (Get & Add)
app.get('/projects', async (req, res) => {
    const projects = await Project.find();
    res.json(projects);
});

app.post('/projects', async (req, res) => {
    try {
        const newProject = new Project(req.body);
        await newProject.save();
        res.json({ message: "Project Saved!", project: newProject });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Home Route
app.get('/', (req, res) => {
    res.send("✅ Backend is Live! Endpoints: /members, /events, /projects");
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});