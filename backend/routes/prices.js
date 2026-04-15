const express = require('express');
const router = express.Router();

// GET /api/prices
router.get('/', (req, res) => {
  res.json([
    { crop: 'Onion', price: 2840, change: '+6.8%' },
    { crop: 'Potato', price: 1650, change: '-2.4%' }
  ]);
});

// GET /api/prices/:crop
router.get('/:crop', (req, res) => {
  res.json({ crop: req.params.crop, price: 2840, change: '+6.8%' });
});

module.exports = router;
