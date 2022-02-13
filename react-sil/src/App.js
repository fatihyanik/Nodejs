import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Questions from "./Questions";
import "./index.css";
import Result from "./Result";
const App = () => {
  const [answer, setAnswer] = useState([]);
  return (
    <>
      <Switch>
        <Route
          path="/questions"
          render={() => <Questions answer={answer} setAnswer={setAnswer} />}
        />
        <Route path="/solution" render={() => <Result answer={answer} />} />
        <Route path="/" exact component={Home} />
      </Switch>
    </>
  );
};

export default App;