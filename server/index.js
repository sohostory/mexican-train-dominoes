require("dotenv").config();
const express = require("express");
const cors = require("cors");
const fs = require("fs").promises;

const app = express();
app.use(express.json());
app.use(cors());

const FILE_PATH = "gamedata.json";

async function loadGameData() {
  try {
    const data = await fs.readFile(FILE_PATH);
    return JSON.parse(data);
  } catch (error) {
    console.error("Failed to load game data:", error);
    return [];
  }
}

async function saveGameData(gamedata) {
  try {
    await fs.writeFile(FILE_PATH, JSON.stringify(gamedata, null, 2));
  } catch (error) {
    console.error("Failed to save game data:", error);
  }
}

const errorHandler = (error, req, res, next) => {
  console.error("Server error:", error);
  res.status(500).json({ error: "Internal server error" });
};

const router = express.Router();

router.get("/:roomname", async (req, res) => {
  const { roomname } = req.params;
  const gamedata = await loadGameData();
  const gameRoom = gamedata.find((room) => room.roomname === roomname);

  if (gameRoom) {
    res.json(gameRoom);
  } else {
    res.status(404).json({ error: "Game room not found" });
  }
});

router.post("/", async (req, res) => {
  const { roomname } = req.body;

  if (!roomname) {
    res.status(400).json({ error: "Room name is required" });
    return;
  }

  const gamedata = await loadGameData();
  const existingRoom = gamedata.find((room) => room.roomname === roomname);

  if (existingRoom) {
    res.status(400).json({ error: "Room name already exists" });
    return;
  }

  const newGameRoom = {
    roomname,
    round: 12,
    players: [],
  };

  gamedata.push(newGameRoom);
  await saveGameData(gamedata);
  res.status(201).json(newGameRoom);
});

router.put("/:roomname", async (req, res) => {
  const { roomname } = req.params;
  const { round } = req.body;

  const gamedata = await loadGameData();
  const gameRoom = gamedata.find((room) => room.roomname === roomname);

  if (!gameRoom) {
    res.status(404).json({ error: "Game room not found" });
    return;
  }

  gameRoom.round = round;
  await saveGameData(gamedata);
  res.json(gameRoom);
});

router.put("/:roomname/players/:playerName", async (req, res) => {
  const { roomname, playerName } = req.params;
  const { scores } = req.body;

  const gamedata = await loadGameData();
  const gameRoom = gamedata.find((room) => room.roomname === roomname);

  if (!gameRoom) {
    res.status(404).json({ error: "Game room not found" });
    return;
  }

  const player = gameRoom.players.find((p) => p.name === playerName);

  if (!player) {
    res.status(404).json({ error: "Player not found" });
    return;
  }

  player.scores = scores;
  await saveGameData(gamedata);
  res.json(gameRoom);
});

router.delete("/:roomname", async (req, res) => {
  const { roomname } = req.params;

  const gamedata = await loadGameData();
  const index = gamedata.findIndex((room) => room.roomname === roomname);

  if (index === -1) {
    res.status(404).json({ error: "Game room not found" });
    return;
  }

  gamedata.splice(index, 1);
  await saveGameData(gamedata);
  res.json({ success: true });
});

app.use("/api/gameroom", router);
app.use(errorHandler);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
