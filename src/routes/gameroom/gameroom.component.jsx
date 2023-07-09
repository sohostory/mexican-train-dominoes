import { useParams } from "react-router-dom";
import FormInput from "../../components/form-input/form-input.component";
import { useState } from "react";

import "./gameroom.styles.scss";

import Button from "../../components/button/button.component";

const Gameroom = ({ players, setPlayers }) => {
  const [round, setRound] = useState(12);
  const [roundScores, setRoundScores] = useState([]);

  const params = useParams();
  const { roomName } = params;

  const handleChange = (event) => {
    const value = event.target;
    setRoundScores([...roundScores, roundScores[]])
  }
  const endRound = () => {
    players.map((player, index) => {
      player.score.push(roundScores[index]);
    });
    console.log("players:", players);
    setRoundScores([]);
    setRound(round - 1);
  };

  return (
    <div className="gameroom-container">
      <h3>Room Name: {roomName}</h3>
      <h3>Round: Double {round}</h3>
      <div className="score-input-container">
        <ul>
          {players.map((player, index) => {
            return (
              <li key={index}>
                {player.name}
                <FormInput label="Enter Score" value={roundScores[index]} onChange={handleChange}/>
              </li>
            );
          })}
        </ul>
        <Button type="button" onClick={endRound}>
          End Round
        </Button>
      </div>
    </div>
  );
};

export default Gameroom;
