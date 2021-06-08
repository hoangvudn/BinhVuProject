import React,{ useEffect, useState} from 'react';
import { Formik } from 'formik';
//import "./style/historyStyle.scss";
import { Link } from 'react-router-dom';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import Swal from "sweetalert2";


import { useDispatch } from "react-redux";
import { deleteHistoryAction } from "../../../../actions/historyTour"
import moment from 'moment';
import Numeral from 'numeral'

import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import './style/historyStyle.scss'
// import React, { useState } from 'react'

// const [history, setUser] = useState({
       
// })
const History = ({ history }) => { 
    const dispatch = useDispatch();
    
    
    const confirmDeleteHistory = id => {
        Swal.fire({
            title: "WARNING!",
            text: "Do you want delete this History Booked History : ",
            // text: "Do you want delete User : " + `${history.historyName}` ,
            type:"warning",
            showCancelButton: true,
            confirmButtonText: " YES "
        }).then(result => {
            if (result.value) {
                Swal.fire("Deleted History", " History has been deleted ", "ok");
                dispatch(deleteHistoryAction(id));
            }
        });
    };
    const dateStart = moment(history.selectDay).format("DD-MM-YYYY");
    //const start = moment(dateStart).format("DD-MM-YYYY");
    //================Convert Number=================
   
    const priceType =  Numeral(history.price);
    const priceValue = priceType.value();
    const guestAmount = Numeral(history.countUsers);
    const guestValue = guestAmount.value();
    const total1 = parseInt(priceValue) * parseInt(guestValue);
    const total2 = Numeral(total1);
    const total = total2.format();

    //================================================
   // console.log("Price Type: ", priceType.format());
    const priceTypeEdit = priceType.format();
    console.log("Ngay:", dateStart);
    console.log("User Information: ", history.infoUser)
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
            {/* <Link to={`/historyToursList/detail/${history.id}`}>  */}
              <tr className="blockHistoryListMain__listItem" >
                <td className="blockHistoryListMain__listItem--itemUserName"> 
                    <Link to={`/historyToursList/detail/${history.id}`} className="blockHistoryListMain__listItem--linkDetail"> 
                        {history.userName}
                    </Link> 
                </td>
                <td className="blockHistoryListMain__listItem--itemPlace"> {history.place}  </td>
                {/* <td className="blockHistoryListMain__listItem--itemName">  {history.name}   </td> */}
                <td className="blockHistoryListMain__listItem--itemStartDay"> {dateStart}  </td>
                <td className="blockHistoryListMain__listItem--itemPrice"> {priceTypeEdit} </td>   
                <td className="blockHistoryListMain__listItem--itemApplyPassenger"> {history.countUsers} </td>
                <td className="blockHistoryListMain__listItem--itemMoneyTotal"> {total} </td>
                <td className="blockHistoryListMain__listItem--itemUserInfo"> {history.infoUser.email} </td>
                {/* <td className="blockHistoryListMain__listItem--itemIntroduction">
                     {history?.infoUser.map(list => {
                         <div> 
                            <span> {list.email} </span>
                            <span> {list.name} </span>
                            <span> {list.phone} </span>
                         </div>
                     })} 
                </td> */}
                {/* <td className="blockHistoryListMain__listItem--itemImageIntroduction"> <img src= {history.imageIntroduction} alt="image introduction"/> </td> */}
                {/* <td className="blockHistoryListMain__listItem--itemTitleImage"> {history.infoUser} </td> */}

               
                
                {/* <td className="blockHistoryListMain__table--itemActionDelete"> 
                    <Fab size="small" color="primary" aria-label="delete" onClick={() => confirmDeleteHistory(history.id)} className="blockHistoryListMain__itemIcon--deleteIcon" >
                        <DeleteIcon />
                    </Fab>  
                </td>     */}
            </tr>
          {/* </Link>  */}
        </>      
   )
}
export default  History;