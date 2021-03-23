import { combineReducers } from "redux";
import userReducers from "./usersReducers";


export default combineReducers({
  usersList: userReducers
})