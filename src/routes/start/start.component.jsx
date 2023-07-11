import Button from "../../components/button/button.component";
import { useNavigate } from "react-router-dom";

const Start = () => {
  const navigate = useNavigate();

  const handleNewGame = () => {
    navigate("/new");
  };

  const handleContinue = () => {
    navigate("/continue");
  };

  const handleRules = () => {
    navigate("/rules");
  };

  return (
    <div className="buttons-container">
      <Button onClick={handleNewGame}>NEW GAME</Button>
      <Button onClick={handleContinue}>CONTINUE</Button>
      <Button onClick={handleRules}>GAME RULES</Button>
    </div>
  );
};

export default Start;
