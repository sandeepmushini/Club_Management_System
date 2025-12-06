const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// Import your Blueprints
const Member = require('./models/Member');
const Event = require('./models/Event');
const Project = require('./models/Project');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// --- DATABASE CONNECTION ---
// 👇 PASTE YOUR REAL MONGODB LINK HERE (Inside the quotes)
const MONGO_URI = 'mongodb+srv://ramasubham136_db_user:KPcE5nkmt27a3MiM@cluster0.jrxvt1n.mongodb.net/?appName=Cluster0';

mongoose.connect(MONGO_URI)
    .then(() => console.log('✅ Connected to MongoDB!'))
    .catch(err => console.error('❌ Connection Error:', err));

// --- ROUTES ---

// 1. MEMBERS
app.get('/members', async (req, res) => {
    const members = await Member.find();
    res.json(members);
});
app.post('/members', async (req, res) => {
    try {
        const newMember = new Member(req.body);
        await newMember.save();
        res.json(newMember);
    } catch (err) { res.status(500).json({ error: err.message }); }
});

// 2. EVENTS
app.get('/events', async (req, res) => {
    const events = await Event.find();
    res.json(events);
});
app.post('/events', async (req, res) => {
    try {
        const newEvent = new Event(req.body);
        await newEvent.save();
        res.json(newEvent);
    } catch (err) { res.status(500).json({ error: err.message }); }
});

// 3. PROJECTS
app.get('/projects', async (req, res) => {
    const projects = await Project.find();
    res.json(projects);
});
app.post('/projects', async (req, res) => {
    try {
        const newProject = new Project(req.body);
        await newProject.save();
        res.json(newProject);
    } catch (err) { res.status(500).json({ error: err.message }); }
});

// 4. TEST ROUTE (Quick check)
app.get('/add-test', async (req, res) => {
    try {
        const newMember = new Member({
            name: "Rama Subham",
            role: "Backend Lead",
            email: "rama@test.com",
            year: 3
        });
        await newMember.save();
        res.send("✅ Test Member Added to REAL Database!");
    } catch (err) {
        res.status(500).send("Error: " + err.message);
    }
});

app.get('/', (req, res) => {
    res.send("✅ Backend is Live & Online!");
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});