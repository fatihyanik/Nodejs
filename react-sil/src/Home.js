import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="welcome_box">
      <div className="box">
        <p>Welcome to Quiz</p>
        <Link to="questions" style={{ all: "unset" }}>
          <button>Let's Start</button>
        </Link>
      </div>
    </section>
  );
};

export default Home;
