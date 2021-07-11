import React from "react";

import "./count-down.styles.scss";

interface timerProps {
  timerHours: String | Number;
  timerMinutes: String | Number;
  timerSeconds: String | Number;
  size: string;
}
const CountDowm: React.FC<timerProps> = (props: timerProps) => {
  const { timerHours, timerMinutes, timerSeconds, size } = props;

  return (
    <div className={`count-down  ${size}`}>
      <div className="count-down__hours  count-down__time">
        <span>
          {timerHours.toString().length === 1 ? "0" + timerHours : timerHours}
        </span>
      </div>
      <span> : </span>
      <div className="count-down__minutes count-down__time">
        <span>
          {timerMinutes.toString().length === 1
            ? "0" + timerMinutes
            : timerMinutes}
        </span>
      </div>
      <span> : </span>
      <div className="count-down__seconds count-down__time">
        <span>
          {timerSeconds.toString().length === 1
            ? "0" + timerSeconds
            : timerSeconds}
        </span>
      </div>
    </div>
  );
};

export default CountDowm;
