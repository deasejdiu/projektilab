const mysql = require('mysql');

// Database connection setup
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'my_database'
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to MySQL');
  
  // Create tables if they don't exist
  const createTablesQuery = `
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      username VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL
    );

    CREATE TABLE IF NOT EXISTS posts (
      id INT AUTO_INCREMENT PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      content TEXT,
      user_id INT,
      FOREIGN KEY (user_id) REFERENCES users(id)
    );
  `;
  
  db.query(createTablesQuery, (err, result) => {
    if (err) {
      throw err;
    }
    console.log('Tables created successfully');
  });
});

module.exports = db;

