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

import loadingIcon from '../../../../assets/loading2.gif'
import './style/historyStyle.scss';
import './style/responsive.scss';
import DetailReportTour from "./DetailReportTour"
import GoogleMap1 from "./GoogleMap";
//import { array } from "prop-types";

const ReportTour = () => {
  
  const [place, setPlace] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
      const getHistoryList = () => dispatch(getHistoryAction());
      getHistoryList(); 
  }, []);
  

  const loading = useSelector(state => state.historyToursList.loading);
  const error = useSelector(state => state.historyToursList.error);
  const historyBookTour = useSelector(state => state.historyToursList.historyToursList);
 
 let arrPrice=[0];
 let arrAmount=[0];
 
  return (
      <React.Fragment>
           {error ? (
              <div className="font-weight-bold alert alert-primary text-center mt-4">
                Loading...
              </div>
          ) : null}
          <>
              {/* <div  className="headerTitle">
                           <span>REPORT BOOKED TOUR HISTORY</span>
              </div>  */}
              <div>
                  {
                     historyBookTour.map((list,index) => {
                        arrPrice.push(parseInt(list.price))
                        arrAmount.push(parseInt(list.countUsers))
                     })
                  }
              </div>
              <DetailReportTour arrPrice={arrPrice} arrAmount={arrAmount}/>
              {/* <GoogleMap1 /> */}
               {loading ?  <img src={loadingIcon}/> : null}
          </>
      </React.Fragment> 
 );
}
export default ReportTour;