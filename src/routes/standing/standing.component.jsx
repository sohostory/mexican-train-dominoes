import "./standing.styles.scss";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/button/button.component";
import StandingList from "../../components/standing-list/standing-list.component";

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
    <div className="standing-container">
      <StandingList currentStanding={currentStanding} />
      <Button type="button" onClick={continueGame}>
        Continue Game
      </Button>
    </div>
  );
};

export default Standing;
