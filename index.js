const express = require('express');
const db = require('./util/db');

const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Connect to the database
db();

// Use article routes
const articleRoutes = require('./routes/article');
app.use('/', articleRoutes);

// Start the server
app.listen(3027, () => {
  console.log('Server is running on http://localhost:3027');
});