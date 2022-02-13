import React from "react";
import { Link } from "react-router-dom";
import question from "./question";
const Result = ({ answer }) => {
  function giveResult() {
    let cnt = 0;
    for (let i = 0; i < 5; i++) {
      if (answer[i] === question[i].ans) cnt++;
    }
    return cnt;
  }

  return (
    <section className="welcome_box">
      <div className="box">
        <h2>Congratulations </h2>
        <p>you Scored {giveResult()} / 5</p>
        <Link style={{ all: "unset" }} to="/">
          <button>HOME</button>
        </Link>
      </div>
    </section>
  );
};

export default Result;
