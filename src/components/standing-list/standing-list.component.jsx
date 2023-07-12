import { Container, Row } from "react-bootstrap";

const StandingList = ({ currentStanding }) => {
  return (
    <Container>
      <Row className="mb-5">
        <h3 className="text-center">Standings</h3>
      </Row>
      {currentStanding.map(function Component(props, context) {
        return (
          <Row className=" justify-content-md-center">
            {context + 1}: {props.name} {props.totalScore}
          </Row>
        );
      })}
    </Container>
  );
};

export default StandingList;
