import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Button from "./components/button/button.component";

import "./App.css";
import Start from "./routes/start/start.component";
import NewGame from "./routes/new-game/new-game.component";
import ContinueGame from "./routes/continue-game/continue-game.component";
import Gameroom from "./routes/gameroom/gameroom.component";
import Standing from "./routes/standing/standing.component";
import EndGame from "./routes/end-game/end-game.component";
import Rules from "./routes/rules/rules.components";
const App = () => {
  const [players, setPlayers] = useState([]);
  const [round, setRound] = useState(12);

  // const [roundScores, setRoundScores] = useState([]);
  //
  // const handlePlayerAddition = (name) => {
  //   setPlayers([...players, { name, scores: [] }]);
  // };
  //
  // const handleScoreUpdate = (playerIndex, score) => {
  //   const updatedPlayers = [...players];
  //   updatedPlayers[playerIndex].scores.push(score);
  //   setPlayers(updatedPlayers);
  // };
  //
  // const handleRoundEnd = () => {
  //   setRoundScores([...roundScores, players.map((player) => player.scores)]);
  // };

  return (
    <div className="app-container">
      <h1>Mexican Train</h1>
      <h2>Score Tracker App</h2>
      {/*<PlayerManagement onPlayerAdd={handlePlayerAddition} />*/}
      {/*<ScoreTracker players={players} roundScores={roundScores} />*/}
      {/*<GameBoard*/}
      {/*  players={players}*/}
      {/*  onScoreUpdate={handleScoreUpdate}*/}
      {/*  onRoundEnd={handleRoundEnd}*/}
      {/*/>*/}

      <Routes>
        <Route index element={<Start />} />
        <Route
          path="/new"
          element={<NewGame players={players} setPlayers={setPlayers} />}
        />
        <Route
          path="/continue"
          element={<ContinueGame players={players} setPlayers={setPlayers} />}
        />
        <Route path="/rules" element={<Rules />} />

        {/*GameRoom*/}
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
