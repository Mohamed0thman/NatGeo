import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { ReactComponent as Help } from "../../assets/help-circle.svg";
import { ReactComponent as Close } from "../../assets/Icon- X.svg";
import { ReactComponent as Privace } from "../../assets/squire.svg";
import { ReactComponent as LogoTitle } from "../../assets/Logo- Title.svg";
import { ReactComponent as LogoLockuo } from "../../assets/Logo- lockup.svg";

import "./header.styles.scss";

interface headerProps {
  timerMinutes: String | Number;
  timerSeconds: String | Number;
  directedTo: string;
  showOnHover: boolean | null;
  halfHour: boolean;
}

const Header: React.FC<headerProps> = (props: headerProps) => {
  const { timerMinutes, timerSeconds, directedTo, halfHour } = props;
  const location = useLocation();
  const [openpriv, setOpenPriv] = useState<string>("");
  const [showNav, SetShowNav] = useState<string>("");

  const handelOpenPrivace = () => {
    setOpenPriv(openpriv === "" ? "open" : "");
  };
  const handleShowNav = () => {
    SetShowNav(showNav === "" ? "show-nav" : "");
  };

  return (
    <div
      className={`header  ${
        location.pathname === "/film"
          ? props.showOnHover === true
            ? "show-on-hover"
            : props.showOnHover === false
            ? "no-hover"
            : null
          : null
      }`}
    >
      <div className="header__left">
        {location.pathname === "/" || location.pathname === "/gate" ? (
          ""
        ) : (
          <div>
            <LogoLockuo
              className={`header__left--logo ${
                location.pathname === "/meet-the-panel" ||
                location.pathname === "/photo-gallery"
                  ? "header__left--no-logo"
                  : ""
              }`}
            />
          </div>
        )}
      </div>

      <div className="header__center">
        {location.pathname === "/waiting" || location.pathname === "/film" ? (
          <div>
            <LogoTitle className="header__center--title" />{" "}
          </div>
        ) : (halfHour && location.pathname === "/") ||
          location.pathname === "/welcome" ? (
          <div
            className={`header__center--timer ${
              location.pathname === "/" ? "" : "header__center--timer-hide"
            }`}
          >
            <p className="header__center--timer--text">Premiere begins in </p>
            <div>
              {timerMinutes.toString().length === 1
                ? "0" + timerMinutes
                : timerMinutes}{" "}
              :{" "}
              {timerSeconds.toString().length === 1
                ? "0" + timerSeconds
                : timerSeconds}
            </div>
          </div>
        ) : (
          ""
        )}
      </div>

      <div className="header__right">
        {location.pathname === "/welcome" ||
        location.pathname === "/waiting" ||
        location.pathname === "/film" ||
        location.pathname === "/meet-the-panel" ||
        location.pathname === "/photo-gallery" ? (
          <div
            className={`header__right--nav  ${
              location.pathname === "/meet-the-panel" ||
              location.pathname === "/photo-gallery"
                ? "hide"
                : ""
            }  ${showNav}`}
          >
            <ul className={`header__right--list ${showNav}`}>
              <li className={`header__right--item ${showNav}`}>
                <Link to="/meet-the-panel">Meet the Panel</Link>
              </li>
              <li className={`header__right--item ${showNav}`}>
                <Link to="/photo-gallery">Photo Gallery</Link>
              </li>
            </ul>
          </div>
        ) : (
          ""
        )}
        {location.pathname === "/meet-the-panel" ||
        location.pathname === "/photo-gallery" ? (
          <Link to={directedTo}>
            <Close className="header__right--close-icon" />
          </Link>
        ) : (
          <div>
            <Help
              className={`header__right--help-icon ${
                location.pathname === "/" ? "" : "hide"
              }`}
              onClick={handelOpenPrivace}
            />
          </div>
        )}
        <div
          className={`header__right--dots-group ${
            location.pathname === "/" ? "hide" : ""
          }`}
          onClick={handleShowNav}
        >
          <span className="header__right--dots-group--dot"></span>
        </div>
      </div>
      <div className={`header__privace ${openpriv}`}>
        <a
          href="https://www.nationalgeographic.com/legal/privacy.html"
          rel="noopener noreferrer"
          target="_blank"
          className="header__privace--link"
        >
          <Privace className="header__privace--icon " />
          <span> Privacy Policy</span>
        </a>
      </div>
    </div>
  );
};
export default Header;