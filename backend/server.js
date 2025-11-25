const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Member = require('./models/Member');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// RE-PASTE YOUR MONGODB CONNECTION STRING HERE
const MONGO_URI = 'mongodb+srv://ramasubham136_db_user:KPcE5nkmt27a3MiM@cluster0.jrxvt1n.mongodb.net/?appName=Cluster0';

mongoose.connect(MONGO_URI)
    .then(() => console.log('✅ Connected to MongoDB!'))
    .catch(err => console.error('❌ Connection Error:', err));

app.get('/add-test', async (req, res) => {
    try {
        const newMember = new Member({
            name: "Rama Subham",
            role: "Backend Lead",
            email: "ramasubham136@gmail.com",
            year: 3
        });
        await newMember.save();
        res.send("✅ Test Member Added to Database!");
    } catch (err) {
        res.status(500).send("Error: " + err.message);
    }
});

app.get('/members', async (req, res) => {
    const members = await Member.find();
    res.json(members);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});