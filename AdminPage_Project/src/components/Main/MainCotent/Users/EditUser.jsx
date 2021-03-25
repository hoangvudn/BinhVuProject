import React, { useEffect, useRef } from 'react';
import { Formik } from 'formik';
import Swal from "sweetalert2";

import { useDispatch, useSelector } from "react-redux";
import {
  editProducAction,
  updateProductAction
} from "../../../../actions/usersActions";

const EditUsersList = () => { 
   return (
        <Formik initialValues={{ user: '', pass: '', email:''}}
                validate={values => {
                const errors = {};
                //--------------------------VALIDATE PASS---------------------
                if (!values.user) {
                    errors.user = 'Required';  
                }
                //--------------------------VALIDATE PASS---------------------
                if (!values.pass) {
                    errors.pass = 'Required';   
                }
                //----------------------------VALIDATE EMAIL------------------
                if (!values.email) {
                    errors.email = 'Required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                }
                
                return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
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
         <form onSubmit={handleSubmit} className="blockEditUsersList">
           <div className="blockEditUsersList__inputItem">
                <input
                    type="text"
                    name="user"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.user}
                />
                {errors.user && touched.user && errors.user}
                <input
                    type="password"
                    name="pass"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.pass}
                />
                {errors.pass && touched.pass && errors.pass}
                <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                />
                {errors.email && touched.email && errors.email}
           </div>  
           <div className="blockEditUsersList__buttonSave">
                <button type="submit" disabled={isSubmitting}>
                    EDIT
                </button>
           </div>
         </form>
       )}

            {/* <div  className="blockEditUsersList">
              <div className="blockEditUsersList__inputItem">
                   <input type="text" placeholder="User"/>
                   <input type="text" placeholder="Pass"/>
                   <input type="email" placeholder="Email"/>
              </div>
              <div className="blockEditUsersList__buttonSave"> 
                  <button>  EDIT  </button>
              </div>
            </div> */}
        </Formik>
   )
}
export default  EditUsersList;