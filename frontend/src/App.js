import React, { useState, useEffect } from 'react';
import './App.css';
import ChoreForm from './components/ChoreForm';
import ChoreList from './components/ChoreList';

function App() {
  const [chores, setChores] = useState([]);

  const fetchChores = async () => {
    const response = await fetch('http://localhost:5001/chores');
    const data = await response.json();
    setChores(data);
  };

  const deleteChore = async (id) => {
    await fetch(`http://localhost:5001/chores/${id}`, {
      method: 'DELETE',
    });
    fetchChores();
  };

  useEffect(() => {
    fetchChores();
  }, []);

  return (
    <div className="App">
      <h1>Chores App</h1>
      <ChoreForm fetchChores={fetchChores} />
      <ChoreList chores={chores} deleteChore={deleteChore} />
    </div>
  );
}

export default App;
