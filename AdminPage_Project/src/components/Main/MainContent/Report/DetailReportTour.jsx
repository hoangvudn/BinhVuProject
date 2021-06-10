import React, { useEffect, useRef, useState } from 'react';
import { Formik } from 'formik';

import { useDispatch, useSelector } from "react-redux";
import {
    searchHistoryAction
} from "../../../../actions/historyTour";
import Numeral from "numeral";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import { TiGroup } from 'react-icons/ti';
import { IoLogoUsd } from 'react-icons/io';
import { MdCardTravel } from 'react-icons/md';
const containerStyle = {
    width: '100%',
    height: '400px'
  };
  
  const center = {
    lat: -3.745,
    lng: -38.523
  };

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
     
     let maxType = Numeral(max);
     let priceMaxType =  maxType.format(); 
     let priceType = Numeral(sum);
     let priceTypeEdit = priceType.format();
    
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
                         <span className="blockReportTour__groupItem__listItem--itemMaxPrice"> {priceMaxType +" "+"VND"}  </span>
                         <IoLogoUsd className="blockReportTour__groupItem__listItem--itemIcon" />
                    </div>
                    <div className="blockReportTour__groupItem__listItem">
                        <span className="blockReportTour__groupItem__listItem--titleTotalMoney"> Total Money Per User</span>
                        <span className="blockReportTour__groupItem__listItem--itemTotalMoney"> {priceTypeEdit +" "+"VND"}  </span>
                        <IoLogoUsd className="blockReportTour__groupItem__listItem--itemIcon" />
                    </div>
                    <div className="blockReportTour__groupItem__listItem">
                        <span className="blockReportTour__groupItem__listItem--titleTotalGuest"> Total Guest </span>
                        <span className="blockReportTour__groupItem__listItem--itemTotalGuest">  {sumGuest}  </span>
                        <TiGroup className="blockReportTour__groupItem__listItem--itemIcon" />
                    </div>
                    <div className="blockReportTour__groupItem__listItem">
                        <span className="blockReportTour__groupItem__listItem--titleTotalBookedTour"> Total BOOKED TOUR </span>
                        <span className="blockReportTour__groupItem__listItem--itemTotalBookedTour">  {historyBookTour.length}  </span>
                        <MdCardTravel className="blockReportTour__groupItem__listItem--itemIcon" />
                    </div>
                </div>

                <div className="blockReportTour__googleMap">
                  <LoadScript
                        googleMapsApiKey="AIzaSyBEslUzkiODPHq1__azBfqk9UHFcAPKkog"
                        >
                        <GoogleMap
                            mapContainerStyle={containerStyle}
                            center={center}
                            zoom={10}
                        >
                            { /* Child components, such as markers, info windows, etc. */ }
                            <></>
                        </GoogleMap>
                   </LoadScript>
                </div>
           </div>
        </>
    )
}
export default DetailReportTour;