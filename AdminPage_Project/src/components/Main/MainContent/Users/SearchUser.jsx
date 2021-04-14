import React, { useEffect, useRef, useState } from 'react';
import { Formik } from 'formik';

import { useDispatch, useSelector } from "react-redux";
import {
    searchUserAction
} from "../../../../actions/usersActions";

const SearchUser = () => {
    const dispatch = useDispatch();
    const [valueSearch, setValueSearch] = useState("");
    const valueSearchRef= useRef("");

    useEffect(() => {
        const getUsersListSearch = () => dispatch(searchUserAction(valueSearch));
        getUsersListSearch(); 
    }, [dispatch, valueSearch]);

    const handleSubmit1 = e => {
        e.preventDefault();
    }
  
    const users = useSelector(state => state.usersList.usersList);
    console.log("List Search :",users);
 
    return (    
        <>
           <div>
                 <form  onSubmit={handleSubmit1} className="blockSearchUser">
                             <div className="blockSearchUser__inputItem">
                               <input
                                    type="text"
                                    name="searchUser"
                                    ref={valueSearchRef}
                                    placeholder="Search..."
                                    onChange={e => setValueSearch(e.target.value)}
                                />
                           </div>  
                 </form>
            </div>
        </>

          
    //    <Formik initialValues={{ searchUser: ''}} 
    //            validate={values => {
    //                 const errors = {};
    //                 //check validate input user value
    //                 if(!values.searchUser) {
    //                     errors.searchUser = "Required";
    //                 } else if ( values.length < 5 ) {
    //                     errors.searchUser = "Must > 5 character"
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
    //                 <form onSubmit={handleSubmit} className="blockSearchUser">
    //                         <div className="blockSearchUser__inputItem">
    //                             <input
    //                                 type="text"
    //                                 name="searchUser"
    //                                 onChange={handleChange}
    //                                 onBlur={handleBlur}
    //                                 value={values.searchUser}
    //                             />
    //                        </div>  
    //                        <div className="blockSearchUser__buttonSave">
    //                             <button type="submit" disabled={isSubmitting}>
    //                                 SEARCH
    //                             </button>
    //                        </div>
    //                 </form>
    //             )}
    //    </Formik>;
    )
}
export default SearchUser;