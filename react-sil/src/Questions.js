import React, { useState } from "react";
import "./index.css";
import QuestionComp from "./QuestionComp";
import question from "./question";
import { Link } from "react-router-dom";

const Questions = ({ answer, setAnswer }) => {
  const [number, setNumber] = useState(0);

  const handleAnswer = (id, ans) => {
    let temp = [...answer];
    temp[id] = ans;
    setAnswer([...temp]);

    function Reset() {
      let arr1 = question[id].background;
      arr1 = ["white", "white", "white", "white"];
      let arr2 = question[id].color;
      arr2 = ["black", "black", "black", "black"];
      question[id].background = arr1;
      question[id].color = arr2;
    }
    Reset();

    question[id].background[ans] = "green";
    question[id].color[ans] = "white";
  };

  const handleIncrement = () => {
    if (number === 4) {
      return;
    }
    setNumber(number + 1);
  };
  const handleDecrement = () => {
    if (number === 0) return;
    setNumber(number - 1);
  };

  return (
    <section className="welcome_box">
      <Link to="/solution" style={{ all: "unset" }}>
        <button className="submit">Submit</button>
      </Link>
      <QuestionComp question={question[number]} handleAnswer={handleAnswer} />
      <div className="buttons">
        <button onClick={handleDecrement}>Prev</button>
        <button onClick={handleIncrement}>Next</button>
      </div>
    </section>
  );
};

export default Questions;
