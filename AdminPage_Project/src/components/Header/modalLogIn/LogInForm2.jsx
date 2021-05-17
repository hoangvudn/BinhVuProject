import React, { useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import { useState } from 'react'
import * as Yup from 'yup';
import { Link, useHistory } from "react-router-dom"
import './style/logInStyle.scss'
import HomePage from '../../Main/MainContent/HomePage/HomePage'
import { useDispatch, useSelector } from "react-redux";
import { getUsersAction } from "../../../actions/usersActions";
import _ from 'lodash';



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


const LogInForm = (props) => {
   const [userName, setUserName ] = useState('');
   const [passWord, setPassWord ] = useState('');
   console.log("username",userName);
   
   //===========================GET and Check User Exit to Sign In==========
   const dispatch = useDispatch();

   useEffect(() => {
        const getUsersList = () => dispatch(getUsersAction());
        getUsersList(); 
   }, []);
    
   const users = useSelector(state => state.usersList.usersList);
   console.log("User to Login :",users);

   const checkUser = users.filter(item => {
         return item.userName == userName;
   });
//============================================================================
   const history = useHistory();
   return (
       <>
           <div className="blockLoginForm" >
                    <h1 className="blockLoginForm__title">LOG IN</h1>
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
                        
                            onSubmit= {props.logIn}
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
                          <div className="blockLoginForm__inputItemUser">
                                {/* <label>User</label> */}
                                <input className="blockLoginForm__inputUser"
                                    type="text"
                                    name="user"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.user}
                                    placeholder="UserName"
                                />
                                <div className="blockLoginForm__error">
                                    {errors.user && touched.user && errors.user}
                                </div>
                          </div>

                         
                    
                          <div className="blockLoginForm__inputItemPass">
                                {/* <label>PassWord</label> */}
                                <input className="blockLoginForm__inputPassWord"
                                    type="password"
                                    name="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                    placeholder="PassWord"
                                />
                                   <div className="blockLoginForm__errorPass">
                                {errors.password && touched.password && errors.password}
                         </div> 

                         </div>
                            <button type="submit" disabled={isSubmitting} onSubmit={handleSubmit} className="blockLoginForm__buttonSave">
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