import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/button/button.component";
import StandingList from "../../components/standing-list/standing-list.component";
import { Container, Row, Col } from "react-bootstrap";

const Standing = ({ players }) => {
  const navigate = useNavigate();
  const params = useParams();
  const { roomName } = params;

  const currentStanding = players.sort((a, b) => {
    return a.totalScore - b.totalScore;
  });

  const continueGame = () => {
    navigate(`/gameroom/${roomName}`);
  };

  return (
    <Container>
      <Row>
        <StandingList currentStanding={currentStanding} />
      </Row>
      <Row className="mt-5  justify-content-md-center">
        <Button type="button" onClick={continueGame}>
          Continue Game
        </Button>
      </Row>
    </Container>
  );
};

export default Standing;
