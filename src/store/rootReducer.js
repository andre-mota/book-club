import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import search from "./search/reducer";
import discussions from "./discussions/reducer";

export default combineReducers({
  appState,
  user,
  search,
  discussions,
});
