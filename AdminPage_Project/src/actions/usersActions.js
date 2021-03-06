import {
    GET_USER,
    GET_USER_SUCCESS,
    GET_USER_ERROR,

    ADD_USER,
    ADD_USER_SUCCESS,
    ADD_USER_ERROR,

    GET_USER_EDIT,
    USER_EDIT_SUCCESS,
    USER_EDIT_ERROR,
    GET_USER_UPDATE,
    USER_UPDATE_SUCCESS,
    USER_UPDATE_ERROR,

    GET_USER_DELETED,
    USER_DELETED_SUCCESS,
    USER_DELETED_ERROR,

    GET_USER_SEARCH,
    USER_SEARCH_SUCCESS,
    USER_SEARCH_ERROR,

    GET_USER_LOGIN,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_ERROR

} from "../constants/index";
import Swal from 'sweetalert2';
import axiosConfig from "../data/configDatabase/axois";
// import { error } from "jquery";

//Create new user 
export function createNewUserAction(user) {
    return dispatch => {
         dispatch(newUser());
         //Insert to the API
         axiosConfig
            .post("/users",user)
            .then(reponse => {
                console.log(reponse);
                //if insert correctly
                dispatch(newUserSucces(user));
            })
            .catch(error => {
                console.log(error);
                // If there is an error
                dispatch(newUserError());
            });
    };
}

export const newUser = () => ({
    type: ADD_USER
});

export const newUserSucces = user => ({
    type: ADD_USER_SUCCESS,
    payload: user
});

export const newUserError = error => ({
    type: ADD_USER_ERROR,
});

//-----------------------FETCH DATA------------------------
//Get users list 
export function getUsersAction() {
    return dispatch => {
        dispatch(getUsersList());

        //Ask the API
        axiosConfig 
         .get(`./users`)
         .then(response => {
             dispatch(getUsersSucces(response.data));
         })
         .catch(error => {
             dispatch(getUsersError());
         });
    };
}

export const getUsersList = () => ({
    type: GET_USER
});

export const getUsersSucces = usersList => ({
    type: GET_USER_SUCCESS,
    payload: usersList
});

export const getUsersError = () => ({
    type: GET_USER_ERROR
});

//----------------------------------Function Edit Users-----------------------------------
export function editUserAction(id) {
    return dispatch => {
        dispatch(editUser(id));

        //Get users from the API
        axiosConfig
          .get(`/users/${id}`)
          .then(response => {
              console.log(response.data);
              dispatch(editUserSuccess(response.data));
          })
          .catch(error => {
              console.log(error);
              dispatch(editUserError());
          });
    };
}

export const editUser = () => ({
    type: GET_USER_EDIT
});

export const editUserSuccess = user => ({
    type: USER_EDIT_SUCCESS,
    payload: user
});

export const editUserError = () => ({
    type: USER_EDIT_ERROR
});

//Change a user in the API and the gloal state
export function updateUserAction(user) {
    return dispatch => {
        dispatch(updateUser());

        //Update user in the API
        axiosConfig
          .put(`/users/${user.id}`, user)
          .then(response => {
              console.log(response);
              dispatch(updateUserSuccess(response.data));
              //Swal.fire("Saved","User updated successfully","OK");
          })
          .catch(error => {
              console.log(error);
              dispatch(updateUserError());
          });
    };
}

export const updateUser = () => ({
    type: GET_USER_UPDATE
});

export const updateUserSuccess = user => ({
    type: USER_UPDATE_SUCCESS,
    payload: user
})

export const updateUserError = () => ({
    type: USER_UPDATE_ERROR
});

//---------------------------Function Delete User---------------------------------------------------
export function deleteUserAction(id) {
    return dispatch => {
        dispatch(deleteUser(id));

        //Delete user from the API
        axiosConfig
          .delete(`/users/${id}`)
          .then(response => {
              console.log(response);
              dispatch(deleteUserSuccess(id));
          })
          .catch(error => {
              console.log(error);
              dispatch(deleteUserError());
          });
    };
};

export const deleteUser = () => ({
    type: GET_USER_DELETED
});

export const deleteUserSuccess = id => ({
    type: USER_DELETED_SUCCESS,
    payload: id
});

export const deleteUserError = () => ({
    type: USER_DELETED_ERROR
});

//---------------------------Function Search User------------------------------------------------------

 export function searchUserAction(value) {
    return dispatch => {
        dispatch(searchUser(value));
        axiosConfig
           .get(`./users/?q=${value}`)
           .then(response => {
                 console.log("search result:",response);
                 dispatch(searchUserSuccess(response.data));
           })
           .catch(error => {
            console.log("NO display record: ",error);
            dispatch(searchUserError());
        });
    };
};

 export const searchUser = () => ({
     type: GET_USER_SEARCH
 });

 export const searchUserSuccess = usersList => ({
     type: USER_SEARCH_SUCCESS,
     payload: usersList
 })

 export const searchUserError = () => ({
     type: USER_SEARCH_ERROR
 })

  //=================================Authentication=LOGIN===============================

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
    };
 };

 export const authUser = () => ({
        type: GET_USER_LOGIN
 });

 export const authUserSuccess = toursList => ({
        type: USER_LOGIN_SUCCESS,
        payload: toursList
 });

 export const authUserError = () => ({
        type: USER_LOGIN_ERROR,
 });

//=================================================================================

