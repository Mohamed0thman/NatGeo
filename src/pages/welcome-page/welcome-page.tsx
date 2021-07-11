import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";

import Welcome from "../../components/welcome/welcome.component";
import SlideShowLoop from "../../components/slide-show-loop/slide-show-loop.component";
import ChatApp from "../../components/chat/chat.component";

import "./welcome-page.styles.scss";

interface welcomePageProps {
  shouldRedirect: boolean;
  directedTo: string;
}

const WelcomePage: React.FC<welcomePageProps> = (props: welcomePageProps) => {
  const { shouldRedirect, directedTo } = props;
  const [welcomeMessage, setwelcomeMessage] = useState<string>(() => {
    const getValue = window.localStorage.getItem("welcomeMessage");
    return getValue !== null ? JSON.parse(getValue) : "true";
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      return setwelcomeMessage("false");
    }, 5000);
    window.localStorage.setItem("welcomeMessage", "false");
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="welcome-page">
      {welcomeMessage === "true" ? <Welcome /> : ""}
      <SlideShowLoop />
      <ChatApp />
      {shouldRedirect ? <Redirect to={directedTo} /> : null}
    </div>
  );
};

export default WelcomePage;
