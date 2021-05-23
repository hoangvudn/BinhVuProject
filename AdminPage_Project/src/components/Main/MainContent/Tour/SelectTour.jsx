import React, { useEffect, useRef, useState } from 'react';
import { Formik } from 'formik';

import { useDispatch, useSelector } from "react-redux";
import {
    selectTourAction
} from "../../../../actions/toursActions";

const SelectTour = () => {
    const dispatch = useDispatch();
    const [valueSearch, setValueSearch] = useState("");
    //const valueSearchRef = useRef("");

    useEffect(() => {
        const getToursListSelect = () => dispatch(selectTourAction(valueSearch));
        getToursListSelect(); 
    }, [dispatch, valueSearch]);
    
    //===============Set Status Country======================
    const handleChange = e => {
        e.preventDefault();
        setValueSearch(e.target.value);
    }
    console.log("Value Country:", valueSearch)
    //=======================================================

    const toursTravel = useSelector(state => state.toursList.toursList);
    console.log("List Search :", toursTravel);
    
    return (
        
        <>
           <div className="blockTourListMain__selectTour">
                 <form>
                            <div>
                                {/* <label>Select Tour</label> */}
                                <select value={valueSearch} onChange={handleChange} className="blockTourListMain__selectTour--selectItem"> 
                                    <option value="1">Domestic</option>
                                    <option value="2">International</option>
                                </select>        
                            </div>
                           {/* <div className="blockSearchTour__buttonSave">
                                <button type="submit" onClick="">
                                    SEARCH
                                </button>
                           </div> */}
                 </form>
            </div>
        </>
    )
}
export default SelectTour;