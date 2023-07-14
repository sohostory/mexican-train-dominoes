import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import Button from "../../components/button/button.component";

const DominoCalculator = () => {
  const [score, setScore] = useState(0);
  const [calculatorVisible, setCalculatorVisible] = useState(true);

  const handleButtonClick = (value) => {
    setScore(score + value);
  };

  const handleAddButtonClick = () => {
    // Perform any necessary actions with the calculated score
    // For example, you can store it, display it, or perform further calculations
    console.log("Calculated Score:", score);

    // Reset the score
    setScore(0);
  };

  return (
    <Row>
      {calculatorVisible && (
        <Row>
          <h3>Domino Calculator</h3>
          <Row>
            {[...Array(13)].map((_, index) => (
              <Col lg={3}>
                <Button key={index} onClick={() => handleButtonClick(index)}>
                  {index}
                </Button>
              </Col>
            ))}
            <Col lg={10}>
              <Button onClick={handleAddButtonClick}>Add</Button>
            </Col>
          </Row>
        </Row>
      )}
      <Row lg={3}>
        <Button
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
          }}
          onClick={() => setCalculatorVisible(!calculatorVisible)}
        >
          {calculatorVisible ? "Hide Calculator" : "Show Calculator"}
        </Button>
      </Row>
    </Row>
  );
};

export default DominoCalculator;
