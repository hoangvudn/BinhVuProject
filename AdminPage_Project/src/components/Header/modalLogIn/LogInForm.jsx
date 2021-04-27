import React from 'react';
import { Formik, Form, Field } from 'formik';
import { useState } from 'react'
import * as Yup from 'yup';
import { Link, useHistory } from "react-router-dom"
import './style/logInStyle.scss'
import HomePage from '../../../components/Main/MainContent/HomePage/HomePage'




const SignupSchema = Yup.object().shape({
        userName: Yup.string()
        .min(3, ' UserName Too Short!')
        .max(50, 'UserName Too Long!')
        .required('Required'),
        password: Yup.string()
        .min(2, 'Password Too Short!')
        .max(50, 'Password Too Long!')
        .required('Required'),
        // email: Yup.string().email('Invalid email').required('Required'),
});


const LogInForm = () => {
   const [userName, setUserName ] = useState('');
   const [passWord, setPassWord ] = useState('');
   console.log("username",userName);
 
   const history = useHistory();
  /// console.log("UserName:", userName);
   return (
       <>
           <div className="blockLoginForm" >
                    <h1>LOG IN</h1>
                    <Formik
                            initialValues={{ user: '', password: '' }}
                            validate={values => {
                                const errors = {};
                                if (!values.user) {
                                errors.user = 'Required';
                                } else if ( values.user!=="admin" ) {
                                errors.user = 'User not exit';
                                }
                                if (!values.password) {
                                    errors.password = 'Required';
                                    } else if ( values.password!=="admin" ) {
                                    errors.password = 'Pass fail';
                                    }
                                return errors;
                            }}
                        
                            onSubmit={(values) => { 
                                history.push("/HomePage")
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
                        <form onSubmit={handleSubmit} className="blockLoginForm__inputItem">
                          <div>
                                <label>User</label>
                                <input className="blockLoginForm__inputUser"
                                    type="text"
                                    name="user"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.user}
                                />
                                
                          </div>

                          <div className="blockLoginForm__error">
                                {errors.user && touched.user && errors.user}
                          </div>
                    
                          <div>
                                <label>PassWord</label>
                                <input className="blockLoginForm__inputPassWord"
                                    type="password"
                                    name="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                />
                         </div>
                         <div className="blockLoginForm__errorPass">
                                {errors.password && touched.password && errors.password}
                         </div>  
                            <button type="submit" disabled={isSubmitting} className="blockLoginForm__buttonSave">
                                LOG IN
                            </button>
                        </form>
                    )}
                    </Formik>
          </div>
       </>
   );
}
export default LogInForm;