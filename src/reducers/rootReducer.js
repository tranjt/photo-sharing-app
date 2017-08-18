import { combineReducers } from "redux";
import users from "./users";
import photos from "./photos";
import { reducer as form } from "redux-form";
export default combineReducers({
  users,
  photos,
  form
});