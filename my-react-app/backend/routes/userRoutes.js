const express = require('express');
const router = express.Router();
const db = require('../../db'); 

router.post('/', (req, res) => {
  const { username, email } = req.body;

  const addUserQuery = 'INSERT INTO users (username, email) VALUES (?, ?)';
  db.query(addUserQuery, [username, email], (err, result) => {
    if (err) {
      console.error('Error adding user:', err);
      res.status(500).json({ error: 'Failed to add user' });
    } else {
      res.status(201).json({ message: 'User added successfully', userId: result.insertId });
    }
  });
});

router.delete('/:userId', (req, res) => {
  const userId = req.params.userId;

  const deleteUserQuery = 'DELETE FROM users WHERE id = ?';
  db.query(deleteUserQuery, [userId], (err, result) => {
    if (err) {
      console.error('Error deleting user:', err);
      res.status(500).json({ error: 'Failed to delete user' });
    } else if (result.affectedRows === 0) {
      res.status(404).json({ error: 'User not found' });
    } else {
      res.status(200).json({ message: 'User deleted successfully' });
    }
  });
});

module.exports = router;



