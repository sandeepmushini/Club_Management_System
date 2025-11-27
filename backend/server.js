const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// --- 💾 OFFLINE DATABASE (MOCK DATA) ---
let members = [
    { _id: "1", name: "Rama Subham", role: "Backend Lead", email: "rama@test.com", year: 3 }
];
let events = [
    { _id: "1", title: "Winter Hackathon", date: "Dec 20, 2025", location: "Auditorium", description: "Coding Challenge" }
];
let projects = [
    { _id: "1", title: "Club Website", description: "Fullstack App", teamMembers: "Rama, Friend", link: "github.com/club" }
];

// --- ROUTES ---

// 1. MEMBERS
app.get('/members', (req, res) => res.json(members));
app.post('/members', (req, res) => {
    const newMember = { _id: Date.now().toString(), ...req.body };
    members.push(newMember);
    res.json({ message: "Member Saved!", member: newMember });
});

// 2. EVENTS
app.get('/events', (req, res) => res.json(events));
app.post('/events', (req, res) => {
    const newEvent = { _id: Date.now().toString(), ...req.body };
    events.push(newEvent);
    res.json({ message: "Event Saved!", event: newEvent });
});

// 3. PROJECTS
app.get('/projects', (req, res) => res.json(projects));
app.post('/projects', (req, res) => {
    const newProject = { _id: Date.now().toString(), ...req.body };
    projects.push(newProject);
    res.json({ message: "Project Saved!", project: newProject });
});

// 4. HOME
app.get('/', (req, res) => {
    res.send("✅ Backend is Live (Offline Mode) - Ready for Frontend!");
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});