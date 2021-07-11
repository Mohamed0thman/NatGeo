import React, { useState, useEffect } from "react";

import FilmLivePage from "../../components/live-film-page/live-film-page.component";
import Enhance from "../../components/enhance/enhance.component";

import "./film-page.styles.scss";

interface filmProps {
  handleOnMouseEnter: () => void;
  handleOnMouseOut: () => void;
}

const FilmPage: React.FC<filmProps> = (props: filmProps) => {
  const { handleOnMouseEnter, handleOnMouseOut } = props;
  const [fade, setFade] = useState("");

  const handleFullScreen = () => {
    document.documentElement.requestFullscreen().catch(console.log);
  };

  const handleFade = () => {
    setFade("enhance-fade");
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      handleFullScreen();
      setFade("enhance-fade");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="film-page">
      {
        <Enhance
          fade={fade}
          handleFade={handleFade}
          handleFullScreen={handleFullScreen}
        />
      }
      <FilmLivePage
        handleOnMouseEnter={handleOnMouseEnter}
        handleOnMouseOut={handleOnMouseOut}
      />
    </div>
  );
};

export default FilmPage;
