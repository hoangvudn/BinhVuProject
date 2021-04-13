import {
   GET_USER_LOGIN,
   USER_LOGIN_SUCCESS,
   USER_LOGIN_ERROR
} from "../constants/index";
import Swal from 'sweetalert2';
import axiosConfig from "../data/configDatabase/axois";
import { GiConsoleController } from "react-icons/gi";
// import { error } from "jquery";

//Create login action
export function userAuthAction(userName,password) {
      return dispatch => {
          dispatch(authUser(userName,password));
        //Get user from the API
        axiosConfig
          .get(`/users/?userName=${userName}&password=${password}`)
          .then(response => {
              console.log(response.data);
              dispatch(authUserSuccess(response.data));
          })
          .catch(error => {
            console.log(error);
            dispatch(authUserError());
        });
      }
}