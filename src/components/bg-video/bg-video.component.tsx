import React from "react";

import "./bg-video.styles.scss";

const BgVideo: React.FC = () => {
  return (
    <div className="bg-video">
      <video className="bg-video__content" autoPlay muted loop>
        <source src="/images/TITLE SEQUENCE FIXED.mp4" type="video/mp4" />
        Your browser is not supported!
      </video>
    </div>
  );
};
export default BgVideo;
