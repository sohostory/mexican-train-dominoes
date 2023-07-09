import { useEffect, useState } from "react";

import FormInput from "../../components/form-input/form-input.component";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/button.component";

import "./new-game.styles.scss";

const NewGame = ({ players, setPlayers }) => {
  const [roomName, setRoomName] = useState("");
  const [playerName, setPlayerName] = useState("");

  const navigate = useNavigate();

  const handlePlayerName = (event) => {
    const { value } = event.target;
    setPlayerName(value);
  };

  const handleAddPlayer = (event) => {
    event.preventDefault();

    setPlayers([...players, { name: playerName, scores: [], totalScore: 0 }]);
    setPlayerName("");
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setRoomName(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    navigate(`/gameroom/${roomName}`);
  };

  return (
    <div className="new-game-container">
      <h2>Add Players</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>
            Player {index + 1}: {player.name}
          </li>
        ))}
      </ul>
      <div className="add-player-container">
        <form onSubmit={handleAddPlayer}>
          <FormInput
            label="Player Name"
            value={playerName}
            onChange={handlePlayerName}
          />
          <Button type="submit">Add Player</Button>
        </form>
      </div>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Game Room Name"
          value={roomName}
          onChange={handleChange}
        />
        <Button type="submit">Start Game</Button>
      </form>
    </div>
  );
};

export default NewGame;
