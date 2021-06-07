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
  
  const initialState = {
    historyToursList: [],
    error: null,
    loading: false,
    historyTour: {}
  };
  
  export default function(state =  initialState, action) {
      switch (action.type) {
        //---------------GET TOUR----------------------------------
          case GET_HISTORY_TOUR:
              return {
                 ...state,
                 loading:true,
                 historyTour: {}
              };
          case GET_HISTORY_TOUR_SUCCESS:
              return {
                    ...state,
                    historyToursList: action.payload,
                    loading: false,
                    error: false,
                    historyTour: {}
              };
          case GET_HISTORY_TOUR_ERROR:
              return {
                    ...state,
                    historyToursList: [],
                    loading: false,
                    error: true 
              };
    //   //--------------------ADD TOUR-------------------------------------
    //       case ADD_TOUR:
    //           return {
    //               ...state,
    //               error: null
    //           };
    //       case ADD_TOUR_SUCCESS:
    //           return {
    //               ...state,
    //               error: null,
    //               toursList: [...state.toursList, action.payload]
    //           };
    //       case ADD_TOUR_ERROR:
    //           return {
    //               ...state,
    //               error: true
    //           }
      //--------------------EDIT TOUR------------------------------------
          case GET_HISTORY_TOUR_EDIT:
               return {
                    ...state,
                    error: null
               };
          case TOUR_HISTORY_EDIT_SUCCESS:
               return {
                   ...state,
                   error: null,
                   historyTour: action.payload
               };
          case TOUR_HISTORY_EDIT_ERROR:
               return {
                   ...state,
                   error: true
               };     
    //       case GET_TOUR_UPDATE:
    //            return {
    //                ...state,
    //                error: null
    //            };
    //       case TOUR_UPDATE_SUCCESS:
    //            return {
    //                ...state,
    //                error: null,
    //                toursList: state.toursList.map(tour => 
    //                    tour.id === action.payload.id
    //                    ? (tour = action.payload)
    //                    : tour
    //                )
    //            };
    //        case TOUR_UPDATE_ERROR:
    //            return {
    //                ...state,
    //                error: true
    //            }; 
           case GET_HISTORY_TOUR_DELETED:
               return {
                   ...state,
                   error: null
               };
           case TOUR_HISTORY_DELETED_SUCCESS:
               return {
                   ...state,
                   error: null,
                   historyToursList: state.historyToursList.filter(
                       historyTour => historyTour.id !== action.payload
                   )
               };
            case TOUR_HISTORY_DELETED_ERROR :
                return {
                    ...state,
                    error: true
                }
           //===================================================================
            case GET_HISTORY_TOUR_SEARCH:
                return {
                    ...state,
                    error: true
                }
            case TOUR_HISTORY_SEARCH_SUCCESS:
                return {
                    ...state,
                    error: null,
                    historyToursList: action.payload,
                    historyTour: {}
                }
            case TOUR_HISTORY_SEARCH_ERROR: 
                return {
                    ...state,
                    error: true
                } 
            //============================================
            case GET_HISTORY_TOUR_SELECT_TOUR:
                return {
                    ...state,
                    error: true
                }
            case TOUR_HISTORY_SELECT_TOUR_SUCCESS:
                return {
                        ...state,
                        error: null,
                        historyToursList: action.payload,
                        historyTour: {}
                    }
            case TOUR_HISTORY_SELECT_TOUR_ERROR: 
                    return {
                        ...state,
                        error: true
                    }    
          default:
               return state;
      }
  }