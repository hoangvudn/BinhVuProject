import React, { useEffect, useRef, useState } from "react";
import { Formik } from 'formik';
import Swal from "sweetalert2";
import './style/historyStyle.scss';
import './style/responsive.scss';

import { useDispatch, useSelector } from "react-redux";
import moment from 'moment';

import Numeral from 'numeral';
import DatePicker from "react-datepicker";
import {
  editHistoryTourAction,
  updateTourAction
} from "../../../../actions/historyTour";
import { nullFormat } from "numeral";

// //Declare match and history of react router, 
// {match to get id} and {history to redirect to homepage after edited successfully} 
const DetailHistoryTour = ({ match, history }) => { 
  const [infoUser, setInfoUser] = useState([]);
  const [infoPayment, setinfoPayment] = useState([]);
  const dispatch = useDispatch();
  //const historyBookTour = useSelector((state) => state.toursList.historyBookTour);
  const historyBookTour = useSelector(state => state.historyToursList.historyTour);
 // console.log("User Information: ", historyBookTour?.infoUser.phone);
  const { id } = match.params;
  
  useEffect(() => {
    dispatch(editHistoryTourAction(id));
  }, [dispatch, id]);

  //======================= Info User =============
    useEffect(() => {
      if(historyBookTour.infoUser) {
          setInfoUser(historyBookTour?.infoUser);
      }
    }, [historyBookTour.infoUser]);
    console.log ("OOIIIII", infoUser);
  //====================================================
  //======================= Info Payment =============
   useEffect(() => {
     if(historyBookTour.paymentUser) {
       setinfoPayment(historyBookTour?.paymentUser);
     }
   }, [historyBookTour.paymentUser]);
   console.log ("TYURYURY", infoPayment);
//====================================================
  // }, [historyBookTour.calendarDays]);
  const dateStart = moment(historyBookTour?.selectDay).format("DD-MM-YYYY");
  //======================================PRICE==========
    const priceType =  Numeral(historyBookTour?.price);
    const priceTypeEdit = priceType.format();
    //============================================
  return (
     <>
          <div className="blockDetailHistoryTour">
              <div className="blockDetailHistoryTour__headerTitle"> 
                  <h2> HISTORY BOOK TOUR DETAIL </h2>
              </div>
              <div className="blockDetailHistoryTour__topContain">
                  <div className="blockDetailHistoryTour__topContain__leftItem">
                      <img src={historyBookTour?.image} />
                  </div>
                  <div className="blockDetailHistoryTour__topContain__rightItem">
                    <div className="blockDetailHistoryTour__topContain__rightItem--mainTitle">
                       <span> Tour Name: {historyBookTour?.name} </span>
                    </div>
                    <div className="blockDetailHistoryTour__topContain__rightItem--mainTitle">
                       <span> Place: {historyBookTour?.place} </span>
                    </div>
                    <div className="blockDetailHistoryTour__topContain__rightItem--mainTitle">
                       <span> Date Start: {dateStart} </span>
                    </div>
                    <div className="blockDetailHistoryTour__topContain__rightItem--mainTitle">
                       <span> Price: {priceTypeEdit} VND </span>
                    </div>
                    <div className="blockDetailHistoryTour__topContain__rightItem--mainTitle">
                       <span> Day Amount: {historyBookTour?.day}  </span>
                    </div>
                    <div className="blockDetailHistoryTour__topContain__rightItem--mainTitle">
                       <span> Guest Amount: {historyBookTour?.countUsers} </span>
                    </div>
                  </div>
              </div>
              {/* ==================================================================================== */}
              <div className="blockDetailHistoryTour__middleContain">
                  <div className="blockDetailHistoryTour__middleContain__leftItem">
                     <div className="blockDetailHistoryTour__middleContain__leftItem--listItem">
                        <span> Name: {infoUser.name} </span>
                        <span> Email: {infoUser.email} </span>
                        <span> Phone: {infoUser.phone} </span>
                     </div> 
                  </div>
                  <div className="blockDetailHistoryTour__middleContain__middleItem">
                     <div className="blockDetailHistoryTour__middleContain__middleItem--listItem">
                        <img src={historyBookTour?.transports} />
                     </div> 
                  </div>
                  <div className="blockDetailHistoryTour__middleContain__rightItem">
                      <div className="blockDetailHistoryTour__middleContain__rightItem--listItem">
                          <span> Card Information: {infoPayment.cardUser} </span>
                          <span> Card Number: {infoPayment.cardNumber} </span>
                          <span> Payment : {infoPayment.checkBacking} </span>
                      </div> 
                  </div>  
              </div>

              {/* ==================================================================================== */}
              {/* <div className="blockDetailHistoryTour__footerContain">
                <div className="blockDetailHistoryTour__footerContain__introduction">
                     
                </div>
              </div> */}
          </div>

     </>
  )
}
export default  DetailHistoryTour;
 