// import React, { useEffect, Component, useState } from "react"
// import { Link } from 'react-router-dom'
// import { Formik } from 'formik';
// import "./style/tourStyle.scss";
// import { AiOutlineUserAdd } from 'react-icons/ai';
// import { GoDiffAdded } from 'react-icons/go';
// import { useDispatch, useSelector } from "react-redux";
// import { getToursAction } from "../../../../actions/toursActions";
// import Tour from './Tour';
// // import { 
// //     Container, 
// //     Paper, Box, 
// //     Typography, TableContainer,
// //     Table, TableBody,
// //     TableHead, TableRow, TableCell } from "@material-ui/core";
// // import { makeStyles } from "@material-ui/core/styles"
// import './style/tourStyle.scss'

// const TestTable = () => { 
//     const dispatch = useDispatch();
//     const [users, setUsers] = useState()
//     useEffect(() => {
//         const getToursList = () => dispatch(getToursAction());
//         getToursList(); 
//     }, []);
    
//     const toursTravel = useSelector(state => state.toursList.toursList);
    
//     console.log("List tour:",toursTravel);
//     return (
//         <>
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
//      </>
//    );
// }
// export default  TestTable;