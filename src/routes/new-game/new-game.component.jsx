import { useEffect, useState } from "react";

import FormInput from "../../components/form-input/form-input.component";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/button.component";
import { Col, Container, Row } from "react-bootstrap";

const NewGame = ({ players, setPlayers, setRound }) => {
  const [roomName, setRoomName] = useState("");
  const [playerName, setPlayerName] = useState("");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  let roundNum = 0;

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
  const handleSubmit = (event) => {
    event.preventDefault();
    if (roomName !== "") {
      if (players.length > 1 && roomName.trim() !== "") {
        setIsFormSubmitted(true);
        navigate(`/gameroom/${roomName}`);
      } else {
        setErrorMessage("Please add at least 2 players to start game.");
      }
    } else {
      setErrorMessage("Please add a name for the room");
    }
  };

  return (
    <Container>
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
          <Col lg={4}>
            <Button type="submit">Add Player</Button>
          </Col>
        </Row>
      </form>
      {players.map((player, index) => {
        return (
          <Row className="justify-content-md-center">
            <Col lg={2}>Player {index + 1}:</Col>{" "}
            <Col lg={2} className="text-start">
              {player.name}
            </Col>
          </Row>
        );
      })}

      <form onSubmit={handleSubmit} className="mt-5">
        <Row className="justify-content-md-center mb-3 mt-5">
          {players.length < 5 && (
            <Col lg={2}>
              <label>
                <input
                  type="radio"
                  name="roundNum"
                  value={9}
                  onChange={handleRound}
                />
                9 Rounds
              </label>
            </Col>
          )}

          <Col lg={2}>
            <label>
              <input
                defaultChecked
                type="radio"
                name="roundNum"
                value={12}
                onChange={handleRound}
              />
              12 Rounds
            </label>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col lg={5}>
            <FormInput
              label="Game Room Name"
              value={roomName}
              onChange={handleChange}
            />
          </Col>
          <Col lg={4}>
            <Button type="submit">Start Game</Button>
          </Col>
        </Row>
      </form>

      {successMessage && <p className="success-message">{successMessage}</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}

      {/*<Row>*/}
      {/*  <Col>12 <form>12</form></Col>*/}
      {/*</Row>*/}
    </Container>
  );
};

export default NewGame;
