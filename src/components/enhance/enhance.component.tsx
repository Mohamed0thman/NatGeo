import React from "react";

import CustomButton from "../custom-button/custom-button.component";
import { ReactComponent as Light } from "../../assets/light.svg";
import { ReactComponent as Sound } from "../../assets/sound.svg";
import { ReactComponent as Like } from "../../assets/like.svg";

import "./enhance.styles.scss";
interface enhanceProps {
  handleFullScreen: () => void;
  handleFade: () => void;
  fade: string;
}

const Enhance: React.FC<enhanceProps> = (props: enhanceProps) => {
  const { handleFullScreen, handleFade, fade } = props;
  return (
    <div className={`enhance ${fade}`}>
      <div className="enhance__container">
        <div className="enhance__content">
          <h2 className="enhance__heading">Enhance your experience…</h2>

          <div className="enhance__icons">
            <Light className="enhance__icon" />
            <p className="enhance__name">Dim the lights</p>
          </div>
          <div className="enhance__icons">
            <Sound className="enhance__icon" />
            <p className="enhance__name">Use headphones</p>
          </div>
          <div className="enhance__icons">
            <Like className="enhance__icon" />
            <p className="enhance__name">Enjoy</p>
          </div>
        </div>
        <CustomButton
          addclass="enhance-button"
          onClick={() => {
            handleFade();
            handleFullScreen();
          }}
        >
          Enter Full Screen
        </CustomButton>
      </div>
    </div>
  );
};

export default Enhance;
