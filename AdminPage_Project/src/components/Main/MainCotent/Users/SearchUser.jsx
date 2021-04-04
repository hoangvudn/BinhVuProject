import React from 'react';
import { Formik } from 'formik';

const SearchUser = () => {
    return (
       <Formik initialValues={{ searchUser: ''}} 
               validate={values => {
                    const errors = {};
                    //check validate input user value
                    if(!values.searchUser) {
                        errors.searchUser = "Required";
                    }
                    return errors;
               }}
       >
               {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                 }) => (
                    <form onSubmit={handleSubmit} className="blockSearchUser">
                            <div className="blockSearchUser__inputItem">
                                <input
                                    type="text"
                                    name="searchUser"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.searchUser}
                                />
                           </div>  
                           <div className="blockSearchUser__buttonSave">
                                <button type="submit" disabled={isSubmitting}>
                                    SEARCH
                                </button>
                           </div>
                    </form>
                )}
       </Formik>
    )
}
export default SearchUser;