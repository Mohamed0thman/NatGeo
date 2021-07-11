import React from "react";

import Title from "../../components/title/title.component";
import CountDowm from "../../components/count-down/count-down.component";

import "./entry.styles.scss";

interface entryPageProps {
  timerHours: String | Number;
  timerMinutes: String | Number;
  timerSeconds: String | Number;
}

const EntryPage: React.FC<entryPageProps> = (props: entryPageProps) => {
  const { timerHours, timerMinutes, timerSeconds } = props;

  return (
    <div className="entry-page">
      <Title />
      <p className="entry-page__text">
        join us on <span>9/20/20</span> at <span>6:30 PM EST </span> to inter
        the exclusuve site
      </p>
      <CountDowm
        timerHours={timerHours}
        timerMinutes={timerMinutes}
        timerSeconds={timerSeconds}
        size="medium"
      />{" "}
    </div>
  );
};

export default EntryPage;
