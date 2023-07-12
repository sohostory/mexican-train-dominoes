import Button from "../../components/button/button.component";
import { useNavigate } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";

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
      <Row className="justify-content-md-center">
        <Col lg={4}>
          <Button onClick={handleNewGame}>NEW GAME</Button>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col lg={4}>
          <Button onClick={handleContinue}>CONTINUE</Button>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col lg={4}>
          <Button onClick={handleGameRules}>GAME RULES</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Start;
