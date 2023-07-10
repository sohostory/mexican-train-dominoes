import { useNavigate, useParams } from "react-router-dom";
import FormInput from "../../components/form-input/form-input.component";
import { useState } from "react";

import "./gameroom.styles.scss";

import Button from "../../components/button/button.component";

const Gameroom = ({ players, setPlayers, round, setRound }) => {
  const navigate = useNavigate();

  const [roundScores, setRoundScores] = useState(
    Array(players.length).fill("")
  );

  const params = useParams();
  const { roomName } = params;

  const handleChange = (event, index) => {
    const { value } = event.target;
    const updatedScores = [...roundScores];
    updatedScores[index] = value;
    setRoundScores(updatedScores);
  };
  const endRound = () => {
    const updatedPlayers = players.map((player, index) => ({
      ...player,
      scores: [...player.scores, roundScores[index]],
      totalScore: player.totalScore + parseInt(roundScores[index]),
    }));
    setPlayers(updatedPlayers);
    setRoundScores(Array(players.length).fill(""));
    setRound(round - 1);
    console.log(players);
    navigate("standing");
  };

  const endGame = () => {};

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
                <FormInput
                  label="Enter Score"
                  value={roundScores[index]}
                  onChange={(event) => handleChange(event, index)}
                />
              </li>
            );
          })}
        </ul>
        {round !== 0 ? (
          <Button type="button" onClick={endRound}>
            End Round
          </Button>
        ) : (
          <Button type="button" onClick={endGame}>
            End Game
          </Button>
        )}
      </div>
    </div>
  );
};

export default Gameroom;
