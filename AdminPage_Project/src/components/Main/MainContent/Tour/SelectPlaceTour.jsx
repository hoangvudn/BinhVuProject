import React, { useEffect, useRef, useState } from 'react';
import { Formik } from 'formik';

import { useDispatch, useSelector } from "react-redux";
import {
    selectPlaceAction
} from "../../../../actions/toursActions";

const SelectPlaceTour = () => {
    const dispatch = useDispatch();
    const [valueSearch, setValueSearch] = useState();
    useEffect(() => {
        const getToursListSelect = () => dispatch(selectPlaceAction(valueSearch));
        getToursListSelect(); 
    }, [dispatch, valueSearch]);

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
        
    ]
    
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
           <div className="blockTourListMain__selectDomestic">
                 <form>
                    <div>
                        <select value={valueSearch} onChange={handleChange} className="blockTourListMain__selectDomestic--selectItem"> 
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
export default SelectPlaceTour;