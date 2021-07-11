import { createSelector } from "reselect";

const selectChat = (state) => state.chat;
export const selectCurrentUser = createSelector(
  [selectChat],
  (user) => user.chat
);
