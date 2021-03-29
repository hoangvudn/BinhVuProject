import React from 'react';
import { Formik } from 'formik'
// import React, { useState } from 'react'

import { createNewUserAction } from "../../../../actions/usersActions";
import { useDispatch, useSelecttor } from "react-redux";
import { useState } from "react";
const NewUser = ({ history }) => {
    const [ userName, setUserName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");

    //Create new user
    const dispatch = useDispatch();
    const addUser = user => dispatch(createNewUserAction(user));

    const handleSubmit = e => {
        e.preventDefault();
        //validate
        if ( userName.trim() === "" || email.trim() === "" || password.trim() === "") {
            alert("Value not null ");
            return;
        }
        // If it success
        addUser({ userName, email, password });
        // return home page
        history.push(`/`);
    };

    return (
         <>
            <div className="blockNewUser">
                <div className="blockNewUser__headerTitle">
                        <h2>ADD USER</h2>
                </div>
                   
                <form onSubmit={handleSubmit}>
                   <div>
                       <label>User Name</label>
                       <input 
                          className="blockNewUser__inputUserName"
                          type="text"
                          placeholder = "user name"
                          value={userName}
                          onChange={ e => setUserName(e.target.value)}
                       />
                   </div>

                   <div>
                       <label> Email </label>
                       <input 
                          className="blockNewUser__inputEmail"
                          type="email"
                          placeholder = "email"
                          value={email}
                          onChange={ e => setEmail(e.target.value)}
                       />
                   </div>

                   <div>
                       <label> PassWord </label>
                       <input 
                          className="blockNewUser__inputPass"
                          type="password"
                          placeholder = "password"
                          value={password}
                          onChange={ e => setPassword(e.target.value)}
                       />
                   </div>

                   <button 
                      type="submit"
                      className="blockNewUser__buttonAddUser"
                   >
                      ADD USER
                   </button>
                </form>
              
            </div>
         </>
    );
};

export default NewUser;


// const [user, setUser] = useState({
       
// })
// const NewUser = () => { 
//    return (
//             <Formik initialValues={{ user: '', pass: '', email:''}}
//                 validate={values => {
//                 const errors = {};
//                 //--------------------------VALIDATE PASS---------------------
//                 if (!values.user) {
//                     errors.user = 'Required';
//                 }
//                 //--------------------------VALIDATE PASS---------------------
//                 if (!values.pass) {
//                     errors.pass = 'Required';
//                 }
//                 //----------------------------VALIDATE EMAIL------------------
//                 if (!values.email) {
//                     errors.email = 'Required';
//                 } else if (
//                     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
//                 ) {
//                     errors.email = 'Invalid email address';
//                 }
                
//                 return errors;
//                 }}
//                 onSubmit={(values, { setSubmitting }) => {
//                 setTimeout(() => {
//                     alert(JSON.stringify(values, null, 2));
//                     setSubmitting(false);
//                 }, 400);
//                 }} 
//             >
//                     {({
//                 values,
//                 errors,
//                 touched,
//                 handleChange,
//                 handleBlur,
//                 handleSubmit,
//                 isSubmitting,
//                 /* and other goodies */
//                 }) => (
//                 <form onSubmit={handleSubmit} className="blockEditUsersList">
//                 <div className="blockEditUsersList__inputItem">
//                     <input
//                         type="text"
//                         name="user"
//                         onChange={handleChange}
//                         onBlur={handleBlur}
//                         value={values.user}
//                     />
//                     {errors.user && touched.user && errors.user}
//                     <input
//                         type="password"
//                         name="pass"
//                         onChange={handleChange}
//                         onBlur={handleBlur}
//                         value={values.pass}
//                     />
//                     {errors.pass && touched.pass && errors.pass}
//                     <input
//                         type="email"
//                         name="email"
//                         onChange={handleChange}
//                         onBlur={handleBlur}
//                         value={values.email}
//                     />
//                     {errors.email && touched.email && errors.email}
//                 </div>  
//                 <div className="blockEditUsersList__buttonSave">
//                     <button type="submit" disabled={isSubmitting}>
//                         SAVE
//                     </button>
//                 </div>
//                 </form>
//                 )}

//                 {/* <div  className="blockEditUsersList">
//                 <div className="blockEditUsersList__inputItem">
//                     <input type="text" placeholder="User"/>
//                     <input type="text" placeholder="Pass"/>
//                     <input type="email" placeholder="Email"/>
//                 </div>
//                 <div className="blockEditUsersList__buttonSave"> 
//                     <button>  EDIT  </button>
//                 </div>
//                 </div> */}
//         </Formik>
//    )
// }
// export default  NewUser;