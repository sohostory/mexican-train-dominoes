import { useState } from 'react';

const PlayerManagement = ({ onPlayerAdd }) => {
  const [name, setName] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAddPlayer = () => {
    if (name.trim() !== '') {
      onPlayerAdd(name.trim());
      setName('');
    }
  };

  return (
    <div>
      <h2>Player Management</h2>
      <input
        type="text"
        placeholder="Enter player name"
        value={name}
        onChange={handleNameChange}
      />
      <button onClick={handleAddPlayer}>Add Player</button>
    </div>
  );
};

export default PlayerManagement;
