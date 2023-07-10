import { useNavigate, useParams } from "react-router-dom";
import StandingList from "../../components/standing-list/standing-list.component";

const EndGame = ({ players }) => {
  const navigate = useNavigate();
  const params = useParams();
  const { roomName } = params;

  const finalStanding = players.sort((a, b) => {
    return a.totalScore - b.totalScore;
  });

  return (
    <div className="end-game-container">
      <h2>Final Results</h2>
      <StandingList currentStanding={finalStanding} />
    </div>
  );
};

export default EndGame;
