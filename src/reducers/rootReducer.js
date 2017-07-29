import { combineReducers } from "redux";
import users from "./users";
import photos from "./photos";

export default combineReducers({
  users,
  photos
});