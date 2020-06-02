import React from "react";
import { Link } from "react-router-dom";
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
      <h1 className="name">Dan Hauer</h1>
      <h2>software developer</h2>
    </div>
    <div className="links">
      <a href="#" className="projects">
        PROJECTS
      </a>
      <a href="https://github.com/dlhauer/" target="_blank" className="gh">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a
        href="https://www.linkedin.com/in/dlhauer/"
        target="_blank"
        className="li"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href="https://www.youtube.com/danhauer" target="_blank" className="yt">
        <FontAwesomeIcon icon={faYoutube} />
      </a>
    </div>
  </nav>
);

export default Nav;
