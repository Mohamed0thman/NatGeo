import React, { useState } from "react";

import "./slide-show-loop.styles.scss";

const SlideShowLoop: React.FC = () => {
  return (
    <div className="Slide-show-loop">
      <div className="Slide-show-loop__image">
        <img src="/images/BloodOnTheWall_05.png" alt="" />
      </div>
      {/* <div className="Slide-show-loop__video">
        <video className="Slide-show-loop__video--content" autoPlay muted loop>
          <source src="/images/A Case of mistaken.mp4" type="video/mp4" />
          Your browser is not supported!
        </video>
      </div> */}
    </div>
  );
};

export default SlideShowLoop;
