import React from "react";
import { Redirect } from "react-router-dom";

import CountDowm from "../../components/count-down/count-down.component";
import ChatApp from "../../components/chat/chat.component";

import "./waiting-page.stylrs.scss";

interface waitingPageProps {
  timerHours: String | Number;
  timerMinutes: String | Number;
  timerSeconds: String | Number;
  directedTo: string;
  shouldRedirect: boolean;
}

const WaitingPage: React.FC<waitingPageProps> = (props: waitingPageProps) => {
  const {
    timerHours,
    timerMinutes,
    timerSeconds,
    directedTo,
    shouldRedirect,
  } = props;
  return (
    <div className="waiting-page">
      <div className="waiting-page">
        <p className="waiting-page--text">Blood on the Wall begins in</p>
        <CountDowm
          timerHours={timerHours}
          timerMinutes={timerMinutes}
          timerSeconds={timerSeconds}
          size="big"
        />
      </div>
      <ChatApp />
      {shouldRedirect ? <Redirect to={directedTo} /> : null}
    </div>
  );
};
export default WaitingPage;
