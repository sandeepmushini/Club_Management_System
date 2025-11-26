const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001; // Keep this Cloud Port setting!

app.use(cors());
app.use(express.json());

// --- 💾 OFFLINE DATABASE ---
let members = [
    { _id: "1", name: "Rama Subham", role: "Backend Lead", year: 3 }
];
let events = [];
let projects = [];

// --- ROUTES ---

// 1. GET Members
app.get('/members', (req, res) => res.json(members));

// 2. ADD Member
app.get('/add-test', (req, res) => {
    members.push({ _id: Date.now().toString(), name: "New Member", role: "Recruit" });
    res.send("✅ Member Added!");
});

// 3. GET Events
app.get('/events', (req, res) => res.json(events));

// 4. ADD Event
app.get('/add-event', (req, res) => {
    events.push({ 
        _id: Date.now().toString(), 
        title: "Hackathon 2025", 
        date: "Dec 20" 
    });
    res.send("✅ Event Added!");
});

// 5. GET Projects
app.get('/projects', (req, res) => res.json(projects));

// 6. ADD Project
app.post('/projects', (req, res) => {
    const newProject = req.body;
    projects.push(newProject);
    res.json({ message: "Project Saved!", project: newProject });
});

// 7. Home Page
app.get('/', (req, res) => {
    res.send("✅ Backend is Live (Offline Mode)");
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});