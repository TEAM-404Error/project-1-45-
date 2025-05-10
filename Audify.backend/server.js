const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const app = express();
const port = 5000;

// Middleware
app.use(cors());  // CORS middleware to allow cross-origin requests
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/audiffy', { useNewUrlParser: true, useUnifiedTopology: true });

// Simple route to test server
app.get('/', (req, res) => {
  res.send('Audiffy Backend is running!');
});

// Add other routes like login/signup here

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
