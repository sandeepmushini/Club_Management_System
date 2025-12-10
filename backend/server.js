const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// Import Models
const Member = require('./models/Member');
const Event = require('./models/Event');
const Project = require('./models/Project');
const Attendance = require('./models/Attendance');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Database Connection
const MONGO_URI = 'mongodb+srv://ramasubham136_db_user:KPcE5nkmt27a3MiM@cluster0.jrxvtln.mongodb.net/?appName=Cluster0';

mongoose.connect(MONGO_URI)
    .then(() => console.log('✅ Connected to MongoDB!'))
    .catch(err => console.error('❌ Connection Error:', err));

// ========================================
// 🏠 HOME PAGE ROUTE
// ========================================

app.get('/', (req, res) => {
    res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Club Management API</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            padding: 20px;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            background: white;
            border-radius: 20px;
            box-shadow: 0 20px 60px rgba(0,0,0,0.3);
            overflow: hidden;
        }
        
        .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 40px;
            text-align: center;
        }
        
        .header h1 {
            font-size: 2.5em;
            margin-bottom: 10px;
        }
        
        .status {
            display: inline-block;
            background: #4ade80;
            padding: 8px 20px;
            border-radius: 20px;
            font-weight: bold;
            margin-top: 10px;
        }
        
        .content {
            padding: 40px;
        }
        
        .section {
            margin-bottom: 40px;
        }
        
        .section h2 {
            color: #667eea;
            margin-bottom: 20px;
            font-size: 1.8em;
            border-bottom: 3px solid #667eea;
            padding-bottom: 10px;
        }
        
        .endpoint-group {
            background: #f8f9fa;
            padding: 20px;
            border-radius: 10px;
            margin-bottom: 20px;
        }
        
        .endpoint-group h3 {
            color: #764ba2;
            margin-bottom: 15px;
        }
        
        .endpoint {
            background: white;
            padding: 15px;
            margin: 10px 0;
            border-radius: 8px;
            border-left: 4px solid #667eea;
            display: flex;
            align-items: center;
            justify-content: space-between;
            transition: transform 0.2s;
        }
        
        .endpoint:hover {
            transform: translateX(5px);
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }
        
        .method {
            display: inline-block;
            padding: 5px 15px;
            border-radius: 5px;
            font-weight: bold;
            font-size: 0.85em;
            margin-right: 15px;
        }
        
        .get { background: #10b981; color: white; }
        .post { background: #3b82f6; color: white; }
        .put { background: #f59e0b; color: white; }
        .delete { background: #ef4444; color: white; }
        
        .path {
            flex: 1;
            font-family: 'Courier New', monospace;
            color: #333;
        }
        
        .test-link {
            background: #667eea;
            color: white;
            padding: 8px 15px;
            border-radius: 5px;
            text-decoration: none;
            font-size: 0.9em;
            transition: background 0.3s;
        }
        
        .test-link:hover {
            background: #764ba2;
        }
        
        .description {
            color: #666;
            font-size: 0.9em;
            margin-top: 5px;
        }
        
        .stats {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            margin-top: 20px;
        }
        
        .stat-card {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 20px;
            border-radius: 10px;
            text-align: center;
        }
        
        .stat-card h3 {
            font-size: 2em;
            margin-bottom: 5px;
        }
        
        .footer {
            background: #f8f9fa;
            padding: 20px;
            text-align: center;
            color: #666;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🎓 Club Management API</h1>
            <p>Complete Backend System for College Club Management</p>
            <div class="status">🟢 All Systems Operational</div>
        </div>
        
        <div class="content">
            <div class="section">
                <h2>📊 API Statistics</h2>
                <div class="stats">
                    <div class="stat-card">
                        <h3>4</h3>
                        <p>Main Resources</p>
                    </div>
                    <div class="stat-card">
                        <h3>20+</h3>
                        <p>API Endpoints</p>
                    </div>
                    <div class="stat-card">
                        <h3>100%</h3>
                        <p>Uptime</p>
                    </div>
                </div>
            </div>
            
            <div class="section">
                <h2>🔌 Available Endpoints</h2>
                
                <div class="endpoint-group">
                    <h3>👥 Members API</h3>
                    <div class="endpoint">
                        <div>
                            <span class="method get">GET</span>
                            <span class="path">/members</span>
                            <div class="description">Get all members</div>
                        </div>
                        <a href="/members" class="test-link" target="_blank">Test →</a>
                    </div>
                    <div class="endpoint">
                        <div>
                            <span class="method get">GET</span>
                            <span class="path">/members/:id</span>
                            <div class="description">Get single member by ID</div>
                        </div>
                    </div>
                    <div class="endpoint">
                        <div>
                            <span class="method post">POST</span>
                            <span class="path">/members</span>
                            <div class="description">Create new member</div>
                        </div>
                    </div>
                    <div class="endpoint">
                        <div>
                            <span class="method put">PUT</span>
                            <span class="path">/members/:id</span>
                            <div class="description">Update member</div>
                        </div>
                    </div>
                    <div class="endpoint">
                        <div>
                            <span class="method delete">DELETE</span>
                            <span class="path">/members/:id</span>
                            <div class="description">Delete member</div>
                        </div>
                    </div>
                    <div class="endpoint">
                        <div>
                            <span class="method get">GET</span>
                            <span class="path">/members/search/:query</span>
                            <div class="description">Search members by name or role</div>
                        </div>
                        <a href="/members/search/backend" class="test-link" target="_blank">Test →</a>
                    </div>
                    <div class="endpoint">
                        <div>
                            <span class="method get">GET</span>
                            <span class="path">/dashboard/members</span>
                            <div class="description">Get member statistics</div>
                        </div>
                        <a href="/dashboard/members" class="test-link" target="_blank">Test →</a>
                    </div>
                </div>
                
                <div class="endpoint-group">
                    <h3>📅 Events API</h3>
                    <div class="endpoint">
                        <div>
                            <span class="method get">GET</span>
                            <span class="path">/events</span>
                            <div class="description">Get all events (sorted by date)</div>
                        </div>
                        <a href="/events" class="test-link" target="_blank">Test →</a>
                    </div>
                    <div class="endpoint">
                        <div>
                            <span class="method get">GET</span>
                            <span class="path">/events/:id</span>
                            <div class="description">Get single event</div>
                        </div>
                    </div>
                    <div class="endpoint">
                        <div>
                            <span class="method post">POST</span>
                            <span class="path">/events</span>
                            <div class="description">Create new event</div>
                        </div>
                    </div>
                    <div class="endpoint">
                        <div>
                            <span class="method put">PUT</span>
                            <span class="path">/events/:id</span>
                            <div class="description">Update event</div>
                        </div>
                    </div>
                    <div class="endpoint">
                        <div>
                            <span class="method delete">DELETE</span>
                            <span class="path">/events/:id</span>
                            <div class="description">Delete event</div>
                        </div>
                    </div>
                </div>
                
                <div class="endpoint-group">
                    <h3>📁 Projects API</h3>
                    <div class="endpoint">
                        <div>
                            <span class="method get">GET</span>
                            <span class="path">/projects</span>
                            <div class="description">Get all projects</div>
                        </div>
                        <a href="/projects" class="test-link" target="_blank">Test →</a>
                    </div>
                    <div class="endpoint">
                        <div>
                            <span class="method get">GET</span>
                            <span class="path">/projects/:id</span>
                            <div class="description">Get single project</div>
                        </div>
                    </div>
                    <div class="endpoint">
                        <div>
                            <span class="method post">POST</span>
                            <span class="path">/projects</span>
                            <div class="description">Create new project</div>
                        </div>
                    </div>
                    <div class="endpoint">
                        <div>
                            <span class="method put">PUT</span>
                            <span class="path">/projects/:id</span>
                            <div class="description">Update project</div>
                        </div>
                    </div>
                    <div class="endpoint">
                        <div>
                            <span class="method delete">DELETE</span>
                            <span class="path">/projects/:id</span>
                            <div class="description">Delete project</div>
                        </div>
                    </div>
                </div>
                
                <div class="endpoint-group">
                    <h3>📋 Attendance API</h3>
                    <div class="endpoint">
                        <div>
                            <span class="method post">POST</span>
                            <span class="path">/attendance</span>
                            <div class="description">Mark attendance</div>
                        </div>
                    </div>
                    <div class="endpoint">
                        <div>
                            <span class="method get">GET</span>
                            <span class="path">/attendance/member/:memberId</span>
                            <div class="description">Get member's attendance history</div>
                        </div>
                    </div>
                    <div class="endpoint">
                        <div>
                            <span class="method get">GET</span>
                            <span class="path">/attendance/event/:eventId</span>
                            <div class="description">Get event attendance list</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="section">
                <h2>🚀 Quick Start Guide</h2>
                <div class="endpoint-group">
                    <p style="margin-bottom: 15px;">Here's how your frontend team can use this API:</p>
                    <pre style="background: #f8f9fa; padding: 20px; border-radius: 8px; overflow-x: auto;"><code>// Example: Fetch all members
fetch('https://club-backend-api.onrender.com/members')
  .then(response => response.json())
  .then(data => console.log(data));

// Example: Create a new member
fetch('https://club-backend-api.onrender.com/members', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: "John Doe",
    role: "Developer",
    email: "john@example.com",
    year: 2
  })
})
  .then(response => response.json())
  .then(data => console.log(data));</code></pre>
                </div>
            </div>
        </div>
        
        <div class="footer">
            <p>Built with ❤️ by Roshan Rama | Backend Lead</p>
            <p style="margin-top: 10px; font-size: 0.9em;">MongoDB Atlas Connected | Express.js | Node.js</p>
        </div>
    </div>
</body>
</html>
    `);
});

// ========================================
// 👥 MEMBER ROUTES
// ========================================

app.get('/members', async (req, res) => {
    try {
        const members = await Member.find();
        res.json(members);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/members/:id', async (req, res) => {
    try {
        const member = await Member.findById(req.params.id);
        if (!member) return res.status(404).json({ error: 'Member not found' });
        res.json(member);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/members', async (req, res) => {
    try {
        const newMember = new Member(req.body);
        await newMember.save();
        res.json({ message: 'Member created!', member: newMember });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.put('/members/:id', async (req, res) => {
    try {
        const updated = await Member.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updated) return res.status(404).json({ error: 'Member not found' });
        res.json({ message: 'Member updated!', member: updated });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.delete('/members/:id', async (req, res) => {
    try {
        const deleted = await Member.findByIdAndDelete(req.params.id);
        if (!deleted) return res.status(404).json({ error: 'Member not found' });
        res.json({ message: 'Member deleted!' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/members/search/:query', async (req, res) => {
    try {
        const query = req.params.query;
        const members = await Member.find({
            $or: [
                { name: { $regex: query, $options: 'i' } },
                { role: { $regex: query, $options: 'i' } }
            ]
        });
        res.json(members);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/dashboard/members', async (req, res) => {
    try {
        const totalMembers = await Member.countDocuments();
        const membersByYear = await Member.aggregate([
            { $group: { _id: '$year', count: { $sum: 1 } } },
            { $sort: { _id: 1 } }
        ]);
        const membersByRole = await Member.aggregate([
            { $group: { _id: '$role', count: { $sum: 1 } } }
        ]);

        res.json({
            total: totalMembers,
            byYear: membersByYear,
            byRole: membersByRole
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ========================================
// 📅 EVENT ROUTES
// ========================================

app.get('/events', async (req, res) => {
    try {
        const events = await Event.find().sort({ date: -1 });
        res.json(events);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/events/:id', async (req, res) => {
    try {
        const event = await Event.findById(req.params.id);
        if (!event) return res.status(404).json({ error: 'Event not found' });
        res.json(event);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/events', async (req, res) => {
    try {
        const newEvent = new Event(req.body);
        await newEvent.save();
        res.json({ message: 'Event created!', event: newEvent });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.put('/events/:id', async (req, res) => {
    try {
        const updated = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updated) return res.status(404).json({ error: 'Event not found' });
        res.json({ message: 'Event updated!', event: updated });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.delete('/events/:id', async (req, res) => {
    try {
        const deleted = await Event.findByIdAndDelete(req.params.id);
        if (!deleted) return res.status(404).json({ error: 'Event not found' });
        res.json({ message: 'Event deleted!' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ========================================
// 📁 PROJECT ROUTES
// ========================================

app.get('/projects', async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/projects/:id', async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);
        if (!project) return res.status(404).json({ error: 'Project not found' });
        res.json(project);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/projects', async (req, res) => {
    try {
        const newProject = new Project(req.body);
        await newProject.save();
        res.json({ message: 'Project created!', project: newProject });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.put('/projects/:id', async (req, res) => {
    try {
        const updated = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updated) return res.status(404).json({ error: 'Project not found' });
        res.json({ message: 'Project updated!', project: updated });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.delete('/projects/:id', async (req, res) => {
    try {
        const deleted = await Project.findByIdAndDelete(req.params.id);
        if (!deleted) return res.status(404).json({ error: 'Project not found' });
        res.json({ message: 'Project deleted!' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ========================================
// 📋 ATTENDANCE ROUTES
// ========================================

app.post('/attendance', async (req, res) => {
    try {
        const newAttendance = new Attendance(req.body);
        await newAttendance.save();
        res.json({ message: 'Attendance marked!', attendance: newAttendance });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/attendance/member/:memberId', async (req, res) => {
    try {
        const records = await Attendance.find({ 
            memberId: req.params.memberId 
        }).populate('eventId');
        res.json(records);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/attendance/event/:eventId', async (req, res) => {
    try {
        const records = await Attendance.find({ 
            eventId: req.params.eventId 
        }).populate('memberId');
        res.json(records);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ========================================
// 🧪 TEST ROUTE
// ========================================

app.get('/add-test', async (req, res) => {
    try {
        const newMember = new Member({
            name: 'Test User',
            role: 'Backend Developer',
            email: 'test@club.com',
            year: 3
        });
        await newMember.save();
        res.send('✅ Test Member Added!');
    } catch (err) {
        res.status(500).send('Error: ' + err.message);
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});