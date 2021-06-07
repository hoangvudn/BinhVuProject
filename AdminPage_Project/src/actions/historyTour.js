import {
  
  GET_HISTORY_TOUR,
  GET_HISTORY_TOUR_SUCCESS,
  GET_HISTORY_TOUR_ERROR,

  GET_HISTORY_TOUR_DELETED,
  TOUR_HISTORY_DELETED_SUCCESS,
  TOUR_HISTORY_DELETED_ERROR,

  GET_HISTORY_TOUR_SEARCH,
  TOUR_HISTORY_SEARCH_SUCCESS,
  TOUR_HISTORY_SEARCH_ERROR,

  GET_HISTORY_TOUR_SELECT_TOUR,
  TOUR_HISTORY_SELECT_TOUR_SUCCESS,
  TOUR_HISTORY_SELECT_TOUR_ERROR,

  GET_HISTORY_TOUR_EDIT,
  TOUR_HISTORY_EDIT_SUCCESS,
  TOUR_HISTORY_EDIT_ERROR 

} from "../constants/index";
import axiosConfig from "../data/configDatabase/axois";

//-----------------------FETCH DATA------------------------
//Get users list 
export function getHistoryAction() {
  return dispatch => {
      dispatch(getHistoryList());

      //Ask the API
      axiosConfig 
       .get(`./historyBookTour`)
       .then(response => {
           dispatch(getHistorySuccess(response.data));
       })
       .catch(error => {
           dispatch(getHistoryError());
       });
  };
}

export const getHistoryList = () => ({
  type: GET_HISTORY_TOUR
});

export const getHistorySuccess = historyToursList => ({
  type: GET_HISTORY_TOUR_SUCCESS,
  payload: historyToursList
});

export const getHistoryError = () => ({
  type: GET_HISTORY_TOUR_ERROR
});

//=====================================================================================================
//----------------------------------Function Edit Tours-----------------------------------
export function editHistoryTourAction(id) {
  return dispatch => {
      dispatch(editHistoryTour(id));

      //Get tours from the API
      axiosConfig
        .get(`/historyBookTour/${id}`)
        .then(response => {
            console.log(response.data);
            dispatch(editHistoryTourSuccess(response.data));
        })
        .catch(error => {
            console.log(error);
            dispatch(editHistoryTourError());
        });
  };
}

export const editHistoryTour = () => ({
  type: GET_HISTORY_TOUR_EDIT
});

export const editHistoryTourSuccess = tour => ({
  type: TOUR_HISTORY_EDIT_SUCCESS,
  payload: tour
});

export const editHistoryTourError = () => ({
  type: TOUR_HISTORY_EDIT_ERROR
});

//---------------------------Function Delete History---------------------------------------------------
export function deleteHistoryAction(id) {
  return dispatch => {
      dispatch(deleteHistory(id));

      //Delete tour from the API
      axiosConfig
        .delete(`/historyBookTour/${id}`)
        .then(response => {
            console.log(response);
            dispatch(deleteHistorySuccess(id));
        })
        .catch(error => {
            console.log(error);
            dispatch(deleteHistoryError());
        });
  };
};

export const deleteHistory = () => ({
  type: GET_HISTORY_TOUR_DELETED
});

export const deleteHistorySuccess = id => ({
  type: TOUR_HISTORY_DELETED_SUCCESS,
  payload: id
});

export const deleteHistoryError = () => ({
  type: TOUR_HISTORY_DELETED_ERROR
});

//---------------------------Function Search Tour------------------------------------------------------

export function searchHistoryAction(value) {
  return dispatch => {
      dispatch(searchHistory(value));
      axiosConfig
         .get(`./historyBookTour/?q=${value}`)
         .then(response => {
               console.log("search result:",response);
               dispatch(searchHistorySuccess(response.data));
         })
         .catch(error => {
          console.log("NO display record: ",error);
          dispatch(searchHistoryError());
      });
  };
};

export const searchHistory = () => ({
   type: GET_HISTORY_TOUR_SEARCH
});

export const searchHistorySuccess = historyToursList => ({
   type: TOUR_HISTORY_SEARCH_SUCCESS,
   payload: historyToursList
})

export const searchHistoryError = () => ({
   type: TOUR_HISTORY_SEARCH_ERROR
})

//=================================================SEARCH STATUS TOUR=================
export function selectHistoryAction(value) {
  return dispatch => {
      dispatch(selectHistory(value));
      axiosConfig
         .get(`./historyBookTour/?place=${value}`)
         .then(response => {
               console.log("search result:",response);
               dispatch(selectHistorySuccess(response.data));
         })
         .catch(error => {
          console.log("NO display record: ",error);
          dispatch(selectHistoryError());
      });
  };
};

export const selectHistory = () => ({
   type: GET_HISTORY_TOUR_SELECT_TOUR
});

export const selectHistorySuccess = historyToursList => ({
   type: TOUR_HISTORY_SELECT_TOUR_SUCCESS,
   payload: historyToursList
})

export const selectHistoryError = () => ({
   type: TOUR_HISTORY_SELECT_TOUR_ERROR
})



