import React, { useEffect, useRef, useState } from "react";
import { Formik } from 'formik';
import Swal from "sweetalert2";
import "./style/tourStyle.scss";
import "./style/responsive.scss";

import { useDispatch, useSelector } from "react-redux";
import moment from 'moment';

import Numeral from 'numeral';
import DatePicker from "react-datepicker";
import {
  editTourAction,
  updateTourAction
} from "../../../../actions/toursActions";
import { nullFormat } from "numeral";

// //Declare match and history of react router, 
// {match to get id} and {history to redirect to homepage after edited successfully} 
const DetailTour = ({ match, history }) => { 
  const [listDay, setListDay] = useState([]);
  const dispatch = useDispatch();
  
  const tour = useSelector((state) => state.toursList.tour);
  const { id } = match.params;
  
  useEffect(() => {
    dispatch(editTourAction(id));
  }, [dispatch, id]);
  //=======================Update List Date=============
  useEffect(() => {
    if(tour.calendarDays) {
        setListDay(tour.calendarDays);
    }
  }, [tour.calendarDays]);
  //======================================PRICE==========
    const priceType =  Numeral(tour?.price);
    const priceTypeEdit = priceType.format();
    //============================================
  return (
     <>
          <div className="blockDetailTour">
              <div className="blockDetailTour__headerTitle"> 
                  <h2> TOUR DETAIL </h2>
              </div>
              <div className="blockDetailTour__topContain">
                  <div className="blockDetailTour__topContain__leftItem">
                      <img src={tour?.image} />
                  </div>
                  <div className="blockDetailTour__topContain__rightItem">
                    <div className="blockDetailTour__topContain__rightItem--mainTitle">
                       <span> Tour Name: {tour?.name} </span>
                    </div>
                    <div className="blockDetailTour__topContain__rightItem--mainTitle">
                       <span> Place: {tour?.place} </span>
                    </div>
                    <div className="blockDetailTour__topContain__rightItem--mainTitle">
                       <span> Day Amount: {tour?.day} </span>
                    </div>
                    <div className="blockDetailTour__topContain__rightItem--mainTitle">
                       <span> Price: {priceTypeEdit} VND </span>
                    </div>
                    <div className="blockDetailTour__topContain__rightItem--mainTitle">
                       <span> Start Date: {tour?.startDays + " " +" "} </span>
                    </div>
                    <div className="blockDetailTour__topContain__rightItem--mainTitle">
                       <span> Guest Amount: {tour?.apply} </span>
                    </div>
                  </div>
              </div>
              {/* ==================================================================================== */}
              <div className="blockDetailTour__middleContain">
                <div className="blockDetailTour__middleContain__leftItem">
                      <table className="blockDetailTour__middleContain__leftItem__table">
                        <thead>
                           <tr>
                              <th> Start Date </th>
                              <th> End Date </th>
                           </tr>
                        </thead>
                        <tbody>
                          { listDay?.map((list,index)  => (    
                            <tr>
                                  <td> 
                                      {list.startDay}
                                  </td>
                                  <td> 
                                      {list.abouttDay}
                                  </td>
                            </tr>
                             )
                          )} 
                        </tbody> 
                      </table>
                </div>
                <div className="blockDetailTour__middleContain__rightItem">
                      <img src={tour?.imageIntroduction} />
                </div>
              </div>
              {/* ==================================================================================== */}
              <div className="blockDetailTour__footerContain">
                <div className="blockDetailTour__footerContain__introduction">
                     <span> {tour?.introduction} </span>
                </div>
              </div>
          </div>

     </>
  )
}
export default  DetailTour;
 