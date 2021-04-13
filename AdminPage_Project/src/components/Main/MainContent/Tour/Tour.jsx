import React from 'react';
import { Formik } from 'formik';
import "./style/tourStyle.scss";
import { Link } from 'react-router-dom';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import Swal from "sweetalert2";

import { useDispatch } from "react-redux";
import { deleteTourAction } from "../../../../actions/toursActions"
// import React, { useState } from 'react'

// const [tour, setUser] = useState({
       
// })
const Tour = ({ tour }) => { 
    const dispatch = useDispatch();

    const confirmDeleteTour = id => {
        Swal.fire({
            title: "WARNING!",
            text: "Do you want delete this Tour : ",
            // text: "Do you want delete User : " + `${tour.tourName}` ,
            type:"warning",
            showCancelButton: true,
            confirmButtonText: " YES "
        }).then(result => {
            if (result.value) {
                Swal.fire("Deleted Tour", " Tour has been deleted ", "ok");
                dispatch(deleteTourAction(id));
            }
        });
    };
   return (
        <>
            <tr className="blockTourListMain__listItem">
                <td className="blockTourListMain__itemImage"> <img src= {tour.image} alt="image countryside"/>  </td>
                <td className="blockTourListMain__itemPlace"> {tour.place}  </td>
                <td className="blockTourListMain__itemName">  {tour.name}   </td>
                <td className="blockTourListMain__itemDayAmount"> {tour.day} </td>
                <td className="blockTourListMain__itemTransports"> <img src = {tour.transports} alt="image coutryside"/> </td>
                <td className="blockTourListMain__itemPrice"> {tour.price} </td>
                <td className="blockTourListMain__itemStartDay"> {tour.start} </td>
                {/* <td className="blockTourListMain__itemStartDay"> {tour.descriptions} </td> */}
                <td className="blockTourListMain__itemApplyPassenger"> {tour.apply} </td>
                
                <div className="blockTourListMain__groupIcon"> 
                    <Link to={`/toursList/edit/${tour.id}`} > 
                            <AiFillEdit className="blockTourListMain__groupIcon__editIcon"/>
                    </Link>
                
                    <AiFillDelete className="blockTourListMain__groupIcon__deleteIcon" onClick={() => confirmDeleteTour(tour.id)}/>
                </div>
            
            </tr>
          
        </>      
   )
}
export default  Tour;