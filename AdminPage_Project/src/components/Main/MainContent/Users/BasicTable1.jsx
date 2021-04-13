import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DatePicker from "react-datepicker";
import { Link } from 'react-router-dom';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { deleteUserAction } from "../../../../actions/usersActions"


// const useStyles = makeStyles({
//   table: {
//     minWidth: 650,
//   },
// });



const BasicTable1 = () => {
  
  const [startDate, setStartDate] = useState(new Date());
  return (
        <DatePicker
              selected={startDate}
              onChange={date => setStartDate(date)}
              isClearable
              placeholderText="I have been cleared!"
        />
  );

}

export default BasicTable1;

//   function createData(userName, password) {
//           return { userName, password };
//   }

// const rows = [
//   createData(user.userName, user.password),
//   // createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   // createData('Eclair', 262, 16.0, 24, 6.0),
//   // createData('Cupcake', 305, 3.7, 67, 4.3),
//   // createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];








// import React, { useEffect, Component, useState } from "react"
// import { Link } from 'react-router-dom'
// import { Formik } from 'formik';
// import "./style/tourStyle.scss";
// import { AiOutlineUserAdd } from 'react-icons/ai';
// import { GoDiffAdded } from 'react-icons/go';
// import { useDispatch, useSelector } from "react-redux";
// import { getToursAction } from "../../../../actions/toursActions";
// import Tour from './Tour';
// import { 
//     Container, 
//     Paper, Box, 
//     Typography, TableContainer,
//     Table, TableBody,
//     TableHead, TableRow, TableCell } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles"
// import MaterialTable from 'material-table'
// import './style/tourStyle.scss'

// const TestTable = () => { 
//     const data=[
//         {name:"hoangvu" , age: 32},
//         {name:"thiennhan" , age: 45},
//         {name:"comodo" , age: 52},
//         {name:"tankan" , age: 15},
//         {name:"serif" , age: 63},
//         {name:"sakura" , age: 51}
//     ]
//     console.log("do dai mang:", data.length)
//     const columns=[
//         {
//             title:'Name', field:'name'
//         },
//         {
//             title:'Age', field:'age'
//         }
//     ]
  
//     let countData = data.length;
//     //=======================================================================
//     return (
//            <div>
//                  <MaterialTable title="Material Table" 
//                     data={data}
//                     columns={columns}
//                  />
//            </div>

//     )
//     // const dispatch = useDispatch();
//     // const [users, setUsers] = useState()
//     // useEffect(() => {
//     //     const getToursList = () => dispatch(getToursAction());
//     //     getToursList(); 
//     // }, []);
    
//     // const toursTravel = useSelector(state => state.toursList.toursList);
    
//     // console.log("List tour:",toursTravel);
//     // return (
//         // <>
//           {/* <Container className={classes.root}>
//               <TableContainer>
//                   <Table>
//                       <TableHead>
//                           <TableRow>
//                               <TableCell> Name </TableCell>
//                           </TableRow>
//                       </TableHead>
//                   </Table>
//               </TableContainer>
//           </Container> */}
//           {/* <div className="blockTourListMain">
//                 <table className="blockTourListMain__table">
//                     <thead>
//                         <tr className="blockTourListMain__fixed">
//                             <th className="blockTourListMain__imageUrl">Image URL</th>
//                             <th className="blockTourListMain__place">Place</th>
//                             <th className="blockTourListMain__tourName">Tour Name</th>
//                             <th className="blockTourListMain__dayAmount">Day Amount</th>
//                             <th className="blockTourListMain__transports">Transport</th>
//                             <th className="blockTourListMain__price">Price</th>
//                             <th className="blockTourListMain__startDay">Start Day</th>
//                             <th className="blockTourListMain__applyPassenger">Apply</th>
//                         </tr>  
//                     </thead>
                    
//                     <tbody className="blockTourListMain__listItemGroup">  
//                             {toursTravel.map(tour => (
//                                 <Tour key={tour.id} tour={tour} />
//                             ))}
//                     </tbody>
                
                   
//                 </table>
               
//           </div>
//           <Link to={"/toursList/new" } >  
//                 <GoDiffAdded className="blockTourListMain__linkToAddTour"/> 
//           </Link>
//             <SearchTour /> */}
//     //  </>
// //    );
// }
// export default  TestTable;