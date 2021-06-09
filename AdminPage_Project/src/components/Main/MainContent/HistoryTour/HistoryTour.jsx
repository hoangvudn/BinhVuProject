import React, { useEffect, useRef, useState } from "react";
import { Formik } from 'formik'

import  Swal  from "sweetalert2";

import { useDispatch, useSelector} from "react-redux";
import moment from 'moment';
import Numeral from 'numeral';
import DatePicker from "react-datepicker"
import DatePicker1 from "react-datepicker"
import 'react-datepicker/dist/react-datepicker.css';
import { getHistoryAction } from "../../../../actions/historyTour";
import History from './History'
import loadingIcon from '../../../../assets/loading2.gif'
import './style/historyStyle.scss';
import './style/responsive.scss';
import SearchHistoryTour from "../HistoryTour/SearchHistoryTour"
//import { array } from "prop-types";

const HistoryTour = () => {
  
  const [place, setPlace] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
      const getHistoryList = () => dispatch(getHistoryAction());
      getHistoryList(); 
  }, []);
  

  const loading = useSelector(state => state.historyToursList.loading);
  const error = useSelector(state => state.historyToursList.error);
  const historyBookTour = useSelector(state => state.historyToursList.historyToursList);

  return (
      <React.Fragment>
           {error ? (
              <div className="font-weight-bold alert alert-primary text-center mt-4">
                Loading...
              </div>
          ) : null}
          <>
              <div className="headerTitle">
                    <span>MANAGEMENT BOOK TOUR HISTORY</span>
              </div>   
              <div className="blockHistoryListMain">
                      <table className="blockHistoryListMain__table">
                          <thead>
                              <tr>
                                  <th className="blockHistoryListMain__table--userName">User Name</th>
                                  <th className="blockHistoryListMain__table--place">Place</th>
                                  {/* <th className="blockHistoryListMain__table--tourName">Tour Name</th>  */}
                                  <th className="blockHistoryListMain__table--startDay">Start Day</th>           
                                  <th className="blockHistoryListMain__table--price">Price</th>
                                  <th className="blockHistoryListMain__table--applyPassenger">Guest Amount</th>
                                  <th className="blockHistoryListMain__table--moneyTotal">Total Money</th>
                                  <th className="blockHistoryListMain__table--userInfo">User Infor</th>
                                
                                  {/* <th className="blockHistoryListMain__table--imageIntroduction">Image Introduction</th>
                                  <th className="blockHistoryListMain__table--titleImage">Title Image</th> */}
                                  {/* <th className="blockHistoryListMain__table--headActionIcon"></th> */}
                                  {/* <th className="blockHistoryListMain__table--headActionIcon1"></th> */}
                              </tr>  
                          </thead>
                          
                          <tbody className="blockHistoryListMain__listItemGroup">  
                                  {historyBookTour.map(history => (
                                      <History key={history.id} history={history} />
                                  ))}
                          </tbody>
                      </table>       
              </div>       
              <SearchHistoryTour />

               {loading ?  <img src={loadingIcon}/> : null}
          </>
      </React.Fragment> 
 );
}
export default HistoryTour;