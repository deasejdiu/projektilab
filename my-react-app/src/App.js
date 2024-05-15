import React, { useState, useEffect } from 'react';
import AddUserForm from './components/AddUserForm';
import UserList from './components/UserList';
import DeleteUserButton from './components/DeleteUserButton';

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
  };

  const handleDeleteUser = (userId) => {
    // Placeholder code for deleting user from backend API
    fetch(`/api/users/${userId}`, { method: 'DELETE' })
      .then(() => setUsers(users.filter(user => user.id !== userId)));
  };

  return (
    <div>
      <h1>User Management System</h1>
      <AddUserForm onAdd={handleAddUser} />
      <UserList users={users} onDelete={handleDeleteUser} />
      {/* Include DeleteUserButton component */}
      <DeleteUserButton onDelete={handleDeleteUser} />
    </div>
  );
};

export default App;




