const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Basic health check
app.get('/', (req, res) => {
  res.json({ status: 'ok', service: 'KrishiMitra API' });
});

// Routes configuration
app.use('/api/auth', require('./routes/auth'));
app.use('/api/prices', require('./routes/prices'));
app.use('/api/forecast', require('./routes/forecast'));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

module.exports = app;
