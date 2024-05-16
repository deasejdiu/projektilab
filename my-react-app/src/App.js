import React, { useState, useEffect } from 'react';
import './App.css'; // Import CSS file
import AddUserForm from './components/AddUserForm';
import UserList from './components/UserList';

const App = () => {
  const [users, setUsers] = useState([]);

  // Fetch users from backend
  useEffect(() => {
    // Placeholder code for fetching users from backend API
    fetch('/api/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  const handleAddUser = (user) => {
    // Placeholder code for adding user to backend API
    fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
    .then(response => response.json())
    .then(newUser => setUsers([...users, newUser])); // Assuming the backend returns the newly added user
  };

  const handleDeleteUser = (userId) => {
    // Placeholder code for deleting user from backend API
    fetch(`/api/users/${userId}`, { method: 'DELETE' })
      .then(() => setUsers(users.filter(user => user.id !== userId)));
  };

  return (
    <div className="container">
      <h1>User Management System</h1>
      <AddUserForm onAdd={handleAddUser} />
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <UserList users={users} onDelete={handleDeleteUser} />
        </table>
      </div>
    </div>
  );
};

export default App;




