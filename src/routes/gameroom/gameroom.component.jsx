import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import FormInput from "../../components/form-input/form-input.component";
import FormNumber from "../../components/form-number/form-number.component";
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
import StandingList from "../../components/standing-list/standing-list.component";

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
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const params = useParams();
  const { roomName } = params;

  const handleChange = (event, index) => {
    const { value } = event.target;
    const updatedScores = [...roundScores];
    updatedScores[index] = value;
    setRoundScores(updatedScores);
  };

  const handleWinner = (index) => {
    const updatedScores = [...roundScores];
    updatedScores[index] = "0";
    setRoundScores(updatedScores);
  };

  const endRound = async () => {
    if (roundScores.some((score) => score === "")) {
      setErrorMessage("Please enter scores for all players.");
      return;
    }
    try {
      const updatedPlayers = players.map((player, index) => ({
        ...player,
        scores: [...player.scores, roundScores[index]],
        totalScore: player.totalScore + parseInt(roundScores[index]),
      }));

      // Send the updated players data to the server
      await axios.put(
        `${process.env.REACT_APP_SERVER_URL}/api/gameroom/${roomName}`,
        { players: updatedPlayers }
      );

      setPlayers(updatedPlayers);
      setRoundScores(Array(players.length).fill(""));
      setRound(round - 1);
      console.log(players);
      // navigate("standing");
    } catch (error) {
      console.error("Error updating scores:", error);
      setErrorMessage(
        "An error occurred while updating scores. Please try again."
      );
    }
  };

  const currentStanding = players.sort((a, b) => {
    return a.totalScore - b.totalScore;
  });

  const endGame = async () => {
    try {
      // Send the final players data to the server
      await axios.put(
        `${process.env.REACT_APP_SERVER_URL}/api/gameroom/${roomName}`,
        { players }
      );

      navigate("endgame");
    } catch (error) {
      console.error("Error ending game:", error);
      setErrorMessage(
        "An error occurred while ending the game. Please try again."
      );
    }
  };

  return (
    <Container>
      <Row className="d-flex align-items-start p-3">
        <Col className="border-end border-dark-subtle border-2">
          <Row>
            <h3 className="text-center fs-5">Room Name: {roomName}</h3>
            <h3 className="text-center fs-5">Round: Double {round}</h3>
          </Row>
          <Row className="justify-content-md-center mb-5">
            <Col md="auto">
              {doubleImages.hasOwnProperty(round) && (
                <img
                  src={doubleImages[round]}
                  alt={`dominoes double ${round}`}
                />
              )}
            </Col>
          </Row>

          {players.map((player, index) => {
            return (
              <Row
                key={index}
                className="justify-content-md-center align-items-center"
              >
                <Col
                  key={index}
                  lg={3}
                  className="text-start"
                  onClick={() => handleWinner(index)}
                >
                  {player.name}
                </Col>
                <Col lg={3}>
                  <FormNumber
                    label="Enter Score"
                    value={roundScores[index]}
                    onChange={(event) => handleChange(event, index)}
                  />
                </Col>
              </Row>
            );
          })}

          {successMessage && (
            <p className="success-message">{successMessage}</p>
          )}
          {errorMessage && <p className="error-message mt-3">{errorMessage}</p>}

          <Row className="mt-5 justify-content-md-center">
            <Col lg={6}>
              {round !== 0 ? (
                <Button type="button" onClick={endRound}>
                  End Round
                </Button>
              ) : (
                <Button type="button" onClick={endGame}>
                  End Game
                </Button>
              )}
            </Col>
          </Row>
        </Col>
        <Col>
          <StandingList currentStanding={currentStanding} />
        </Col>
      </Row>
    </Container>
  );
};

export default Gameroom;
