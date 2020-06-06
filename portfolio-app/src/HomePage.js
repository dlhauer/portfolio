import React from "react";
import { Link } from "react-router-dom";
import danImg from "./assets/dan_avatar_smaller.JPG";

const HomePage = (props) => (
  <div className="home-container">
    <div className="body-text">
      <p className="heading">Hi!</p>
      <p>
        I'm a full stack web developer proficient in{" "}
        <span className="code">JavaScript</span>,{" "}
        <span className="code">React</span>, <span className="code">Node</span>,
        and <span className="code">Python</span>.
      </p>
      <p>
        I'm a big fan of bone-DRY code that is as nice to look at as it is to
        run. I also like collaborating with teams of smart people who are
        dedicated to solving tough problems.
      </p>
      <p>
        To see projects I've done, click{" "}
        <Link className="link project-link inline-link" to="/projects">
          here.
        </Link>
      </p>
    </div>
    <div className="img-container">
      <div className="circle">
        <img
          className="avatar"
          alt="Portrait of Dan Hauer at Tieu Giao Temple, Hanoi, December 2019"
          title="Portrait of Dan Hauer at Tieu Giao Temple, Hanoi, December 2019"
          src={danImg}
        />
      </div>
    </div>
  </div>
);

export default HomePage;
