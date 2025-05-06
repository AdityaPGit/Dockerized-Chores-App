import React from 'react';

const ChoreList = ({ chores, deleteChore }) => {
  return (
    <ul>
      {chores.map((chore) => (
        <li key={chore._id}>
          {chore.chore}
          <button className="delete-btn" onClick={() => deleteChore(chore._id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ChoreList;
