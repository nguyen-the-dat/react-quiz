import React from "react";
import Options from "./Options";

const Question = ({ question, dispatch, answer }) => {
  return (
    <div>
      <h4>{question.question}</h4>
      <Options
        question={question}
        key={question.id}
        dispatch={dispatch}
        answer={answer}
      />
    </div>
  );
};

export default Question;
