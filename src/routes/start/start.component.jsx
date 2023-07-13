import Button from "../../components/button/button.component";
import { useNavigate } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";

import train from "../../assets/logo/train.png";

const Start = () => {
  const navigate = useNavigate();

  const handleNewGame = () => {
    navigate("/new");
  };

  const handleContinue = () => {
    navigate("/continue");
  };

  const handleGameRules = () => {
    navigate("/rules");
  };

  return (
    <Container>
      <Row className="d-flex align-content-start p-3">
        <Col className="border-end border-dark-subtle border-2">
          <img
            className="w-100 mb-3 p-4"
            src={train}
            alt="logo of train carrying dominoes"
          />
        </Col>
        <Col className="pt-5">
          <Row>
            <h2 className="text-center font-bold underline">Mexican Train</h2>
            <h3 className="text-center mb-5">Score Tracker App</h3>
          </Row>
          <Row className="justify-content-md-center">
            <Col lg={6}>
              <Button onClick={handleNewGame}>NEW GAME</Button>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col lg={6}>
              <Button onClick={handleContinue}>CONTINUE</Button>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col lg={6}>
              <Button onClick={handleGameRules}>GAME RULES</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Start;
