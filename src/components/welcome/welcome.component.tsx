import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./welcome.styles.scss";

const Welcome: React.FC = () => {
  const [userName, setUserName] = useState(() => {
    const GetUser = window.localStorage.getItem("user");
    return GetUser !== null ? JSON.parse(GetUser) : "";
  });

  return (
    <div className="welcome">
      <div className="welcome__content">
        <p className="welcome__content--username">
          Welcome, {userName.firstName}
        </p>
        <div className="welcome__content--title">
          <img src="/images/Big-Logo- Title.png" alt="" />
        </div>
        <h3 className="welcome__content--heading">
          The documentary film will begin shortly.
        </h3>
        <p className="welcome__content--text">
          While you wait, enjoy the exclusive National Geographic content, learn
          more <Link to="about-the-film">About the Film</Link>, take a look at
          the <Link to="gallery">Gallery</Link>
        </p>
      </div>

      <div className="welcome__background"></div>
    </div>
  );
};

export default Welcome;
