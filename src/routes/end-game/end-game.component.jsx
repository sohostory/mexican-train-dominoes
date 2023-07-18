import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import StandingList from "../../components/standing-list/standing-list.component";
import Button from "../../components/button/button.component";
import { Container, Row, Col } from "react-bootstrap";

const EndGame = ({ players, setPlayers, setRound }) => {
  const navigate = useNavigate();
  const params = useParams();
  const { roomName } = params;

  const finalStanding = players.sort((a, b) => {
    return a.totalScore - b.totalScore;
  });

  const newGame = async () => {
    try {
      // Send the request to delete the game room
      await axios.delete(
        `${process.env.REACT_APP_SERVER_URL}/api/gameroom/${roomName}`
      );
      setPlayers([]);
      setRound(12);
      navigate("/new");
    } catch (error) {
      console.error("Error deleting game room:", error);
      // Handle the error accordingly
    }
  };

  const goToMain = () => {
    setPlayers([]);
    setRound(12);
    navigate("/");
  };

  return (
    <Container>
      <Row className="d-flex align-items-start p-3 h-100">
        <Col className="border-end border-dark-subtle border-2 h-100">
          <h3 className="fs-3">Winner</h3>
          <h4 className="mt-5 fs-4 fw-bold text-uppercase">
            {finalStanding[0].name}
          </h4>
        </Col>
        <Col>
          <Row className="mb-5">
            <h3 className="text-center fs-4">Final Results</h3>
          </Row>
          <Row>
            <StandingList currentStanding={finalStanding} />
          </Row>
          <Row className="mt-5  justify-content-md-center">
            <Col className="mt-5" lg={6}>
              <Button type="button" onClick={newGame}>
                Play New Game
              </Button>
              <Button type="button" onClick={goToMain}>
                Go To Main
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default EndGame;
