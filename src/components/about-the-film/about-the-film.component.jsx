import React, { useRef } from "react";

import AboutTheFilmItem from "../about-the-film-item/about-the-film-item.component";

import aboutData from "./data";

import "./about-the-film.styles.scss";

const AboutTheFilm = () => {
  const slide = useRef(null);

  const aboutItem = aboutData;

  let isDown = false;
  let startX;
  let scrollLeft;

  const handleMouseDown = (e) => {
    isDown = true;
    startX = e.pageX - slide.current.offsetLeft;
    scrollLeft = slide.current.scrollTop;
  };

  const handleMouseLeave = () => {
    isDown = false;
  };
  const handleMouseUp = () => {
    isDown = false;
  };
  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slide.current.offsetLeft;
    const walk = (x - startX) * 2;
    slide.current.scrollTop = scrollLeft - walk;
  };

  const handleTouchDown = (e) => {
    isDown = true;
    startX = Math.floor(e.touches[0].pageX - slide.current.offsetLeft);
    scrollLeft = slide.current.scrollTop;
    console.log(startX);
    console.log("down");
  };

  const handletouchUp = () => {
    isDown = false;
  };
  const handletouchMove = (e) => {
    if (!isDown) return;
    const x = Math.floor(e.touches[0].pageX - slide.current.offsetLeft);
    console.log({ x, startX });
    const walk = Math.floor((x - startX) * 2);
    console.log(walk);
    slide.current.scrollTop = scrollLeft - walk;
  };

  return (
    <div className="about-the-film">
      <div
        className="about-the-film__outer-wrapper"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchDown}
        onTouchEnd={handletouchUp}
        onTouchMove={handletouchMove}
        ref={slide}
      >
        <div className="about-the-film__wrapper">
          <div className="about-the-film__title">
            <div className="about-the-film__title--container">
              <div className="about-the-film__title--text-content">
                <h1 className="about-the-film__title--heading">
                  Meet the <br /> Panel
                </h1>
              </div>

              <ul className="about-the-film__title--list">
                <li className="about-the-film__title--item">
                  <a href="#Sebastian-Junger">Sebastian Junger</a>
                </li>
                <li className="about-the-film__title--item">
                  {" "}
                  <a href="#Nick-Quested">Nick Quested</a>{" "}
                </li>
                <li className="about-the-film__title--item">
                  <a href="#Sindy-M.-Benavides"> Sindy M. Benavides </a>
                </li>
                <li className="about-the-film__title--item">
                  {" "}
                  <a href="#Arturo-Sarukhan">Arturo Sarukhan</a>
                </li>
                <li className="about-the-film__title--item">
                  <a href="#Julia-Preston">Julia Preston </a>{" "}
                </li>
                <li className="about-the-film__title--item">
                  <a href="#Charles-Kamasaki"> Charles Kamasaki</a>
                </li>
              </ul>
            </div>
            <p className="about-the-film__title--scroll">Scroll to explore</p>
          </div>
          {aboutItem.map((item, i) => {
            return <AboutTheFilmItem key={i} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default AboutTheFilm;
