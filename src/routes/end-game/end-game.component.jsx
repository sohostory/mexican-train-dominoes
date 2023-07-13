import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import StandingList from "../../components/standing-list/standing-list.component";
import Button from "../../components/button/button.component";
import { Container, Row, Col } from "react-bootstrap";

const EndGame = ({ players }) => {
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
      navigate("/new");
    } catch (error) {
      console.error("Error deleting game room:", error);
      // Handle the error accordingly
    }
  };

  return (
    <Container>
      <Row className="mb-5">
        <h3 className="text-center fs-4">Final Results</h3>
      </Row>
      <Row>
        <StandingList currentStanding={finalStanding} />
      </Row>
      <Row className="mt-5  justify-content-md-center">
        <Col lg={4}>
          <Button type="button" onClick={newGame}>
            Play New Game
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default EndGame;
