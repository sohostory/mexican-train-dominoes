import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Button from "./components/button/button.component";

import "./App.css";
import Start from "./routes/start/start.component";
import NewGame from "./routes/new-game/new-game.component";
import ContinueGame from "./routes/continue-game/continue-game.component";
import Gameroom from "./routes/gameroom/gameroom.component";
import Standing from "./routes/standing/standing.component";
import EndGame from "./routes/end-game/end-game.component";
import Rules from "./routes/rules/rules.components";
import { Container, Row, Col } from "react-bootstrap";
const App = () => {
  const [players, setPlayers] = useState([]);
  const [round, setRound] = useState(12);

  return (
    <div className="app-container">
      <h1 className="text-center font-bold underline">Mexican Train</h1>
      <h2 className="text-center mb-5">Score Tracker App</h2>

      <Routes>
        <Route index element={<Start />} />
        <Route
          path="/new"
          element={
            <NewGame
              players={players}
              setPlayers={setPlayers}
              round={round}
              setRound={setRound}
            />
          }
        />
        <Route
          path="/continue"
          element={<ContinueGame setPlayers={setPlayers} setRound={setRound} />}
        />
        <Route path="/rules" element={<Rules />} />

        <Route
          path="/gameroom/:roomName"
          element={
            <Gameroom
              players={players}
              setPlayers={setPlayers}
              round={round}
              setRound={setRound}
            />
          }
        />
        <Route
          path="gameroom/:roomName/standing"
          element={<Standing players={players} round={round} />}
        />
        <Route
          path="gameroom/:roomName/endgame"
          element={<EndGame players={players} />}
        />
      </Routes>
    </div>
  );
};

export default App;
