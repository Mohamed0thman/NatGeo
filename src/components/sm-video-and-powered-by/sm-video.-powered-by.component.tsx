import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Sound } from "../../assets/sound-2.svg";
import { ReactComponent as Expand } from "../../assets/expand.svg";

import "./sm-video.-powered-by.styles.scss";
const SmVideoAndPoweredBy: React.FC = () => {
  return (
    <div className="video-and-powered">
      <div className="sm-video">
        <div className="sm-video__live-content">
          <span className="sm-video__live-content--dote">&nbsp;</span>
          <span className="sm-video__live-content--live">Live</span>
        </div>
        <video className="sm-video__content" autoPlay muted loop>
          <source src="/images/TITLE SEQUENCE FIXED.mp4" type="video/mp4" />
          Your browser is not supported!
        </video>
        <div className="sm-video__icon">
          <Sound className="icon" />
        </div>
        <Link to="/film">
          <Expand className="sm-video__expand-icon" />
        </Link>
      </div>
      
    </div>
  );
};
export default SmVideoAndPoweredBy;
