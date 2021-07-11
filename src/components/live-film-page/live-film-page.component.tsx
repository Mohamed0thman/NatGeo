import React, { useState } from "react";

import { ReactComponent as Sound } from "../../assets/sound.svg";

import "./live-film-page.styles.scss";
interface filmLiveProps {
  handleOnMouseOut: () => void;
  handleOnMouseEnter: () => void;
}

const FilmLivePage: React.FC<filmLiveProps> = (props: filmLiveProps) => {
  const { handleOnMouseOut, handleOnMouseEnter } = props;
  const [shouldMute, setShouldMute] = useState<boolean>(false);
  const handleOnEnded = () => {
    //  alert("live video end ");
  };
  const handleChangeMute = () => {
    setShouldMute(true);
  };
  return (
    <div className="film-live-page">
      <div className="film-live-page__content">
        <video
          className="film-live-page__video"
          style={{ cursor: "url(/images/mouse-cursor.png),auto" }}
          onMouseEnter={handleOnMouseEnter}
          onMouseOut={handleOnMouseOut}
          autoPlay
          
          loop
          muted={shouldMute}
          onEnded={handleOnEnded}
        >
          <source src="/images/TITLE SEQUENCE FIXED.mp4" type="video/mp4" />
          Your browser is not supported!
        </video>
      </div>
      <div className="film-live-page__sound">
        <Sound
          onClick={handleChangeMute}
          className="film-live-page__sound--icon"
        />
      </div>
    </div>
  );
};
export default FilmLivePage;
