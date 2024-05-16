// server.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userController = require('./controllers/userController'); // Import user controller
//const db = require('./db'); // Import database connection

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// CRUD Routes
app.get('/users', userController.getAllUsers);
app.get('/users/:id', userController.getUserById);
app.post('/users', userController.createUser);
app.put('/users/:id', userController.updateUser);
app.delete('/users/:id', userController.deleteUser);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
