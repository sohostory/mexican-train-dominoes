const StandingList = ({ currentStanding }) => {
  return (
    <div className="standing-list">
      <h2>Standings</h2>
      {currentStanding.map(function Component(props, context) {
        return (
          <li key={context}>
            {context + 1}: {props.name} {props.totalScore}
          </li>
        );
      })}
    </div>
  );
};

export default StandingList;
