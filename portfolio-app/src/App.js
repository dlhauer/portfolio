import React from "react";
import Nav from "./Nav";
import HomePage from "./HomePage";
import Projects from "./Projects";
import { Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="home-container">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/projects" component={Projects} />
          <Route component={HomePage} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
