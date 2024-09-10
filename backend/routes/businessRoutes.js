const express = require('express');
const { getBusinesses, createBusiness } = require('../controllers/businessController');

const router = express.Router();

// GET all businesses
router.get('/', getBusinesses);

// POST new business
router.post('/', createBusiness);

module.exports = router;
