const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/business-app', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const businessSchema = new mongoose.Schema({
  name: String,
  category: String,
  owner: String,
  address: String,
  phone: String,
});

const Business = mongoose.model('Business', businessSchema);

const categories = [
  "Beauty, cosmetic & personal care",
  "Education",
  "Event planner",
  "Finance",
  "Supermarket/convenience store",
  "Medical & health",
  "Hotel",
  "Non-profit organisation",
  "Restaurant",
  "Shopping & retail"
];

app.get('/api/categories', (req, res) => {
  res.json(categories);
});

app.post('/api/businesses', async (req, res) => {
  const { name, category, owner, address, phone } = req.body;
  const newBusiness = new Business({ name, category, owner, address, phone });
  await newBusiness.save();
  res.json({ success: true, data: newBusiness });
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
