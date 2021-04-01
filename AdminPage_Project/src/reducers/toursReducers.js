import {
    GET_TOUR,
    GET_TOUR_SUCCESS,
    GET_TOUR_ERROR,

    GET_TOUR_EDIT,
    TOUR_EDIT_ERROR,
    TOUR_EDIT_SUCCESS,
    GET_TOUR_UPDATE,
    TOUR_UPDATE_SUCCESS,
    TOUR_UPDATE_ERROR,

    ADD_TOUR,
    ADD_TOUR_SUCCESS,
    ADD_TOUR_ERROR,

    GET_TOUR_DELETED,
    TOUR_DELETED_SUCCESS,
    TOUR_DELETED_ERROR
  } from "../constants/index"
  
  const initialState = {
    toursList: [],
    error: null,
    loading: false,
    tour: {}
  };
  
  export default function(state =  initialState, action) {
      switch (action.type) {
        //---------------GET TOUR----------------------------------
          case GET_TOUR:
              return {
                 ...state,
                 loading:true,
                 tour: {}
              };
          case GET_TOUR_SUCCESS:
              return {
                    ...state,
                    toursList: action.payload,
                    loading: false,
                    error: false,
                    tour: {}
              };
          case GET_TOUR_ERROR:
              return {
                    ...state,
                    toursList: [],
                    loading: false,
                    error: true 
              };
      //--------------------ADD TOUR-------------------------------------
          case ADD_TOUR:
              return {
                  ...state,
                  error: null
              };
          case ADD_TOUR_SUCCESS:
              return {
                  ...state,
                  error: null,
                  toursList: [...state.toursList, action.payload]
              };
          case ADD_TOUR_ERROR:
              return {
                  ...state,
                  error: true
              }
      //--------------------EDIT TOUR------------------------------------
          case GET_TOUR_EDIT:
               return {
                    ...state,
                    error: null
               };
          case TOUR_EDIT_SUCCESS:
               return {
                   ...state,
                   error: null,
                   tour: action.payload
               };
          case TOUR_EDIT_ERROR:
               return {
                   ...state,
                   error: true
               };     
          case GET_TOUR_UPDATE:
               return {
                   ...state,
                   error: null
               };
          case TOUR_UPDATE_SUCCESS:
               return {
                   ...state,
                   error: null,
                   toursList: state.toursList.map(tour => 
                       tour.id === action.payload.id
                       ? (tour = action.payload)
                       : tour
                   )
               };
           case TOUR_UPDATE_ERROR:
               return {
                   ...state,
                   error: true
               }; 
           case GET_TOUR_DELETED:
               return {
                   ...state,
                   error: null
               };
           case TOUR_DELETED_SUCCESS:
               return {
                   ...state,
                   error: null,
                   toursList: state.toursList.filter(
                       tour => tour.id !== action.payload
                   )
               };
            case TOUR_DELETED_ERROR:
                return {
                    ...state,
                    error: true
                }
          default:
               return state;
      }
  }