const express = require('express');
const db = require('./util/db');

const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Connect to the database
db();

// Start the server
app.listen(3027, () => {
  console.log('Server is running on http://localhost:3027');
});