import React, { useRef } from 'react';
import { Formik } from 'formik'

import  Swal  from "sweetalert2";
import { createNewUserAction } from "../../../../actions/usersActions";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Break } from 'devextreme-react/range-selector';
const NewUser = ({ history }) => {
    const [ userName, setUserName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ userExit, setUserExit ] = useState(false);
    //=====================VALIDATE================
    const [ errorUser, setErrorUser ] = useState("");
    const [ errorEmail, setErrorEmail ] = useState("");
    const [ errorPass, setErrorPass ] = useState("");
    //==============================================
    const userRef = useRef("");
    //Create new user
    const dispatch = useDispatch();
    const addUser = user => dispatch(createNewUserAction(user));
    
    const users = useSelector(state => state.usersList.usersList);
    console.log("USER PANDING: ", users);

    const checkUser = users.filter(item => {
           return item.userName == userName;
    });
    console.log("User Balaaa",checkUser);
    console.log("User Balaaa",checkUser.length);
    //==========================================
    const clearData = () => {
          setUserName("");
          setEmail("");
          setPassword("");
          setErrorUser("");
          setErrorEmail("");
          setErrorPass("");
          userRef.current.focus();
    }
    //==========================================
    const handleSubmit = e => {
      
        e.preventDefault();
        //==============================CHECK VALIDATION====================================
        if ( userName.trim() === "" && email.trim() === "" && password.trim() === "") {
            setErrorUser("Value not null");
            setErrorEmail("Value not null");
            setErrorPass("Value not null");
            return;
        }
        
        if ( userName.trim() === "") {
            setErrorUser("Value not null")
            return;
        }
        if ( userName.length < 4) {
            setErrorUser("User must > 4 character");
            return;
        } else {
            setErrorUser("");
        }
        if ( checkUser.length !== 0) {
            setErrorUser("User exists!");
            return;
        }
        if ( email.trim() === "") {
            setErrorEmail("Value not null")
            return;
        } else {
            setErrorEmail("");
        }
        if ( password.trim() === "") {
            setErrorPass("Value not null")
            return;
        }
        if ( password.length < 8) {
            setErrorPass("Password must > 8 character")
            return;
        }
       
    
        
        //==================================================================================        
        addUser({ userName, email, password });
        clearData();
        Swal.fire("Saved", "User Added", "OK");
        //If it success 
        // return home page
        //history.push(`/`);
    };

    return (
         <>
            <div className="blockNewUser">
                <div className="blockNewUser__headerTitle">
                        <h2>ADD USER</h2>
                </div>
                   
                <form onSubmit={handleSubmit} className="blockNewUser__groupForm">
                   <div className="blockNewUser__groupItem">
                       <div className="blockNewUser__groupTitle"> 
                            <label className="blockNewUser__label">User Name</label>
                            <span className="blockNewUser__error">{errorUser}</span>
                       </div>                     
                       <input 
                          className="blockNewUser__inputUserName"
                          type="text"
                          placeholder = "user name"
                          value={userName}
                          onChange={ e => setUserName(e.target.value)}
                          ref={userRef}
                       />
                   </div>

                   <div className="blockNewUser__groupItem">
                        <div className="blockNewUser__groupTitle">
                            <label className="blockNewUser__label"> Email </label>
                            <span className="blockNewUser__error">{errorEmail}</span>
                        </div>
                        <input 
                          className="blockNewUser__inputEmail"
                          type="email"
                          placeholder = "email"
                          value={email}
                          onChange={ e => setEmail(e.target.value)}
                        />
                   </div>

                   <div className="blockNewUser__groupItem">
                        <div className="blockNewUser__groupTitle">
                            <label className="blockNewUser__label"> PassWord </label>
                            <span className="blockNewUser__error">{errorPass}</span>
                        </div>
                            <input 
                          className="blockNewUser__inputPass"
                          type="password"
                          placeholder = "password"
                          value={password}
                          onChange={ e => setPassword(e.target.value)}
                          min="5" max="15"
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