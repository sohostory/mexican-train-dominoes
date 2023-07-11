import { useNavigate, useParams } from "react-router-dom";
import StandingList from "../../components/standing-list/standing-list.component";
import Button from "../../components/button/button.component";

const EndGame = ({ players }) => {
  const navigate = useNavigate();
  const params = useParams();
  const { roomName } = params;

  const finalStanding = players.sort((a, b) => {
    return a.totalScore - b.totalScore;
  });

  const newGame = () => {
    navigate("/new");
  };

  return (
    <div className="end-game-container">
      <h2>Final Results</h2>
      <StandingList currentStanding={finalStanding} />
      <Button type="button" onClick={newGame}>
        Play New Game
      </Button>
    </div>
  );
};

export default EndGame;
