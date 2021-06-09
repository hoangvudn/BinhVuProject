import React, { useEffect, useRef, useState } from 'react';
import { Formik } from 'formik';

import { useDispatch, useSelector } from "react-redux";
import {
    searchHistoryAction
} from "../../../../actions/historyTour";
import Numeral from "numeral";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

const containerStyle = {
    width: '400px',
    height: '400px'
  };
  
  const center = {
    lat: -3.745,
    lng: -38.523
  };
  const GoogleMap1 = () => {
    return (
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
      )
  }
  export default GoogleMap1;
  