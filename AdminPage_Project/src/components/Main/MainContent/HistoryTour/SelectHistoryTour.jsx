import React, { useEffect, useRef, useState } from 'react';
import { Formik } from 'formik';

import { useDispatch, useSelector } from "react-redux";
import {
    selectHistoryAction
} from "../../../../actions/historyTour";

const SelectHistoryTour = () => {
    const dispatch = useDispatch();
    const [valueSearch, setValueSearch] = useState(0);
   

    useEffect(() => {
        const getHistoryTourSelect = () => dispatch(selectHistoryAction(valueSearch));
        getHistoryTourSelect(); 
    }, [dispatch, valueSearch]);
     

    const historyBookTour = useSelector(state => state.historyToursList.historyToursList);
    console.log("List Search PLACE :", historyBookTour);
    const optionsDomestic = [
        {
            label : "Đà Nẵng",
            value : "Đà Nẵng",
        },
        {
            label : "Yên Bái",
            value : "Yên Bái",
        },
        {
            label : "Cần Thơ",
            value : "Cần Thơ",
        },
        {
            label : "Hà Giang",
            value : "Hà Giang",
        },
        {
            label : "Quảng Bình",
            value : "Quảng Bình",
        },
        {
            label : "Hạ Long",
            value : "Hạ Long",
        },
        {
            label : "Hà Nội",
            value : "Hà Nội",
        },
        {
            label : "TP HCM",
            value : "TP HCM",
        },
        {
            label : "New York",
            value : "New York",
        },
        {
            label : "Canada",
            value : "Canada",
        },
        {
            label : "Los Angeles",
            value : "Los Angeles",
        },
        {
            label : "Korea",
            value : "Korea",
        },
        {
            label : "Japan",
            value : "Japan",
        },
        
    ]
    
   
    
    //===============Set Status Country======================
    const handleChange = e => {
        e.preventDefault();
        setValueSearch(e.target.value);
    }
    console.log("Value Country:", valueSearch)
    //=======================================================

   
    return (
        
        <>
           <div className="blockHistoryListMain__selectDomestic">
                 <form>
                    <div>
                        <select value={valueSearch} onChange={handleChange} className="blockHistoryListMain__selectDomestic--selectItem"> 
                                <option value="0" disableds style={{color: "gray"}}>Select Place</option>
                                {optionsDomestic.map((option) => (
                                    <option value={option.value}>{option.label}</option>
                                ))}
                        </select>        
                    </div>
                 </form>
            </div>
        </>
    )
}
export default SelectHistoryTour;