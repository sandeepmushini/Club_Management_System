const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// --- 💾 OFFLINE DATABASE ---
let members = [
    { _id: "1", name: "Rama Subham", role: "Backend Lead", year: 3 }
];
let events = [];
let projects = []; // <--- NEW LIST

// --- ROUTES ---

// 1. MEMBERS
app.get('/members', (req, res) => res.json(members));
app.get('/add-test-member', (req, res) => {
    members.push({ _id: Date.now().toString(), name: "New Member", role: "Recruit" });
    res.send("✅ Member Added!");
});

// 2. EVENTS
app.get('/events', (req, res) => res.json(events));
app.get('/add-test-event', (req, res) => {
    events.push({ 
        _id: Date.now().toString(), 
        title: "Hackathon 2025", 
        date: "Dec 20" 
    });
    res.send("✅ Event Added!");
});

// 3. PROJECTS (New!)
app.get('/projects', (req, res) => res.json(projects));

app.get('/add-test-project', (req, res) => {
    const newProject = {
        _id: Date.now().toString(),
        name: "Club Website",
        description: "A full-stack website built with Node.js and React",
        team: ["Rama Subham", "Frontend Friend"]
    };
    projects.push(newProject);
    console.log("✅ Saved Project:", newProject);
    res.send("✅ Project Added!");
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log("🚀 Offline Mode: Members, Events, and Projects ready.");
});