import { useState } from "react";

import FormInput from "../../components/form-input/form-input.component";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/button.component";

const NewGame = () => {
  const [roomName, setRoomName] = useState("");

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { value } = event.target;
    setRoomName(value);
    console.log(roomName);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    navigate(`/gameroom/${roomName}`);
  };

  return (
    <div className="new-game-container">
      <h2>this is new game</h2>
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
