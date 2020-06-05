import React from "react";
import Nav from "./Nav";
import HomePage from "./HomePage";
import Projects from "./Projects";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Route, Switch, withRouter } from "react-router-dom";
import "./App.css";

function App({ location }) {
  return (
    <div className="App">
      <Nav />
      <div className="home-container">
        <TransitionGroup>
          <CSSTransition
            key={location.key}
            timeout={{ enter: 300, exit: 300 }}
            classNames="fade"
          >
            <Switch location={location}>
              <Route exact path="/" component={HomePage} />
              <Route path="/projects" component={Projects} />
              <Route component={HomePage} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </div>
  );
}

export default withRouter(App);
