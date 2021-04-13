import {
    GET_USER,
    GET_USER_SUCCESS,
    GET_USER_ERROR,

    GET_USER_EDIT,
    USER_EDIT_ERROR,
    USER_EDIT_SUCCESS,
    GET_USER_UPDATE,
    USER_UPDATE_SUCCESS,
    USER_UPDATE_ERROR,
    ADD_USER,
    ADD_USER_SUCCESS,
    ADD_USER_ERROR,
    GET_USER_DELETED,
    USER_DELETED_SUCCESS,
    USER_DELETED_ERROR,
    GET_USER_SEARCH,
    USER_SEARCH_SUCCESS,
    USER_SEARCH_ERROR
  } from "../constants/index"
  
  const initialState = {
    usersList: [],
    error: null,
    loading: false,
    user: {}
  };
  
  export default function(state =  initialState, action) {
      switch (action.type) {
        //---------------GET USER----------------------------------
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
      //--------------------ADD USER-------------------------------------
          case ADD_USER:
              return {
                  ...state,
                  error: null
              };
          case ADD_USER_SUCCESS:
              return {
                  ...state,
                  error: null,
                  usersList: [...state.usersList, action.payload]
              };
          case ADD_USER_ERROR:
              return {
                  ...state,
                  error: true
              }
      //--------------------EDIT USER------------------------------------
          case GET_USER_EDIT:
               return {
                    ...state,
                    error: null
               };
          case USER_EDIT_SUCCESS:
               return {
                   ...state,
                   error: null,
                   user: action.payload
               };
          case USER_EDIT_ERROR:
               return {
                   ...state,
                   error: true
               };     
          case GET_USER_UPDATE:
               return {
                   ...state,
                   error: null
               };
          case USER_UPDATE_SUCCESS:
               return {
                   ...state,
                   error: null,
                   usersList: state.usersList.map(user => 
                       user.id === action.payload.id
                       ? (user = action.payload)
                       : user
                   )
               };
           case USER_UPDATE_ERROR:
               return {
                   ...state,
                   error: true
               }; 
           case GET_USER_DELETED:
               return {
                   ...state,
                   error: null
               };
           case USER_DELETED_SUCCESS:
               return {
                   ...state,
                   error: null,
                   usersList: state.usersList.filter(
                       user => user.id !== action.payload
                   )
               };
            case USER_DELETED_ERROR:
                return {
                    ...state,
                    error: true
                }
            case GET_USER_SEARCH:
                return {
                    ...state,
                    error: true
                }
            case USER_SEARCH_SUCCESS:
                return {
                    ...state,
                    error: null,
                    usersList: action.payload
                    //user: {}
                }
            case USER_SEARCH_ERROR: 
                return {
                    ...state,
                    error: true
                }
          default:
               return state;
      }
  }