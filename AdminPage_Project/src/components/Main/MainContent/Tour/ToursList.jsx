import React, { useEffect, Component } from "react"
import { Link } from 'react-router-dom'
import { Formik } from 'formik';
import "./style/tourStyle.scss";
import { AiOutlineUserAdd } from 'react-icons/ai';
import { GoDiffAdded } from 'react-icons/go';
import { useDispatch, useSelector } from "react-redux";
import { getToursAction } from "../../../../actions/toursActions";
import Tour from './Tour';
import SearchTour from './SearchTour';
import './style/tourStyle.scss'
const ToursList = () => { 
    const dispatch = useDispatch();

    useEffect(() => {
        const getToursList = () => dispatch(getToursAction());
        getToursList(); 
    }, []);
    

  
    const toursTravel = useSelector(state => state.toursList.toursList);
    
    console.log("List tour:",toursTravel);
    return (
        <>
         
          <div className="blockTourListMain">
          {/* <div className="blockTourListMain__headerFixed">
                <span className="blockTourListMain__headerFixed__imageUrl">Image URL</span>
                <span className="blockTourListMain__headerFixed__place">Place</span>
                <span className="blockTourListMain__headerFixed__tourName">Tour Name</span>
                <span className="blockTourListMain__headerFixed__dayAmount">Day Amount</span>
                <span className="blockTourListMain__headerFixed__transports">Transports</span>
                <span className="blockTourListMain__headerFixed__price">Price</span>
                <span className="blockTourListMain__headerFixed__startDay">Start Day</span>
                <span className="blockTourListMain__headerFixed__descriptions">Descriptions</span>
                <span className="blockTourListMain__headerFixed__applyPassenger">Apply</span>
                <span className="blockTourListMain__headerFixed__introduction">introduction</span>
                <span className="blockTourListMain__headerFixed__imageIntroduction">Image Introduction</span>
                <span className="blockTourListMain__headerFixed__titleImage">Title Image</span>
          </div> */}
                <table className="blockTourListMain__table">
                    <thead>
                        <tr className="blockTourListMain__fixed">
                            <th className="blockTourListMain__fixed__imageUrl">Image URL</th>
                            <th className="blockTourListMain__fixed__place">Place</th>
                            <th className="blockTourListMain__fixed__tourName">Tour Name</th>
                            <th className="blockTourListMain__fixed__dayAmount">Day Amount</th>
                            <th className="blockTourListMain__fixed__transports">Transport</th>
                            <th className="blockTourListMain__fixed__price">Price</th>
                            <th className="blockTourListMain__fixed__startDay">Start Day</th>
                            <th className="blockTourListMain__fixed__descriptions">Descriptions</th>
                            <th className="blockTourListMain__fixed__applyPassenger">Apply</th>
                            <th className="blockTourListMain__fixed__introduction">Introduction</th>
                            <th className="blockTourListMain__fixed__imageIntroduction">Image Introduction</th>
                            <th className="blockTourListMain__fixed__titleImage">Title Image</th>
                        </tr>  
                    </thead>
                    
                    <tbody className="blockTourListMain__listItemGroup">  
                            {toursTravel.map(tour => (
                                <Tour key={tour.id} tour={tour} />
                            ))}
                    </tbody>
                
                </table>
               
          </div>
          
          <Link to={"/toursList/new" } >  
                <GoDiffAdded className="blockTourListMain__linkToAddTour"/> 
          </Link>
          <SearchTour />
     </>
   );
}
export default  ToursList;