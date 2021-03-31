import React from 'react';
import { Formik } from 'formik';
import "./style/tourStyle.scss";
import { AiOutlineUserAdd } from 'react-icons/ai';
import Tour from '../Tour/Tour'
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
            <table className="blockTourListMain">
                <thead>
                    <tr>
                        <th className="blockTourListMain__imageUrl">Image URL</th>
                        <th className="blockTourListMain__place">Place</th>
                        <th className="blockTourListMain__tourName">Tour Name</th>
                        <th className="blockTourListMain__dayAmount">Day Amount</th>
                        <th className="blockTourListMain__transports">Transport</th>
                        <th className="blockTourListMain__price">Price</th>
                        <th className="blockTourListMain__startDay">Start Day</th>
                        <th className="blockTourListMain__applyPassenger">Apply</th>
                    </tr>  
                </thead>
                
                <tbody className="blockTourListMain__listItemGroup">  
                        {toursTravel.map(tour => (
                            <Tour key={tour.id} tour={tour} />
                        ))}
                </tbody>
            
                <Link to={"/toursList/new" } >  
                    <AiOutlineUserAdd className="blockTourListMain__linkToAddUser"/> 
                </Link>
            </table>
            {/* <SearchTour /> */}
     </>
   );
}
export default  ToursList;