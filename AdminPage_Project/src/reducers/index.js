import { combineReducers } from "redux";
import userReducers from "./usersReducers";
import tourReducers from "./toursReducers";

export default combineReducers({
  usersList: userReducers,
  toursList: tourReducers
})