import React, { useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { Redirect } from "react-router-dom";

import FormInput from "../form-input/form-input.component";
import Digit from "../digit/digit.component";
import CustomButton from "../custom-button/custom-button.component";

import { log_in } from "../../redux/user/user-action";
import { selectCurrentUser } from "../../redux/user/user-selector";

import "./sign-in.styles.scss";

interface sighInProps {
  directedTo: string;
  currentUser: any;
  log_in: any;
}

interface user {
  firstName: string;
  lastName: string;
  code: string;
}

const SignIn: React.FC<sighInProps> = (props: sighInProps) => {
  const { directedTo, log_in, currentUser } = props;
  const [userCredentials, setCredentials] = useState<user>({
    firstName: "",
    lastName: "",
    code: "",
  });
  const { firstName, lastName, code } = userCredentials;

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    window.localStorage.setItem(
      "user",
      JSON.stringify({ firstName, lastName })
    );

    log_in(code);
  };
  //  console.log(firstName);

  const handleChange = (e: any): void => {
    const { value, name } = e.target;
    setCredentials({ ...userCredentials, [name]: value });
  };

  const getDigits = (): JSX.Element[] => {
    let digits: JSX.Element[] = [];

    for (let i = 0; i < 6; i++) {
      digits.push(
        <Digit
          key={i}
          index={i}
          handleChange={handleChange}
          name="code"
          type="text"
          required
          value={code}
        />
      );
    }

    return digits;
  };
  return (
    <div className="sign-in" id="signIn">
      <form className="sign-in__form" action="" onSubmit={handleSubmit}>
        <div className="sign-in__name">
          <FormInput
            name="firstName"
            type="text"
            handleChange={handleChange}
            value={firstName}
            required
            id="first-name-input"
            handleOnKeyDown={() => {}}
            placeholder="First name"
            isCodeInput=""
          />
          <FormInput
            name="lastName"
            type="text"
            handleChange={handleChange}
            value={lastName}
            required
            id="last-name-input"
            handleOnKeyDown={() => {}}
            placeholder="Last name"
            isCodeInput=""
          />
        </div>
        <div className="sign-in__code">
          {console.log(code.length)}
          {code.length === 0 ? (
            <span className="sign-in__code--label">Your code</span>
          ) : (
            ""
          )}

          {getDigits()}
        </div>
        <div className="sign-in__terms">
          <input
            className="sign-in__terms--checkbox"
            id="checkbox"
            type="checkbox"
            required
          />
          <label className="sign-in__terms--label" htmlFor="checkbox"></label>
          <p className="sign-in__terms--text">
            I agree to the{" "}
            <a className="sign-in__terms--link" href="#terms-popup">
              Terms and Conditions.
            </a>
          </p>
        </div>
        <CustomButton addclass="sign-in-button " onClick={() => {}}>
          ENTER
        </CustomButton>
        <p className="sign-in__cant-find">
          <a href="#!">Can’t find your code?</a>
        </p>
      </form>
      {currentUser ? <Redirect to={directedTo} /> : null}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
const mapDispatchToProps = (dispatch: any) => ({
  log_in: (code: any) => dispatch(log_in({ code })),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
