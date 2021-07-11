import ChatActionTypes from "./chat.type";
import axios from "axios";

export const action_get_chat = () => (dispatch, getState) => {
  const { user } = getState();
  axios
    .get(
      `https://lf4ougqar4.execute-api.us-east-2.amazonaws.com/transcript?token=${user.currentUser}`
    )
    .then((result) => {
      let data = result.data ? result.data : [];
      dispatch({
        type: ChatActionTypes.LOAD_CHAT,
        payload: data,
      });
    })
    .catch((e) => {});
};

export const action_add_chat = (message) => (dispatch, getState) => {
  dispatch({
    type: ChatActionTypes.ADD_MESSAGE,
    payload: message,
  });
};
