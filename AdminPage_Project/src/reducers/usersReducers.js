import {
    GET_USER,
    GET_USER_SUCCESS,
    GET_USER_ERROR
  } from "../constants/index"
  
  const initialState = {
    usersList: [],
    error: null,
    loading: false,
    user: {}
  };
  
  export default function(state =  initialState, action) {
      switch (action.type) {
          case GET_USER:
              return {
                 ...state,
                 loading:true,
                 user: {}
              };
          case GET_USER_SUCCESS:
              return {
                    ...state,
                    usersList: action.payload,
                    loading: false,
                    error: false,
                    user: {}
              };
          case GET_USER_ERROR:
              return {
                    ...state,
                    usersList: [],
                    loading: false,
                    error: true 
              };
            default:
                return state;
      }
  }