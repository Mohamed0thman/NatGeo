import React from "react";

import { ReactComponent as Rectangle } from "../../assets/Rectangle.svg";

import "./about-the-film-item.styles.scss";
interface aboutProps {
  item: {
    image: string;
    textOne: string;
    textOneMr: string;
    litter: string;
    name: string;
    description: string;
    textTwo: string;
    textThree: string;
    textThreeMr: string;
    id: string;
  };
}

const AboutTheFilmItem: React.FC<aboutProps> = (props: aboutProps) => {
  const {
    image,
    textOne,
    textOneMr,
    litter,
    name,
    description,
    textTwo,
    textThree,
    textThreeMr,
    id,
  } = props.item;
  return (
    <div className="about-the-film-item">
      <div className="about-the-film-item__text-content"  id={id}>
        <h2 className="about-the-film-item__heading">{name}</h2>
        <p className="about-the-film-item__text">{description}</p>
      </div>
      <div className="about-the-film-item__image">
        <img src={image} alt="" />
      </div>

      <div className="about-the-film-item__resume">
        <div className="about-the-film-item__resume--text-box-1">
          <span>{litter}</span>
          <p className="about-the-film-item__resume--1">
            {textOne}
            <span className="about-the-film-item__resume--m-t">
              {textOneMr}
            </span>
          </p>{" "}
          <p className="about-the-film-item__resume--2">{textTwo}</p>
        </div>
        <div className="about-the-film-item__resume--text-box-2">
          <p className="about-the-film-item__resume--3">
            {textThree}
            <span className="about-the-film-item__resume--m-t">
              {textThreeMr}
              {/* <Rectangle className="about-the-film-item__resume--icon" /> */}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutTheFilmItem;
