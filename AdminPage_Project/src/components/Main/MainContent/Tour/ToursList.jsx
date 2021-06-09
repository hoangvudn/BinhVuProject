import React, { useEffect, Component } from "react"
import { Link } from 'react-router-dom'
import { Formik } from 'formik';
import "./style/tourStyle.scss";
import "./style/responsive.scss";
import { AiOutlineUserAdd } from 'react-icons/ai';
import { GoDiffAdded } from 'react-icons/go';
import { useDispatch, useSelector } from "react-redux";
import { getToursAction } from "../../../../actions/toursActions";
import Tour from './Tour';
import SearchTour from './SearchTour';
import SelectTour from './SelectTour';
import SelectPlaceTour from './SelectPlaceTour';
import loadingIcon from '../../../../assets/loading2.gif'

const ToursList = () => { 
    const dispatch = useDispatch();

    useEffect(() => {
        const getToursList = () => dispatch(getToursAction());
        getToursList(); 
    }, []);
    

    const loading = useSelector(state => state.toursList.loading);
    const error = useSelector(state => state.toursList.error);
    const toursTravel = useSelector(state => state.toursList.toursList);
    
    console.log("List tour:",toursTravel);

    return (
        <React.Fragment>
             {error ? (
                <div className="font-weight-bold alert alert-primary text-center mt-4">
                  Loading...
                </div>
            ) : null}
            <>
                <div className="blockTourListMain">
                        <table className="blockTourListMain__table">
                            <thead>
                                <tr>
                                    <th className="blockTourListMain__table--imageUrl">Image</th>
                                    <th className="blockTourListMain__table--place">Place</th>
                                    <th className="blockTourListMain__table--tourName">Tour Name</th>
                                    <th className="blockTourListMain__table--dayAmount">Day Amount</th>
                                    {/* <th className="blockTourListMain__table--transports">Transport</th> */}
                                    <th className="blockTourListMain__table--price">Price</th>
                                    {/* <th className="blockTourListMain__table--startDay">Start Day</th> */}
                                    {/* <th className="blockTourListMain__table--descriptions">Descriptions</th>
                                    <th className="blockTourListMain__table--applyPassenger">Guest Amount</th>
                                    <th className="blockTourListMain__table--introduction">Introduction</th>
                                    <th className="blockTourListMain__table--imageIntroduction">Image Introduction</th>
                                    <th className="blockTourListMain__table--titleImage">Title Image</th> */}
                                    <th className="blockTourListMain__table--headActionIcon">Action</th>
                                    <th className="blockTourListMain__table--headActionIcon1"></th>
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
                        {/* <GoDiffAdded className="blockTourListMain__linkToAddTour"/>  */}
                        <span className="blockTourListMain__linkToAddTour">ADD TOUR</span>
                </Link>
                <SearchTour />
                <SelectTour />
                <SelectPlaceTour />
                 {loading ?  <img src={loadingIcon}/> : null}
            </>
        </React.Fragment> 
   );
}
export default  ToursList;