import React from 'react';
import { Formik, Form, Field } from 'formik';
import { useState } from 'react'
import * as Yup from 'yup';
//import HomePage from '../../../components/Main/MainContent/HomePage/HomePage'


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


const LogInForm = ({ history }) => {
   const [userName, setUserName ] = useState('');
   const [passWord, setPassWord ] = useState('');
   return (
       <>
           <div>
                <Formik
                    initialValues={{
                        userName: '',
                        password: '',
                    }}
                    validationSchema={SignupSchema}
                    onSubmit={values => {
                        // same shape as initial values
                        console.log(values);
                      
                        //<HomePage />
                        alert("Welcome to MuongThanh:");
                        history.push(`/HomePage`);
                        
                    }}
                >
                    {({ errors, touched }) => (
                        <Form >
                            <Field name="userName" onChange={(e) => setUserName(e.tar)} />
                            {errors.userName && touched.userName ? (
                                <div>{errors.userName}</div>
                            ) : null}
                            <Field name="password" />
                            {errors.password && touched.password ? (
                                <div>{errors.password}</div>
                            ) : null}
                            {/* <Field name="email" type="email" />
                            {errors.email && touched.email ? <div>{errors.email}</div> : null} */}
                            <button type="submit">Submit</button>
                        </Form>
                    )}
                </Formik>
           </div>
       </>
   );
}
export default LogInForm;