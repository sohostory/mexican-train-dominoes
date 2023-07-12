import { useEffect, useState } from "react";

import FormInput from "../../components/form-input/form-input.component";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/button.component";

const NewGame = ({ players, setPlayers }) => {
  const [roomName, setRoomName] = useState("");
  const [playerName, setPlayerName] = useState("");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const navigate = useNavigate();

  const handlePlayerName = (event) => {
    const { value } = event.target;
    setPlayerName(value);
  };

  const handleAddPlayer = (event) => {
    event.preventDefault();

    if (playerName.trim() !== "") {
      setPlayers([...players, { name: playerName, scores: [], totalScore: 0 }]);
      setPlayerName("");
    }
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setRoomName(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (players.length > 0 && roomName.trim() !== "") {
      setIsFormSubmitted(true);
      navigate(`/gameroom/${roomName}`);
    }
  };

  return (
    <div className="new-game-container">
      <h2>Add Players</h2>

      {!isFormSubmitted && (
        <>
          <form onSubmit={handleAddPlayer}>
            <FormInput
              label="Player Name"
              value={playerName}
              onChange={handlePlayerName}
            />
            <Button type="submit">Add Player</Button>
          </form>

          <ul>
            {players.map((player, index) => (
              <li key={index}>
                Player {index + 1}: {player.name}
              </li>
            ))}
          </ul>
        </>
      )}

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
