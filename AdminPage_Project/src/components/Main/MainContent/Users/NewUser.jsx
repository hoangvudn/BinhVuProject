import React, { useRef } from 'react';
import { Formik } from 'formik'

import  Swal  from "sweetalert2";
import { createNewUserAction } from "../../../../actions/usersActions";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Break, Width } from 'devextreme-react/range-selector';
const NewUser = ({ history }) => {
    const [ userName, setUserName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ confirmPass, setConfirmPass ] = useState("");
    const [ role1, setRole1 ] = useState(1);
    //=====================VALIDATE================
    const [ errorUser, setErrorUser ] = useState("");
    const [ errorEmail, setErrorEmail ] = useState("");
    const [ errorPass, setErrorPass ] = useState("");
    const [ errorConfirmPass, setErrorConfirmPass ] = useState("");
    //==============================================
    const userRef = useRef("");
    const emailRef = useRef("");
    const passRef = useRef("");
    const confirmPassRef = useRef("");
    //Create new user
    const dispatch = useDispatch();
    const addUser = user => dispatch(createNewUserAction(user));
    
    const users = useSelector(state => state.usersList.usersList);
    console.log("USER PANDING: ", users);
    //===============Set Role======================
    const handleChange = e => {
        e.preventDefault();
        setRole1(e.target.value);
    }
    const role = Number(role1);
    //================================================================

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
          setConfirmPass("");
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
            userRef.current.focus();
            return;
        }
        
        if ( userName.trim() === "") {
            setErrorUser("Value not null");
            userRef.current.focus();
            return;
        }
        if ( userName.length < 4) {
            setErrorUser("User must > 4 character");
            userRef.current.focus();
            return;
        } else {
            setErrorUser("");
        }
        if ( checkUser.length !== 0) {
            setErrorUser("User exists!");
            userRef.current.focus();
            return;
        }
        if ( email.trim() === "") {
            setErrorEmail("Value not null")
            emailRef.current.focus();
            return;
        } else {
            setErrorEmail("");
        }
        if ( password.trim() === "") {
            setErrorPass("Value not null")
            passRef.current.focus();
            return;
        } else {
            setErrorPass("");
        }
        if ( password.length < 8) {
            setErrorPass("Password must > 8 character")
            passRef.current.focus();
            return;
        }
        if ( password !== confirmPass ) {
            setErrorConfirmPass("Pass do not match");
            confirmPassRef.current.focus();
            return;
        } else {
            setErrorConfirmPass("");
        }
    
        
        //==================================================================================        
        addUser({ userName, email, password, role });
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
                          ref={emailRef}
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
                          ref={passRef}
                       />
                   </div>

                   
                   <div className="blockNewUser__groupItem">
                        <div className="blockNewUser__groupTitle">
                            <label className="blockNewUser__label"> Confirm PassWord </label>
                            <span className="blockNewUser__error">{errorConfirmPass}</span>
                        </div>
                        <input 
                          className="blockNewUser__inputPass"
                          type="password"
                          placeholder = "confirm password"
                          value={confirmPass}
                          onChange={ e => setConfirmPass(e.target.value)}
                          min="5" max="15"
                          ref={confirmPassRef}
                       />
                   </div>
                    
                   <div className="blockNewUser__groupItem">
                        <div className="blockNewUser__groupTitle">
                          <label className="blockNewUser__label">Role</label>
                        </div>
                        <select value={role1} onChange={handleChange} className="blockNewUser__selectTour"> 
                            <option value="0">Administrator</option>
                            <option value="1">User</option>
                        </select>
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
