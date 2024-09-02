const express = require('express');
const Doctor = require('../models/Doctor');
const router = express.Router();

// Get All Doctors
router.get('/doctors', async (req, res) => {
    try {
        const doctors = await Doctor.find();
        res.json(doctors);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Mock Consultation with a Doctor
router.post('/consultation', async (req, res) => {
    const { doctorId, symptoms } = req.body;

    try {
        const doctor = await Doctor.findById(doctorId);
        if (!doctor) return res.status(400).json({ msg: 'Doctor not found' });

        // Mock AI Diagnosis
        const diagnosis = `Based on your symptoms: ${symptoms.join(', ')}, Dr. ${doctor.name} recommends...`;

        res.json({ diagnosis });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;
