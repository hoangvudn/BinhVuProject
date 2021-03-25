import {
    GET_USER,
    GET_USER_SUCCESS,
    GET_USER_ERROR,

    GET_USER_EDIT,
    USER_EDIT_SUCCESS,
    USER_EDIT_ERROR,
    GET_USER_UPDATE,
    USER_UPDATE_SUCCESS,
    USER_UPDATE_ERROR
} from "../constants/index";
import Swal from 'sweetalert2';
import axiosConfig from "../data/configDatabase/axois";
// import { error } from "jquery";



//Get users list 
export function getUsersAction() {
    return dispatch => {
        dispatch(getUsersList());

        //Ask the API
        axiosConfig 
         .get("./usersGroup")
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

//Function Edit Users 
export function editUserAction(id) {
    return dispatch => {
        dispatch(editUser(id));

        //Get users from the API
        axiosConfig
          .get(`/usersGroup/${id}`)
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
    type: GET_USER_SUCCESS,
    payload: user
});

export const editUserError = () => ({
    type: GET_USER_ERROR
});

//Change a user in the API and the gloal state
export function updateUserAction(user) {
    return dispatch => {
        dispatch(updateUser());

        //Update user in the API
        axiosConfig
          .put(`/usersGroup/${user.id}`, user)
          .then(response => {
              console.log(response);
              dispatch(updateUserSuccess(response.data));
              Swal.fire("Saved","User updated successfully","OK");
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


//----------------------------------------CREATE NEW USER--------------------------------------------//

// //Create New User 
// export function createNewUserAction(user) {
//     //dispatch is in charge to call the 2 actions that we have here 
//     return dispatch => {
//         //Here i call the function that allows me to create the "newUser"
//         dispatch(newUser());
//         //Insert in the API
//         axoisConfig
//           .post("/users", user)
//           .then(response => {
//               console.log(response);
//               // If insert correctly
//               dispatch(newUserSucces(user))
//           })
//           .catch(error => {
//               console.log(error);
//               // If there is an error 
//               dispatch(newUserError());
//           });
//     };
// }

// export const newUser = () => ({
//     type: ADD_USER
// });

// export const newUserSucces = user => ({
//     type: ADD_USER_SUCCESS,
//     payload: user
// });

// export const newUserError = error => ({
//     type: ADD_USER_ERROR
// });