import {
    GET_USER,
    GET_USER_SUCCESS,
    GET_USER_ERROR
} from "../constants/index";

import axiosConfig from "../data/configDatabase/axois";



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