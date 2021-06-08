import React, { useEffect, useRef, useState } from 'react';
import { Formik } from 'formik';

import { useDispatch, useSelector } from "react-redux";
import {
    searchHistoryAction
} from "../../../../actions/historyTour";

const SearchHistoryTour = ({arrday}) => {
    const dispatch = useDispatch();
    const [valueSearch, setValueSearch] = useState("");
    const valueSearchRef = useRef("");

    useEffect(() => {
        const getHistoryTourSearch = () => dispatch( searchHistoryAction(valueSearch));
        getHistoryTourSearch(); 
    }, [dispatch, valueSearch]);
    
    const historyBookTour = useSelector(state => state.historyToursList.historyToursList);
    console.log("List Search HISTORY :", historyBookTour);
    const max =  Math.max(...arrday);
    console.log("MAX NUMBER:",  Math.max(...arrday));
    return (    
        <>
           <div className="blockHistoryListMain__searchItem">   
                 {/* <form  onSubmit={handleSubmit} > */}
                 <form>
                        <div className="blockHistoryListMain__searchItem--inputItem">
                            <input
                                    type="text"
                                    name="searchTour"
                                    ref={valueSearchRef}
                                    placeholder="Search..."
                                    onChange={e => setValueSearch(e.target.value)}
                            />
                            <span> MAX MI tOM: {max}</span>
                        </div>  
                 </form>
            </div>
        </>
    )
}
export default SearchHistoryTour;