const express = require('express');
const router = express.Router();

// GET /api/forecast/:crop
router.get('/:crop', async (req, res) => {
  // Stub for Gemini AI price forecast prediction
  res.json({
    crop: req.params.crop,
    action: "HOLD",
    action_hindi: "अभी मत बेचिए",
    days_to_wait: 8,
    target_price: 3120,
    confidence: 87,
    reason_hindi: "बारिश कम होने और दिवाली की मांग से भाव बढ़ेगा।",
    reason_english: "Low rainfall and Diwali demand will increase prices.",
    "7day_forecast": [2840, 2910, 2870, 3010, 3060, 3100, 3120],
    shap_factors: [
      { factor: "Rainfall shortage", impact: 312, emoji: "🌧" }
    ]
  });
});

module.exports = router;
