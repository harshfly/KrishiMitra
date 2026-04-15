require('dotenv').config();
const app = require('./app');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/krishimitra';

// Start server (mongoose connection skipped for mock boot if needed)
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('✅ Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`🚀 KrishiMitra Backend running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.warn('⚠️ MongoDB connection error, starting without DB for now:', err.message);
    app.listen(PORT, () => {
      console.log(`🚀 KrishiMitra Backend running WITHOUT DB on port ${PORT}`);
    });
  });
