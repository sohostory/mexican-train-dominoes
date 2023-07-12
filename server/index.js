require("dotenv").config();
const fs = require("fs");

const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

fs.readFile("gamedata.json", function (err, data) {
  if (err) throw err;

  const gamedata = JSON.parse(data);
  console.log(gamedata);
});
