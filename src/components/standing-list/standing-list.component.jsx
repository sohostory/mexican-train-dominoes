import { Container, Row, Col } from "react-bootstrap";

const StandingList = ({ currentStanding }) => {
  return (
    <>
      <Row className="mb-5">
        <h3 className="text-center fs-4">Standings</h3>
      </Row>
      {currentStanding.map(function Component(props, context) {
        return (
          <Row className=" justify-content-md-center">
            <Col lg={1}>{context + 1}: </Col>
            <Col lg={4} className="text-start">
              {props.name}
            </Col>
            <Col lg={1} className="text-start">
              {props.totalScore}
            </Col>
          </Row>
        );
      })}
    </>
  );
};

export default StandingList;
