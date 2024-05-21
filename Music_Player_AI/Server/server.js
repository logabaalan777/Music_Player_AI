const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const Grid = require('gridfs-stream');
const fs = require('fs');
// const pickle = require('pickle');
// const GridFsStorage = require('multer-gridfs-storage');
// const multer = require('multer');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

const dbURI = 'mongodb://localhost:27017/Spotify-DB';

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
        const connection = mongoose.connection;
        gfs = Grid(connection.db, mongoose.mongo);
        gfs.collection('fs');
    })
    .catch(err => {
        console.error('MongoDB connection failed:', err);
        process.exit(1);
    });

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

const User = mongoose.model('users', userSchema);

const userdetailsSchema = new mongoose.Schema({
    nickname: { type: String, required: true },
    dob: { type: Date, required: true },
    mobile: { type: String, required: true },
    selectedState: { type: String, required: true },
    selectedArtists: { type: [String], required: true }
});

const Userdetails = mongoose.model('Userdetails', userdetailsSchema);

const subscriptionSchema = new mongoose.Schema({
    name: { type: String, required: true },
    premiumCost: { type: String, required: true }
});

const Subscription = mongoose.model('Subscription', subscriptionSchema);

app.post('/api/users/subscriptions', async(req, res) => {
    try {
        const { name, premiumCost } = req.body;
        const subscription = new Subscription({ name, premiumCost });
        await subscription.save();
        res.status(201).json({ message: 'Subscription saved successfully' });
    } catch (error) {
        console.error('Error saving subscription:', error);
        res.status(500).json({ error: 'Failed to save subscription' });
    }
});

app.post('/api/users/register', async(req, res) => {
    const { email, password } = req.body;
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'User already exists' });
        }
        const newUser = new User({ email, password });
        await newUser.save();
        res.status(200).json({ message: 'Account created successfully.' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post('/api/users/loginpage', async(req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user || user.password !== password) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        res.status(200).json({ message: 'Login successful' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post('/api/userdetails/saveUserData', async(req, res) => {
    try {
        const { nickname, dob, mobile, selectedState, selectedArtists } = req.body;
        const usermess = new Userdetails({
            nickname,
            dob,
            mobile,
            selectedState,
            selectedArtists
        });
        await usermess.save();
        res.status(200).json({ message: 'User data saved successfully!' });
    } catch (error) {
        console.error('Error saving user data:', error);
        res.status(500).json({ error: 'Failed to save user data. Please try again.' });
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));