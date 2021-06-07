import React from 'react';
import { Formik } from 'formik';
import "./style/tourStyle.scss";
import "./style/responsive.scss";
import { Link } from 'react-router-dom';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import Swal from "sweetalert2";


import { useDispatch } from "react-redux";
import { deleteTourAction } from "../../../../actions/toursActions"

import Numeral from 'numeral'

import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
// import React, { useState } from 'react'

// const [tour, setUser] = useState({
       
// })
const Tour = ({ tour }) => { 
    const dispatch = useDispatch();
    
    //======================================================================
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
    const dateStart = tour.startDays;
    const priceType =  Numeral(tour.price);
   // console.log("Price Type: ", priceType.format());
    const priceTypeEdit = priceType.format();
    console.log("Ngay:", dateStart);
    //===============================
    const useStyles = makeStyles((theme) => ({
        root: {
          '& > *': {
            margin: theme.spacing(1),
          },
        },
        extendedIcon: {
          marginRight: theme.spacing(1),
        },
      }));
    const classes = useStyles();
    //===============================
   return (
        <>
            
            <tr className="blockTourListMain__listItem">
                <td className="blockTourListMain__listItem--itemImage"> 
                    <Link to={`/toursList/detail/${tour.id}`}> 
                             <img src= {tour.image} alt="image countryside"/> 
                    </Link>  
                </td>
                <td className="blockTourListMain__listItem--itemPlace"> {tour.place}  </td>
                <td className="blockTourListMain__listItem--itemName">  {tour.name}   </td>
                <td className="blockTourListMain__listItem--itemDayAmount"> {tour.day} </td>
                {/* <td className="blockTourListMain__listItem--itemTransports"> <img src = {tour.transports} alt="image coutryside"/> </td> */}
                <td className="blockTourListMain__listItem--itemPrice"> {priceTypeEdit} </td>
                {/* <td className="blockTourListMain__listItem--itemStartDay"> {dateStart}  </td> */}
                {/* <td className="blockTourListMain__listItem--itemDescriptions"> {tour.descriptions} </td>
                <td className="blockTourListMain__listItem--itemApplyPassenger"> {tour.apply} </td>
                <td className="blockTourListMain__listItem--itemIntroduction"> {tour.introduction} </td>
                <td className="blockTourListMain__listItem--itemImageIntroduction"> <img src= {tour.imageIntroduction} alt="image introduction"/> </td>
                <td className="blockTourListMain__listItem--itemTitleImage"> {tour.titleImage} </td> */}

                <td className="blockTourListMain__table--itemActionEdit">
                     <Link to={`/toursList/edit/${tour.id}`}> 
                            <Fab size="small" color="primary" aria-label="edit" className="blocTourListMain__itemIcon--editIcon" >
                                <EditIcon />
                            </Fab>
                    </Link>
                </td>
                
                <td className="blockTourListMain__table--itemActionDelete"> 
                    <Fab size="small" color="primary" aria-label="delete" onClick={() => confirmDeleteTour(tour.id)} className="blockTourListMain__itemIcon--deleteIcon" >
                        <DeleteIcon />
                    </Fab>  
                </td>    
            </tr>
          
        </>      
   )
}
export default  Tour;