import UserActionTypes from "./user.type";
import axios from "axios";
import AWS from "aws-sdk";
import { toast } from "react-toastify";

AWS.config.update({
  region: "us-east-2",
});
const cognitoidentityserviceprovider = new AWS.CognitoIdentityServiceProvider();

export const log_in = (code) => (dispatch, getState) => {
  cognitoidentityserviceprovider.initiateAuth(
    {
      AuthFlow: "USER_PASSWORD_AUTH",
      ClientId: "1lae4t4sqh3vcinj64ea7ilo2s",
      AuthParameters: {
        USERNAME: code.code,
        PASSWORD: "bloodonthewall",
      },
    },
    (err, data) => {
      if (err) {
        return toast.error("Error invalid login credentials");
      }
      const token = data.AuthenticationResult.AccessToken;
      cognitoidentityserviceprovider.getUser(
        {
          AccessToken: data.AuthenticationResult.AccessToken,
        },
        (err, data) => {
          if (err) return toast.error("Error invalid login credentials");
          localStorage.setItem("token", token);
          dispatch({
            type: UserActionTypes.SIGN_IN_SUCCESS,
            payload: { token, userName: data.UserAttributes[0].Name },
          });
        }
      );
      document.cookie = "token=" + token + "path=/";
    }
  );
};

export const get_token = () => (dispatch, getState) => {
  if (document.token) {
    const token = document.token;
    cognitoidentityserviceprovider.getUser(
      {
        AccessToken: token,
      },
      (err, data) => {
        if (err) return toast.error("Error during getting user details");
        dispatch({
          type: UserActionTypes.SIGN_IN_SUCCESS,
          payload: { token, userName: data.UserAttributes[0].Name },
        });
      }
    );
  }
};
