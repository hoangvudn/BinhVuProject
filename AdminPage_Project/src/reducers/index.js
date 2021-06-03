import { combineReducers } from "redux";
import userReducers from "./usersReducers";
import tourReducers from "./toursReducers";
import historyReducers from "./historyReducers";

export default combineReducers({
  usersList: userReducers,
  toursList: tourReducers,
  historyToursList: historyReducers
})