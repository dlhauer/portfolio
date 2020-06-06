import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import "./App.css";

const Nav = (props) => (
  <nav className="nav-container">
    <div className="title-container">
      <Link to="/" className="link">
        <h1 className="name">Dan Hauer</h1>
      </Link>
      <h2>software developer</h2>
    </div>
    <div className="links">
      <NavLink to="/projects" className="link">
        PROJECTS
      </NavLink>
      <a
        href="https://github.com/dlhauer/"
        target="_blank"
        rel="noopener noreferrer"
        className="link gh"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a
        href="https://www.linkedin.com/in/dlhauer/"
        target="_blank"
        rel="noopener noreferrer"
        className="link li"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a
        href="https://www.youtube.com/danhauer"
        target="_blank"
        rel="noopener noreferrer"
        className="link yt"
      >
        <FontAwesomeIcon icon={faYoutube} />
      </a>
    </div>
  </nav>
);

export default Nav;
