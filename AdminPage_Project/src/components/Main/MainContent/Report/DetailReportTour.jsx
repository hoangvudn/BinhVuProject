import React, { useEffect, useRef, useState } from 'react';
import { Formik } from 'formik';

import { useDispatch, useSelector } from "react-redux";
import {
    searchHistoryAction
} from "../../../../actions/historyTour";

const DetailReportTour = ({arrPrice,arrAmount}) => {
    const dispatch = useDispatch();
    const [valueSearch, setValueSearch] = useState("");
    const valueSearchRef = useRef("");

    useEffect(() => {
        const getHistoryTourSearch = () => dispatch( searchHistoryAction(valueSearch));
        getHistoryTourSearch(); 
    }, [dispatch, valueSearch]);
    
    const historyBookTour = useSelector(state => state.historyToursList.historyToursList);
    console.log("List Search HISTORY :", historyBookTour);
    
    let max =  Math.max(...arrPrice);
    console.log("MAX NUMBER:", ( Math.max(...arrPrice)));
    
    const sum = arrPrice.reduce((a, b) => {
        return  a + b;
    });

    const sumGuest = arrAmount.reduce((a,b) => {
        return a + b;
    });
      

    //let total = arrday.reduce((total1, currentValue) => total1 = total1 + currentValue.prix,0));
    console.log("TOtal mi tom: ", sum );
    console.log("TOtal mi tom: ", sumGuest );
    //console.log("TOtal Money: ", totalMoney );
    return (    
        <>
           <div className="blockReportTour">   
                <div className="blockReportTour__groupItem">
                    <div className="blockReportTour__groupItem__listItem">
                         <span className="blockReportTour__groupItem__listItem--titleMaxPrice"> Max Price Tour </span>
                         <span className="blockReportTour__groupItem__listItem--itemMaxPrice"> {max +" "+"VND"}  </span>
                    </div>
                    <div className="blockReportTour__groupItem__listItem">
                        <span className="blockReportTour__groupItem__listItem--titleTotalMoney"> Total Money Per User</span>
                        <span className="blockReportTour__groupItem__listItem--itemTotalMoney"> {sum +" "+"VND"}  </span>
                    </div>
                    <div className="blockReportTour__groupItem__listItem">
                        <span className="blockReportTour__groupItem__listItem--titleTotalGuest"> Total Guest </span>
                        <span className="blockReportTour__groupItem__listItem--itemTotalGuest">  {sumGuest}  </span>
                    </div>
                    <div className="blockReportTour__groupItem__listItem">
                        <span className="blockReportTour__groupItem__listItem--titleTotalGuest"> Total BOOKED TOUR </span>
                        <span className="blockReportTour__groupItem__listItem--itemTotalGuest">  {historyBookTour.length}  </span>
                    </div>
                </div>   
           </div>
        </>
    )
}
export default DetailReportTour;