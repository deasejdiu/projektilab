// userController.js

const db = require('../db'); // Assuming you have a separate file for database connection

const userController = {
  getAllUsers: (req, res) => {
    const sql = 'SELECT * FROM users';
    db.query(sql, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json(result);
    });
  },
  getUserById: (req, res) => {
    const { id } = req.params;
    const sql = `SELECT * FROM users WHERE id = ${id}`;
    db.query(sql, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      if (result.length === 0) {
        res.status(404).json({ message: 'User not found' });
        return;
      }
      res.json(result[0]);
    });
  },
  createUser: (req, res) => {
    const { name, email } = req.body;
    const sql = `INSERT INTO users (name, email) VALUES ('${name}', '${email}')`;
    db.query(sql, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({ message: 'User created successfully' });
    });
  },
  updateUser: (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    const sql = `UPDATE users SET name = '${name}', email = '${email}' WHERE id = ${id}`;
    db.query(sql, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({ message: 'User updated successfully' });
    });
  },
  deleteUser: (req, res) => {
    const { id } = req.params;
    const sql = `DELETE FROM users WHERE id = ${id}`;
    db.query(sql, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({ message: 'User deleted successfully' });
    });
  }
};

module.exports = userController;

