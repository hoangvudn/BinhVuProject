import React from 'react';
import { Formik, Form, Field } from 'formik';
import { useState } from 'react'
import * as Yup from 'yup';
import { Link, useHistory } from "react-router-dom"
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
           <div>
            <h1>Anywhere in your app!</h1>
            <Formik
                    initialValues={{ email: '', password: '' }}
                    validate={values => {
                        const errors = {};
                        if (!values.email) {
                        errors.email = 'Required';
                        } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        ) {
                        errors.email = 'Invalid email address';
                        }
                        return errors;
                    }}
                    handleChange={values=> setUserName(values.email)}
                    onSubmit={(values) => { 
                        history.replace("/HomePage")
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
                <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                />
                {errors.email && touched.email && errors.email}
                <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                />
                {errors.password && touched.password && errors.password}
                <button type="submit" disabled={isSubmitting}>
                    Submit
                </button>
                </form>
            )}
            </Formik>
          </div>
       </>
   );
}
export default LogInForm;