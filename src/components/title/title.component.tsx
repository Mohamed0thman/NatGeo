import React from "react";

import { ReactComponent as LogoTitle } from "../../assets/Logo- Title.svg";
import { ReactComponent as LogoLockuo } from "../../assets/Logo- lockup.svg";

import "./title.styles.scss";

const Title: React.FC = () => {
  return (
    <div className="title">
      <LogoLockuo className="title__up" />
      <LogoTitle className="title__down" />
    </div>
  );
};

export default Title;
