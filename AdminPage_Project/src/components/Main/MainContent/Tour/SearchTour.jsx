import React, { useEffect, useRef, useState } from 'react';
import { Formik } from 'formik';

import { useDispatch, useSelector } from "react-redux";
import {
    searchTourAction
} from "../../../../actions/toursActions";

const SearchTour = () => {
    const dispatch = useDispatch();
    const [valueSearch, setValueSearch] = useState("");
    const valueSearchRef = useRef("");

    useEffect(() => {
        const getToursListSearch = () => dispatch(searchTourAction(valueSearch));
        getToursListSearch(); 
    }, [dispatch, valueSearch]);

    // const handleSubmit = e => {
    //     e.preventDefault();
    // }
  
    const toursTravel = useSelector(state => state.toursList.toursList);
    console.log("List Search :", toursTravel);
    
    return (
        
        <>
           <div className="blockTourListMain__searchItem">
                 {/* <form  onSubmit={handleSubmit} > */}
                 <form>
                             <div className="blockTourListMain__searchItem--inputItem">
                               <input
                                    type="text"
                                    name="searchTour"
                                    ref={valueSearchRef}
                                    placeholder="Search..."
                                    // onChange={handleChange}
                                    // onBlur={handleBlur}
                                    // value={values.searchTour}
                                    onChange={e => setValueSearch(e.target.value)}
                                />
                            </div>  
                           {/* <div className="blockSearchTour__buttonSave">
                                <button type="submit" onClick="">
                                    SEARCH
                                </button>
                           </div> */}
                 </form>
            </div>
        </>

          
    //    <Formik initialValues={{ searchTour: ''}} 
    //            validate={values => {
    //                 const errors = {};
    //                 //check validate input user value
    //                 if(!values.searchTour) {
    //                     errors.searchTour = "Required";
    //                 } else if ( values.length < 5 ) {
    //                     errors.searchTour = "Must > 5 character"
    //                 }
    //                 return errors;
    //            }}
    //    >
    //            {({
    //                 values,
    //                 errors,
    //                 touched,
    //                 handleChange,
    //                 handleBlur,
    //                 handleSubmit,
    //                 isSubmitting,
    //                 /* and other goodies */
    //              }) => (
    //                 <form onSubmit={handleSubmit} className="blockSearchTour">
    //                         <div className="blockSearchTour__inputItem">
    //                             <input
    //                                 type="text"
    //                                 name="searchTour"
    //                                 onChange={handleChange}
    //                                 onBlur={handleBlur}
    //                                 value={values.searchTour}
    //                             />
    //                        </div>  
    //                        <div className="blockSearchTour__buttonSave">
    //                             <button type="submit" disabled={isSubmitting}>
    //                                 SEARCH
    //                             </button>
    //                        </div>
    //                 </form>
    //             )}
    //    </Formik>;
    )
}
export default SearchTour;