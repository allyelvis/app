require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const businessRoutes = require('./routes/businessRoutes');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// Connect to MongoDB
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('MongoDB connection error:', err);
});

// Use routes
app.use('/api/businesses', businessRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
