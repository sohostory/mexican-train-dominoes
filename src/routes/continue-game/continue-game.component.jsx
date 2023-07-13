import axios from "axios";
import { useState } from "react";

import FormInput from "../../components/form-input/form-input.component";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/button.component";
import { Col, Container, Row } from "react-bootstrap";

const ContinueGame = ({ setPlayers, setRound }) => {
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState("");
  const [roomName, setRoomName] = useState("");

  const handleChange = (event) => {
    const { value } = event.target;
    setRoomName(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (roomName === "") {
      setErrorMessage("Please add a name for the room");
      return;
    }

    try {
      // Send the request to retrieve the game room data
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/api/gameroom/${roomName}`
      );
      const gameRoomData = response.data;

      // Check if the game room exists
      if (!gameRoomData) {
        setErrorMessage(
          "The game room does not exist. Please enter a valid room name."
        );
        return;
      }

      // Extract the necessary data from the response
      const { round, players } = gameRoomData;

      // Update the players
      setPlayers(players);
      // Update the round number
      setRound(round);

      // Perform any necessary actions with the retrieved data
      // For example, you can navigate to the game room page with the retrieved data
      navigate(`/gameroom/${roomName}`, {
        state: { round, players },
      });
    } catch (error) {
      console.error("Error retrieving game room data:", error);
      setErrorMessage(
        "An error occurred while retrieving the game room data. Please try again."
      );
    }
  };

  return (
    <Container>
      <Row>
        <h3 className="text-center fs-4 mb-5">Continue Game</h3>
      </Row>

      <form onSubmit={handleSubmit} className="mt-5">
        <Row className="justify-content-md-center">
          <Col lg={5}>
            <FormInput
              label="Game Room Name"
              value={roomName}
              onChange={handleChange}
            />
          </Col>
          <Col lg={4}>
            <Button type="submit">Continue Game</Button>
          </Col>
        </Row>
      </form>

      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </Container>
  );
};

export default ContinueGame;
