import React from "react";

const Options = ({ question, dispatch, answer }) => {
  const hasAnswerd = answer !== null;
  return (
    <div className={"options"}>
      {question.options.map((option, index) => (
        <button
          key={option}
          disabled={answer !== null}
          className={`btn btn-option ${index === answer ? "answer" : ""}
          ${
            hasAnswerd
              ? index === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }
          `}
          key={option}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default Options;
