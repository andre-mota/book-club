import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import search from "./search/reducer";
import clubs from "./clubs/reducer";

export default combineReducers({
  appState,
  user,
  search,
  clubs,
});
