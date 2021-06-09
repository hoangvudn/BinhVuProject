import React, { useEffect, useRef, useState } from 'react';
import { Formik } from 'formik';
import loadingIcon from '../../../../assets/loading2.gif'
import { useDispatch, useSelector } from "react-redux";
import {
    selectTourAction
} from "../../../../actions/toursActions";
const SelectTour = () => {
    const dispatch = useDispatch();
    const [valueSearch, setValueSearch] = useState(0);
    useEffect(() => {
        const getToursListSelect = () => dispatch(selectTourAction(valueSearch));
        getToursListSelect(); 
    }, [dispatch, valueSearch]);
    const options = [
        {
            label : "Domestic",
            value : 1,
        },
        {
            label : "International",
            value : 2,
        }
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
        <React.Fragment>
        <>
           <div className="blockTourListMain__selectTour">
                 <form>
                            <div>
                                {/* <label>Select Tour</label> */}
                                <select  value={valueSearch} onChange={handleChange} className="blockTourListMain__selectTour--selectItem"> 
                                    {/* //<option onClick={handleClick}>All</option> */}
                                    {/* <option value="1">Domestic</option>
                                    <option value="2">International</option> */}
                                    <option value="0" disableds style={{color: "gray"}}>Select Tour</option>
                                    {options.map((option) => (
                                        <option value={option.value}>{option.label}</option>
                                    ))}
                                </select>        
                            </div>                      
                 </form>
            </div>
        </>
        </React.Fragment> 
    )
}
export default SelectTour;