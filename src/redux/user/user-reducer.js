import UserActionTypes from "./user.type";

const INITIAL_STATE = {
  currentUser: null,
  userName: null,
  error: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload.token,
        userName: action.payload.userName,
      };
    default:
      return state;
  }
};

export default userReducer;
