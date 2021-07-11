import React, { useState } from "react";

import Title from "../../components/title/title.component";
import SignIn from "../../components/sign-in/sign-in.component";

import "./gatePage.styles.scss";

interface gatePage {
  directedTo: string;
}

const GatePage: React.FC<gatePage> = (props: gatePage) => {
  const { directedTo } = props;

  return (
    <div className="gate-page">
      <Title />
      <SignIn directedTo={directedTo} />
      
    </div>
  );
};

export default GatePage;
