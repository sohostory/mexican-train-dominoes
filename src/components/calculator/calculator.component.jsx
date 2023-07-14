import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import Button from "../../components/button/button.component";

const DominoCalculator = ({ calculatorVisible }) => {
  const [score, setScore] = useState(0);
  // const [calculatorVisible, setCalculatorVisible] = useState(false);

  const handleButtonClick = (value) => {
    setScore(score + value);
  };

  const handleClear = () => {
    // Perform any necessary actions with the calculated score
    // For example, you can store it, display it, or perform further calculations
    console.log("Calculated Score:", score);

    // Reset the score
    setScore(0);
  };

  return (
    <Row className="mt-5">
      {calculatorVisible && (
        <Row>
          <h3>Domino Calculator</h3>
          <Row>
            {[...Array(12)].map((_, index) => (
              <Col lg={3}>
                <Button
                  key={index}
                  onClick={() => handleButtonClick(index + 1)}
                >
                  {index + 1}
                </Button>
              </Col>
            ))}
          </Row>
          <Row className="justify-content-md-end align-items-center">
            <Col className="fs-2 border bg-white" lg={4}>
              {score}
            </Col>
            <Col className="ms-4" lg={3}>
              <Button onClick={handleClear}>Clear</Button>
            </Col>
          </Row>
        </Row>
      )}
      <Row lg={3}>
        {/*<Button*/}
        {/*  style={{*/}
        {/*    position: "fixed",*/}
        {/*    bottom: "20px",*/}
        {/*    right: "20px",*/}
        {/*  }}*/}
        {/*  onClick={() => setCalculatorVisible(!calculatorVisible)}*/}
        {/*>*/}
        {/*  {calculatorVisible ? "Hide Calculator" : "Show Calculator"}*/}
        {/*</Button>*/}
      </Row>
    </Row>
  );
};

export default DominoCalculator;
