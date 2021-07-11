import React from "react";

import { ReactComponent as Close } from "../../assets/Icon- X.svg";

import "./terms-and-condition.styles.scss";

const TermsAndCondition: React.FC = () => {
  return (
    <div className="terms-and-condition" id="terms-popup">
      <h2 className="terms-and-condition__heading">Terms and Conditions</h2>
      <div className="terms-and-condition__text-container">
        <div className="terms-and-condition__text">
          <p className="terms-and-condition__text--1">
            By signing up for email, you are agreeing to receive news, offers,
            and information from National Geographic Partners, LLC and our
            partners. Click here to visit our Privacy Policy. Easy unsubscribe
            links are provided in every email."
          </p>
         
        </div>
      </div>
      <a href="#!">
        <Close className="terms-and-condition__close"></Close>
      </a>
    </div>
  );
};

export default TermsAndCondition;
