import React, { useState } from 'react';

const ChoreForm = ({ fetchChores }) => {
  const [chore, setChore] = useState('');

  const handleChange = (e) => {
    setChore(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (chore) {
      await fetch('http://localhost:5001/chores', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chore }),
      });
      setChore('');
      fetchChores();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={chore}
        onChange={handleChange}
        placeholder="Add a new chore"
      />
      <button type="submit">Add Chore</button>
    </form>
  );
};

export default ChoreForm;
