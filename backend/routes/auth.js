const express = require('express');
const router = express.Router();

// POST /api/auth/send-otp
router.post('/send-otp', (req, res) => {
  res.json({ success: true, message: 'OTP sent successfully (mock).' });
});

// POST /api/auth/verify-otp
router.post('/verify-otp', (req, res) => {
  res.json({ success: true, token: 'mock-jwt-token', user: { name: 'Ramesh Patel', location: 'Indore' } });
});

module.exports = router;
