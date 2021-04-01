import {
    GET_TOUR,
    GET_TOUR_SUCCESS,
    GET_TOUR_ERROR,

    ADD_TOUR,
    ADD_TOUR_SUCCESS,
    ADD_TOUR_ERROR,

    GET_TOUR_EDIT,
    TOUR_EDIT_SUCCESS,
    TOUR_EDIT_ERROR,
    GET_TOUR_UPDATE,
    TOUR_UPDATE_SUCCESS,
    TOUR_UPDATE_ERROR,

    GET_TOUR_DELETED,
    TOUR_DELETED_SUCCESS,
    TOUR_DELETED_ERROR
} from "../constants/index";
import Swal from 'sweetalert2';
import axiosConfig from "../data/configDatabase/axois";
// import { error } from "jquery";

//Create new tour 
export function createNewTourAction(tour) {
    return dispatch => {
         dispatch(newTour());
         //Insert to the API
         axiosConfig
            .post("/toursTravel",tour)
            .then(reponse => {
                console.log(reponse);
                //if insert correctly
                dispatch(newTourSucces(tour));
            })
            .catch(error => {
                console.log(error);
                // If there is an error
                dispatch(newTourError());
            });
    };
}

export const newTour = () => ({
    type: ADD_TOUR
});

export const newTourSucces = tour => ({
    type: ADD_TOUR_SUCCESS,
    payload: tour
});

export const newTourError = error => ({
    type: ADD_TOUR_ERROR
});

//-----------------------FETCH DATA------------------------
//Get tours list 
export function getToursAction() {
    return dispatch => {
        dispatch(getToursList());

        //Ask the API
        axiosConfig 
         .get("./toursTravel")
         .then(response => {
             dispatch(getToursSucces(response.data));
         })
         .catch(error => {
             dispatch(getToursError());
         });
    };
}

export const getToursList = () => ({
    type: GET_TOUR
});

export const getToursSucces = toursList => ({
    type: GET_TOUR_SUCCESS,
    payload: toursList
});

export const getToursError = () => ({
    type: GET_TOUR_ERROR
});

//----------------------------------Function Edit Tours-----------------------------------
export function editTourAction(id) {
    return dispatch => {
        dispatch(editTour(id));

        //Get tours from the API
        axiosConfig
          .get(`/toursTravel/${id}`)
          .then(response => {
              console.log(response.data);
              dispatch(editTourSuccess(response.data));
          })
          .catch(error => {
              console.log(error);
              dispatch(editTourError());
          });
    };
}

export const editTour = () => ({
    type: GET_TOUR_EDIT
});

export const editTourSuccess = tour => ({
    type: TOUR_EDIT_SUCCESS,
    payload: tour
});

export const editTourError = () => ({
    type: TOUR_EDIT_ERROR
});

//Change a tour in the API and the gloal state
export function updateTourAction(tour) {
    return dispatch => {
        dispatch(updateTour());

        //Update tour in the API
        axiosConfig
          .put(`/toursTravel/${tour.id}`, tour)
          .then(response => {
              console.log(response);
              dispatch(updateTourSuccess(response.data));
              //Swal.fire("Saved","Tour updated successfully","OK");
          })
          .catch(error => {
              console.log(error);
              dispatch(updateTourError());
          });
    };
}

export const updateTour = () => ({
    type: GET_TOUR_UPDATE
});

export const updateTourSuccess = tour => ({
    type: TOUR_UPDATE_SUCCESS,
    payload: tour
})

export const updateTourError = () => ({
    type: TOUR_UPDATE_ERROR
});

//---------------------------Function Delete Tour---------------------------------------------------
export function deleteTourAction(id) {
    return dispatch => {
        dispatch(deleteTour(id));

        //Delete tour from the API
        axiosConfig
          .delete(`/toursTravel/${id}`)
          .then(response => {
              console.log(response);
              dispatch(deleteTourSuccess(id));
          })
          .catch(error => {
              console.log(error);
              dispatch(deleteTourError());
          });
    };
};

export const deleteTour = () => ({
    type: GET_TOUR_DELETED
});

export const deleteTourSuccess = id => ({
    type: TOUR_DELETED_SUCCESS,
    payload: id
});

export const deleteTourError = () => ({
    type: TOUR_DELETED_ERROR
});
//----------------------------------------CREATE NEW TOUR--------------------------------------------//

// //Create New Tour 
// export function createNewTourAction(tour) {
//     //dispatch is in charge to call the 2 actions that we have here 
//     return dispatch => {
//         //Here i call the function that allows me to create the "newTour"
//         dispatch(newTour());
//         //Insert in the API
//         axoisConfig
//           .post("/tours", tour)
//           .then(response => {
//               console.log(response);
//               // If insert correctly
//               dispatch(newTourSucces(tour))
//           })
//           .catch(error => {
//               console.log(error);
//               // If there is an error 
//               dispatch(newTourError());
//           });
//     };
// }

// export const newTour = () => ({
//     type: ADD_TOUR
// });

// export const newTourSucces = tour => ({
//     type: ADD_TOUR_SUCCESS,
//     payload: tour
// });

// export const newTourError = error => ({
//     type: ADD_TOUR_ERROR
// });