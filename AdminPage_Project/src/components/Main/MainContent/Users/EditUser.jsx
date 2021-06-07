import React, { useEffect, useRef, useState } from "react";
import { Formik } from 'formik';
import Swal from "sweetalert2";

import { useDispatch, useSelector } from "react-redux";
import {
  editUserAction,
  updateUserAction
} from "../../../../actions/usersActions";

// //Declare match and history of react router, 
// {match to get id} and {history to redirect to homepage after edited successfully} 
const EditUser = ({ match, history }) => { 
     // Create userNameRef, emailRef
     const userNameRef = useRef("");
     const emailRef = useRef("");
     const passwordRef = useRef("");
    //=====================VALIDATE================
    const [ errorUser, setErrorUser ] = useState("");
    const [ errorEmail, setErrorEmail ] = useState("");
    const [ errorPass, setErrorPass ] = useState("");
    const [ role1, setRole1 ] = useState(1);
    //==============================================
     //Create alias to use function dispatch to excute action edit
     const dispatch = useDispatch();
     const userUpdated = user => dispatch(updateUserAction(user));

     //Get the ID of user will edit
     const { id } = match.params;

     useEffect(() => {
         dispatch(editUserAction(id));
     }, [dispatch, id]);

     // Access to global state
     const user = useSelector(state => state.usersList.user);
     console.log("user is:", user);
     
     //===============Set Role======================
    const handleChange = e => {
        e.preventDefault();
        setRole1(e.target.value);
    }
    const role = Number(role1);
    //================================================================
     const handleUpdateUser = e => {
         e.preventDefault();
      
        if ( emailRef.current.value.trim() === "") {
            setErrorEmail("Value not null")
            return;
        } else {
            setErrorEmail("");
        }
        if ( passwordRef.current.value.trim() === "") {
            setErrorPass("Value not null")
            return;
        }
        if ( passwordRef.current.value.length < 8) {
            setErrorPass("Password must > 8 character")
            return;
        }
         userUpdated({
             id,
             userName: userNameRef.current.value,
             email: emailRef.current.value,
             password: passwordRef.current.value,
             role: role
         });
         Swal.fire("Saved", "User updated", "ok");
         //Return to Homepage
         history.push(`/usersList`);
     };

   return (
      
      <>
        <div class="blockEditUser">
            <h3 className="blockEditUser__title"> EDIT USER</h3>
            <form onSubmit={handleUpdateUser} className="blockEditUser__groupForm">
              <div className="blockEditUser__groupItem">
                  <div className="blockEditUser__groupTitle"> 
                    <label className="blockEditUser__label">User Name</label>
                    <span className="blockEditUser__error">{errorUser}</span>
                  </div>    
                  <input  className="blockEditUser__inputUserName"
                      disabled
                      type="text"
                      defaultValue={user.userName}
                      ref={userNameRef}
                  />
              </div>

              <div className="blockEditUser__groupItem">
                  <div className="blockEditUser__groupTitle"> 
                     <label className="blockEditUser__label">Email</label>
                     <span className="blockEditUser__error">{errorEmail}</span>
                  </div>
                  <input className="blockEditUser__inputEmail"
                      type="email"
                      defaultValue={user.email}
                      ref={emailRef}
                  />
              </div>

              <div className="blockEditUser__groupItem">
                  <div className="blockEditUser__groupTitle">  
                     <label className="blockEditUser__label">Password</label>
                     <span className="blockEditUser__error">{errorPass}</span>
                  </div>
                  <input className="blockEditUser__inputPass"
                      type="password"
                      defaultValue={user.password}
                      ref={passwordRef}
                  />
              </div>

              <div className="blockEditUser__groupItem">
                    <div className="blockEditUser__groupTitle">
                        <label className="blockEditUser__label">Role</label>
                    </div>
                    <select value={role1} onChange={handleChange} className="blockEditUser__selectTour"> 
                        <option value="0">Administrator</option>
                        <option value="1">User</option>
                    </select>
              </div>


              <button type="submit" className="blockEditUser__buttonSave">
                    SAVE
              </button>
              
            </form>
        </div>
      </>
   );
}
export default  EditUser;