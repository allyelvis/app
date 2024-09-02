const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

// Middlewares
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost/ai-hospital', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Simple Route to Test the Server
app.get('/', (req, res) => {
    res.send('AI Hospital API is running');
});

// Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// Import Routes
const authRoutes = require('./routes/auth');
const doctorRoutes = require('./routes/doctor');

// Use Routes
app.use('/api/auth', authRoutes);
app.use('/api', doctorRoutes);
