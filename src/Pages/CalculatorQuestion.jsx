import React from "react";
import Button from "../Components/Button";
import { useParams, useHistory } from "react-router-dom";

// data import
import Questions from "../data/calcuatorQuestions.json";

/** A page to display an individual question from the question list */
const CalculatorQuestion = () => {
  /** Grab the number that comes after /calculator in the url */
  const { number } = useParams();
  const history = useHistory();
  /**
   * Filter through Questions file to find question to display
   * useParams returns a string, so we have to parseInt the `number` value
   * Filter returns an array so we grab the first element
   * and destructure the question properties: question, tooltip, and answers
   */
  const { question, tooltip, answers, next_question } = Questions.filter(
    (q) => q.id === parseInt(number)
  )[0];

  const handleClick = (i) => {
    // if yes --> extract next_question[0] if no--> extract next_question[1]
    // once we have the index --> push it to the url
    history.push(`/calculator/${next_question[i]}`);
  };

  return (
    <div>
      <h1>{question}</h1>
      {tooltip}
      <ul>
        {answers.map((a, i) => (
          // id the yes vs no button
          <Button text={a} onClick={() => handleClick(i)} />
        ))}
      </ul>
    </div>
  );
};

export default CalculatorQuestion;
