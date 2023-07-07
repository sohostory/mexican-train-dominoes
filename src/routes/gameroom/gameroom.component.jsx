import { useParams } from "react-router-dom";

const Gameroom = () => {
  const params = useParams();
  const { roomName } = params;

  return (
    <div className="gameroom-container">
      <h3>Room Name: {roomName}</h3>
    </div>
  );
};

export default Gameroom;
