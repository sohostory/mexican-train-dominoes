import axios from "axios";
import { useState } from "react";

import FormInput from "../../components/form-input/form-input.component";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/button.component";
import { Col, Container, Row } from "react-bootstrap";

const NewGame = ({ players, setPlayers, round, setRound }) => {
  const [roomName, setRoomName] = useState("");
  const [playerName, setPlayerName] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

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

  const handleRound = (event) => {
    const { value } = event.target;
    setRound(value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (roomName === "") {
      setErrorMessage("Please add a name for the room");
      return;
    }

    if (players.length < 2) {
      setErrorMessage("Please add at least 2 players to start the game.");
      return;
    }

    try {
      // Send the new game room data to the server
      await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/gameroom`, {
        roomName,
        round,
        players,
      });

      navigate(`/gameroom/${roomName}`);
    } catch (error) {
      console.error("Error creating game room:", error);
      setErrorMessage(
        "An error occurred while creating the game room. Please try again."
      );
    }
  };

  return (
    <Container>
      <Row className="d-flex align-items-start p-3 h-100">
        <Col className="border-end border-dark-subtle border-2 h-100">
          <Row>
            <h3 className="text-center fs-4">Start a new game</h3>
            <h3 className="text-center fs-5">Add players</h3>
          </Row>

          <form onSubmit={handleAddPlayer} className="mt-5">
            <Row className="justify-content-md-center mb-5">
              <Col lg={5}>
                <FormInput
                  label="Player Name"
                  value={playerName}
                  onChange={handlePlayerName}
                />
              </Col>
              <Col lg={5}>
                <Button type="submit">Add Player</Button>
              </Col>
            </Row>
          </form>

          <form onSubmit={handleSubmit} className="mt-5">
            <Row className="justify-content-md-center mb-3 mt-5">
              {players.length < 5 && (
                <Col lg={3}>
                  <label>
                    <input
                      className="me-2"
                      type="radio"
                      name="roundNum"
                      value={9}
                      onChange={handleRound}
                    />
                    9 Rounds
                  </label>
                </Col>
              )}

              <Col lg={3}>
                <label>
                  <input
                    defaultChecked
                    className="me-2"
                    type="radio"
                    name="roundNum"
                    value={12}
                    onChange={handleRound}
                  />
                  12 Rounds
                </label>
              </Col>
            </Row>
            <Row className="mt-5 justify-content-md-center">
              <Col lg={5}>
                <FormInput
                  label="Game Room Name"
                  value={roomName}
                  onChange={handleChange}
                />
              </Col>
              <Col lg={5}>
                <Button type="submit">Start Game</Button>
              </Col>
            </Row>
          </form>

          {successMessage && (
            <p className="success-message">{successMessage}</p>
          )}
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </Col>

        <Col className="mb-5 h-100">
          <div>
            <h3>Players:</h3>
            {players.map((player, index) => {
              return (
                <Row key={index} className="justify-content-md-center">
                  <Col className="justify-content-md-start" lg={3}>
                    Player {index + 1}:
                  </Col>{" "}
                  <Col lg={3} className="text-start">
                    {player.name}
                  </Col>
                </Row>
              );
            })}
          </div>
        </Col>
      </Row>

      {/*<Row>*/}
      {/*  <Col>12 <form>12</form></Col>*/}
      {/*</Row>*/}
    </Container>
  );
};

export default NewGame;
