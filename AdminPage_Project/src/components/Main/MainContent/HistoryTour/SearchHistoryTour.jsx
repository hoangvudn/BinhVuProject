import React, { useEffect, useRef, useState } from 'react';
import { Formik } from 'formik';

import { useDispatch, useSelector } from "react-redux";
import {
    searchHistoryAction
} from "../../../../actions/historyTour";

const SearchHistoryTour = () => {
    const dispatch = useDispatch();
    const [valueSearch, setValueSearch] = useState("");
    const valueSearchRef = useRef("");

    useEffect(() => {
        const getHistoryTourSearch = () => dispatch( searchHistoryAction(valueSearch));
        getHistoryTourSearch(); 
    }, [dispatch, valueSearch]);
    
    const historyBookTour = useSelector(state => state.historyToursList.historyToursList);
    console.log("List Search HISTORY :", historyBookTour);
    
    // let max =  Math.max(...arrPrice);
    // console.log("MAX NUMBER:", ( Math.max(...arrPrice)));
    
    // const sum = arrPrice.reduce((a, b) => {
    //     return  a + b;
    // });

    // const sumGuest = arrAmount.reduce((a,b) => {
    //     return a + b;
    // });
      

    //let total = arrday.reduce((total1, currentValue) => total1 = total1 + currentValue.prix,0));
    // console.log("TOtal mi tom: ", sum );
    // console.log("TOtal mi tom: ", sumGuest );
    //console.log("TOtal Money: ", totalMoney );
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
                        </div>  
                 </form>
            </div>
        </>
    )
}
export default SearchHistoryTour;