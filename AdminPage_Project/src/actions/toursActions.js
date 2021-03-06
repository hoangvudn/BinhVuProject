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
    TOUR_DELETED_ERROR,

    GET_TOUR_SEARCH,
    TOUR_SEARCH_SUCCESS,
    TOUR_SEARCH_ERROR,

    GET_TOUR_SELECTTOUR,
    TOUR_SELECTTOUR_SUCCESS,
    TOUR_SELECTTOUR_ERROR,

    GET_TOUR_SELECT_PLACE,
    TOUR_SELECT_PLACE_SUCCESS,
    TOUR_SELECT_PLACE_ERROR,

    GET_USER_LOGIN,
    GET_USER_SUCCESS,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_ERROR
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

//---------------------------Function Search Tour------------------------------------------------------

export function searchTourAction(value) {
    return dispatch => {
        dispatch(searchTour(value));
        axiosConfig
           .get(`./toursTravel/?q=${value}`)
           .then(response => {
                 console.log("search result:",response);
                 dispatch(searchTourSuccess(response.data));
           })
           .catch(error => {
            console.log("NO display record: ",error);
            dispatch(searchTourError());
        });
    };
};

 export const searchTour = () => ({
     type: GET_TOUR_SEARCH
 });

 export const searchTourSuccess = toursList => ({
     type: TOUR_SEARCH_SUCCESS,
     payload: toursList
 })

 export const searchTourError = () => ({
     type: TOUR_SEARCH_ERROR
 })

//=================================================SEARCH STATUS TOUR=================
export function selectTourAction(value) {
    return dispatch => {
        dispatch(selectTour(value));
        axiosConfig
           .get(`./toursTravel/?type=${value}`)
           .then(response => {
                 console.log("search result:",response);
                 dispatch(selectTourSuccess(response.data));
           })
           .catch(error => {
            console.log("NO display record: ",error);
            dispatch(selectTourError());
        });
    };
};

 export const selectTour = () => ({
     type: GET_TOUR_SELECTTOUR
 });

 export const selectTourSuccess = toursList => ({
     type: TOUR_SELECTTOUR_SUCCESS,
     payload: toursList
 })

 export const selectTourError = () => ({
     type: TOUR_SELECTTOUR_ERROR
 })
 //=================================================SEARCH TOUR BY PLACE=================
export function selectPlaceAction(value) {
    return dispatch => {
        dispatch(selectPlace(value));
        axiosConfig
           .get(`./toursTravel/?place=${value}`)
           .then(response => {
                 console.log("search result:",response);
                 dispatch(selectPlaceSuccess(response.data));
           })
           .catch(error => {
            console.log("NO display record: ",error);
            dispatch(selectPlaceError());
        });
    };
};

 export const selectPlace = () => ({
     type: GET_TOUR_SELECTTOUR
 });

 export const selectPlaceSuccess = toursList => ({
     type: TOUR_SELECTTOUR_SUCCESS,
     payload: toursList
 })

 export const selectPlaceError = () => ({
     type: TOUR_SELECTTOUR_ERROR
 })

