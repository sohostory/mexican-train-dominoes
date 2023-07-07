import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import ScoreTracker from "./components/score-tracker/score-tracker";
import GameBoard from "./components/game-board/game-board.components";
import PlayerManagement from "./components/player-management/player-management.component";

import Button from "./components/button/button.component";

import "./App.css";
import Start from "./routes/start/start.component";
import NewGame from "./routes/new-game/new-game.component";
import ContinueGame from "./routes/continue-game/continue-game.component";
import Gameroom from "./routes/gameroom/gameroom.component";
const App = () => {
  const [players, setPlayers] = useState([]);
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
      <h1>Mexican Train Dominoes Score Keeper</h1>
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

        {/*GameRoom*/}
        <Route
          path="/gameroom/:roomName"
          element={<Gameroom players={players} setPlayers={setPlayers} />}
        />
      </Routes>
    </div>
  );
};

export default App;
