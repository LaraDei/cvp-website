import React from "react";
import Button from "../Components/Button";
import { useParams } from "react-router-dom";

// data import
import Questions from "../data/calcuatorQuestions.json";

/** A page to display an individual question from the question list */
const CalculatorQuestion = () => {
  /** Grab the number that comes after /calculator in the url */
  const { number } = useParams();

  /**
   * Filter through Questions file to find question to display
   * useParams returns a string, so we have to parseInt the `number` value
   * Filter returns an array so we grab the first element
   * and destructure the question properties: question, tooltip, and answers
   */
  const { question, tooltip, answers } = Questions.filter(
    (q) => q.id === parseInt(number)
  )[0];

  return (
    <div>
      <h1>{question}</h1>
      {tooltip}
      <ul>
        {answers.map((a) => (
          <Button text={a} onClick={() => console.log(a)} />
        ))}
      </ul>
    </div>
  );
};

export default CalculatorQuestion;
