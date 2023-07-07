const ScoreTracker = ({ players, roundScores }) => {
  return (
    <div>
      <h2>Score Tracker</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>
            {player.name}:
            {player.scores.length > 0 ? (
              <ul>
                {player.scores.map((score, roundIndex) => (
                  <li key={roundIndex}>
                    Round {roundIndex + 1}: {score}
                  </li>
                ))}
              </ul>
            ) : (
              ' No scores yet'
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ScoreTracker;