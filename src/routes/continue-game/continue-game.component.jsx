import { useState } from "react";

import FormInput from "../../components/form-input/form-input.component";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/button.component";
import { Col, Container, Row } from "react-bootstrap";

const ContinueGame = () => {
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState("");
  const [roomName, setRoomName] = useState("");

  const handleChange = (event) => {
    const { value } = event.target;
    setRoomName(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (roomName !== "") {
      navigate(`/gameroom/${roomName}`);
    } else {
      setErrorMessage("Please add a name for the room");
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
