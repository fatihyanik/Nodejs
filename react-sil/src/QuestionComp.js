import React from "react";

const QuestionComp = ({ question, handleAnswer }) => {
  const { title, options, id, background, color } = question;
  return (
    <div className="question">
      <p className="question_number">Question No - {id + 1} / 5</p>
      <div className="question_title">
        <p>{title}</p>
      </div>
      <div className="question_options">
        <div
          onClick={() => handleAnswer(id, 0)}
          style={{ backgroundColor: background[0], color: color[0] }}
        >
          {options[0]}
        </div>
        <div
          onClick={() => handleAnswer(id, 1)}
          style={{ backgroundColor: background[1], color: color[1] }}
        >
          {options[1]}
        </div>
        <div
          onClick={() => handleAnswer(id, 2)}
          style={{ backgroundColor: background[2], color: color[2] }}
        >
          {options[2]}
        </div>
        <div
          onClick={() => handleAnswer(id, 3)}
          style={{ backgroundColor: background[3], color: color[3] }}
        >
          {options[3]}
        </div>
      </div>
    </div>
  );
};

export default QuestionComp;
