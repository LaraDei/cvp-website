import React from "react";
import { useHistory } from "react-router-dom";
import Button from "../Components/Button";
//! Import css

/** The page that gets displayed when a user clicks the Calculator link in the Nav Bar
 * Will always show welcome message, description and a start button
 */
const CalculatorLanding = () => {
  /** Use history hook to start the questionaire  */
  const history = useHistory();

  /** Callback for Start button to begin the questionaire */
  const onStartClick = () => {
    /** User clicks start */
    /** User is sent to first question */
    history.push("/calculator/0");
  };

  return (
    <div>
      <h1>Welcome to Conviction Vacation Project!</h1>
      {/* // TODO Import the figma text */}
      <p>Grab the text from Figma.</p>

      {/* When a user clicks this they will begin the questionaire */}
      <Button text="Start" onClick={onStartClick} />
    </div>
  );
};

export default CalculatorLanding;
