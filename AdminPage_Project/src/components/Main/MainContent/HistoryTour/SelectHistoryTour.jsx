import React, { useEffect, useRef, useState } from 'react';
import { Formik } from 'formik';

import { useDispatch, useSelector } from "react-redux";
import {
    selectHistoryAction
} from "../../../../actions/historyTour";

const SelectTour = () => {
    const dispatch = useDispatch();
    const [valueSearch, setValueSearch] = useState("");

    useEffect(() => {
        const getHistoryTourSelect = () => dispatch(selectHistoryAction(valueSearch));
        getHistoryTourSelect; 
    }, [dispatch, valueSearch]);
    
    //===============Set Status Country======================
    const handleChange = e => {
        e.preventDefault();
        setValueSearch(e.target.value);
    }
    console.log("Value Country:", valueSearch)
    //=======================================================

    const historyBookTour = useSelector(state => state.historyToursList.historyToursList);
    console.log("List Search :", historyBookTour);
    return (
        
        <>
           <div className="blockHistoryListMain__selectTour">
                 <form>
                            <div>
                                {/* <label>Select Tour</label> */}
                                <select value={valueSearch} onChange={handleChange} className="blockHistoryListMain__selectTour--selectItem"> 
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