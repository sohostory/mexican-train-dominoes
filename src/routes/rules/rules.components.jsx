import Button from "../../components/button/button.component";
import { useNavigate } from "react-router-dom";

const Rules = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };
  return (
    <div className="rules-container">
      <h2>General Rules</h2>
      <p>
        Mexican Train Dominoes is a popular variation of the classic dominoes
        game. The game is typically played with a set of double-12 dominoes. The
        objective of the game is to be the first player to play all your
        dominoes or to have the lowest score at the end of the game.
      </p>
      <ol>
        <li>
          Setup: Each player starts with a hand of dominoes. The number of
          dominoes dealt to each player depends on the number of players. The
          remaining dominoes are placed facedown to form the "boneyard." One
          domino is placed face-up in the center to start the "Mexican Train."
          <ul>
            <li>For 2 to 4 players: Each player starts with 15 dominoes.</li>
            <li>For 5 to 6 players: Each player starts with 12 dominoes.</li>
            <li>For 7 to 8 players: Each player starts with 10 dominoes.</li>
          </ul>
        </li>
        <li>
          Starting Play: The player with the highest double domino (e.g.,
          double-12) starts the game by playing it in the center of the table.
          If no one has a double, the player with the highest-value domino
          starts. Play proceeds clockwise.
        </li>
        <li>
          Building Trains: On their turn, a player can play a domino that
          matches an open end of their own "train" (a line of dominoes played by
          that player) or the "Mexican Train." If they cannot play a matching
          domino, they must draw from the boneyard until they can play. If the
          boneyard is empty, they pass their turn.
        </li>
        <li>
          Mexican Train: The "Mexican Train" is a separate line of dominoes that
          any player can play on during their turn. If a player cannot play on
          their own train, they can play on the Mexican Train instead. Once a
          player plays on the Mexican Train, it becomes their personal train,
          and only they can play on it.
        </li>
        <li>
          Doubles: If a player plays a double, they must also play an additional
          domino on the same turn. If they cannot play the additional domino,
          they draw from the boneyard.
        </li>
        <li>
          End of Round: A round ends when a player plays all their dominoes or
          when no player can make a legal play. In both cases, the round ends,
          and the players calculate their scores.
        </li>
        <li>
          Scoring: At the end of each round, players sum up the pips (dots) on
          the dominoes remaining in their hand. The player with the lowest score
          after all rounds are completed is the winner.
        </li>
        <li>
          Subsequent Rounds: In subsequent rounds, the player who won the
          previous round starts by playing any domino of their choice.
        </li>
      </ol>
      <p>
        Remember, these are the basic rules of Mexican Train Dominoes, and there
        may be variations or house rules that players follow. It's always a good
        idea to clarify any specific rules or variations with the players before
        starting the game.
      </p>
      <Button type="button" onClick={handleBack}>
        GO BACK
      </Button>
    </div>
  );
};

export default Rules;
