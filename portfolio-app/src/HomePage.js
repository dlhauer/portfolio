import React from "react";
import danImg from "./assets/dan_avatar_smaller.JPG";

const HomePage = (props) => (
  <div className="home-container">
    <div className="body-text">
      <p className="greeting">Hi!</p>
      <p>
        I'm a full stack web developer proficient in JavaScript, React, Node,
        and Python.
      </p>
      <p>
        I'm a big fan of bone-DRY code that is as nice to look at as it is to
        run. I also like collaborating with teams of smart people who are
        dedicated to solving tough problems.
      </p>
      <p>To see projects I've done, click here.</p>
      <p>To learn more about me as a human bean, click here.</p>
    </div>
    <div className="img-container">
      <div className="circle">
        <img className="avatar" src={danImg} />
      </div>
    </div>
  </div>
);

export default HomePage;