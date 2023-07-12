import { useNavigate, useParams } from "react-router-dom";
import FormInput from "../../components/form-input/form-input.component";
import { useEffect, useState } from "react";

import Button from "../../components/button/button.component";

import double0 from "../../assets/dominoes/double0.gif";
import double1 from "../../assets/dominoes/double1.gif";
import double2 from "../../assets/dominoes/double2.gif";
import double3 from "../../assets/dominoes/double3.gif";
import double4 from "../../assets/dominoes/double4.gif";
import double5 from "../../assets/dominoes/double5.gif";
import double6 from "../../assets/dominoes/double6.gif";
import double7 from "../../assets/dominoes/double7.gif";
import double8 from "../../assets/dominoes/double8.gif";
import double9 from "../../assets/dominoes/double9.gif";
import double10 from "../../assets/dominoes/double10.gif";
import double11 from "../../assets/dominoes/double11.gif";
import double12 from "../../assets/dominoes/double12.gif";
import { Container, Row, Col } from "react-bootstrap";

const doubleImages = {
  0: double0,
  1: double1,
  2: double2,
  3: double3,
  4: double4,
  5: double5,
  6: double6,
  7: double7,
  8: double8,
  9: double9,
  10: double10,
  11: double11,
  12: double12,
};

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

  const endGame = () => {
    navigate("endgame");
  };

  return (
    <Container>
      <Row>
        <h3 className="text-center">Room Name: {roomName}</h3>
        <h3 className="text-center">Round: Double {round}</h3>
      </Row>
      <Row className="justify-content-md-center">
        <Col md="auto">
          {doubleImages.hasOwnProperty(round) && (
            <img src={doubleImages[round]} alt={`dominoes double ${round}`} />
          )}
        </Col>
      </Row>

      {players.map((player, index) => {
        return (
          <Row>
            <Col key={index}>{player.name}</Col>
            <Col xs={6}>
              <FormInput
                label="Enter Score"
                value={roundScores[index]}
                onChange={(event) => handleChange(event, index)}
              />
            </Col>
          </Row>
        );
      })}

      <Row className="mt-5 justify-content-md-center">
        {round !== 0 ? (
          <Button type="button" onClick={endRound}>
            End Round
          </Button>
        ) : (
          <Button type="button" onClick={endGame}>
            End Game
          </Button>
        )}
      </Row>
    </Container>
  );
};

export default Gameroom;
