import React from "react";

import "./custom-button.styles.scss";
interface customButton {
  children: string;
  addclass: string;
  onClick: () => void;
}

const CustomButton: React.FC<customButton> = (props: customButton) => {
  return (
    <button className={`custom-button ${props.addclass}`} {...props}>
      {props.children}
    </button>
  );
};

export default CustomButton;
