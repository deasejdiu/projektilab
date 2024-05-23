
import React, { useState } from 'react';

const UpdateUserForm = ({ user, onUpdate }) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) return;
    onUpdate({ ...user, name, email });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <button type="submit">Update User</button>
    </form>
  );
};

export default UpdateUserForm;
