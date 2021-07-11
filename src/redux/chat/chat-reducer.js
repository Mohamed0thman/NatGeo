import ChatActionTypes from "./chat.type";

const INITIAL_STATE = {
  chatHistory: [],
};

const chatReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ChatActionTypes.LOAD_CHAT:
      return {
        ...state,
        chatHistory: action.payload,
      };
    case ChatActionTypes.ADD_MESSAGE:
      return {
        ...state,
        chatHistory: [...state.chatHistory, action.payload],
      };
    default:
      return state;
  }
};

export default chatReducer;
