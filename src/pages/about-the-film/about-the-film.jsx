import React from "react";

import ChatApp from "../../components/chat/chat.component";
import SmVideoAndPoweredBy from "../../components/sm-video-and-powered-by/sm-video.-powered-by.component";
import AboutTheFilm from "../../components/about-the-film/about-the-film.component";
import "./about-the-film.styles.scss";

const AboutTheFilmPage = () => {
  return (
    <div className="about-the-film-page">
      <AboutTheFilm />
      <ChatApp />
      <SmVideoAndPoweredBy />
    </div>
  );
};

export default AboutTheFilmPage;
