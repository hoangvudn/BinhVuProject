import React, { useEffect, useRef } from "react";
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
     const handleUpdateUser = e => {
         e.preventDefault();
         if (
             userNameRef.current.value.trim() === "" ||
             emailRef.current.value.trim() === ""
         ) {
            alert("Value not null")
            return;
         }
         userUpdated({
             id,
             userName: userNameRef.current.value,
             email: emailRef.current.value
         });
         Swal.fire("Saved", "User updated", "ok");
         //Return to Homepage
         history.push(`/`);
     };

   return (
      
      <>
        <div class="blockEditUser">
            <h3 className="blockEditUser__title"> EDIT USER</h3>
            <form onSubmit={handleUpdateUser} className="blockEditUser__formEdit">
              <div className="blockEditUser__inputItem">
                  <label>User Name</label>
                  <input  className="blockEditUser__inputUserName"
                      type="text"
                      defaultValue={user.userName}
                      ref={userNameRef}
                  />
              </div>

              <div className="blockEditUser__inputItem">
                  <label className="blockEditUser__labelEmail">Email</label>
                  <input className="blockEditUser__inputEmail"
                      type="email"
                      defaultValue={user.email}
                      ref={emailRef}
                  />
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
    //     <Formik initialValues={{ user: '', pass: '', email:''}}
    //             validate={values => {
    //             const errors = {};
    //             //--------------------------VALIDATE PASS---------------------
    //             if (!values.user) {
    //                 errors.user = 'Required';  
    //             }
    //             //--------------------------VALIDATE PASS---------------------
    //             if (!values.pass) {
    //                 errors.pass = 'Required';   
    //             }
    //             //----------------------------VALIDATE EMAIL------------------
    //             if (!values.email) {
    //                 errors.email = 'Required';
    //             } else if (
    //                 !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    //             ) {
    //                 errors.email = 'Invalid email address';
    //             }
                
    //             return errors;
    //             }}
    //             onSubmit={(values, { setSubmitting }) => {
    //             setTimeout(() => {
    //                 alert(JSON.stringify(values, null, 2));
    //                 setSubmitting(false);
    //             }, 400);
    //             }} 
    //     >
    //              {({
    //      values,
    //      errors,
    //      touched,
    //      handleChange,
    //      handleBlur,
    //      handleSubmit,
    //      isSubmitting,
    //      /* and other goodies */
    //    }) => (
    //      <form onSubmit={handleSubmit} className="blockEditUsersList">
    //        <div className="blockEditUsersList__inputItem">
    //             <input
    //                 type="text"
    //                 name="user"
    //                 onChange={handleChange}
    //                 onBlur={handleBlur}
    //                 value={values.user}
    //             />
    //             {errors.user && touched.user && errors.user}
    //             <input
    //                 type="password"
    //                 name="pass"
    //                 onChange={handleChange}
    //                 onBlur={handleBlur}
    //                 value={values.pass}
    //             />
    //             {errors.pass && touched.pass && errors.pass}
    //             <input
    //                 type="email"
    //                 name="email"
    //                 onChange={handleChange}
    //                 onBlur={handleBlur}
    //                 value={values.email}
    //             />
    //             {errors.email && touched.email && errors.email}
    //        </div>  
    //        <div className="blockEditUsersList__buttonSave">
    //             <button type="submit" disabled={isSubmitting}>
    //                 EDIT
    //             </button>
    //        </div>
    //      </form>
    //    )}

    //         {/* <div  className="blockEditUsersList">
    //           <div className="blockEditUsersList__inputItem">
    //                <input type="text" placeholder="User"/>
    //                <input type="text" placeholder="Pass"/>
    //                <input type="email" placeholder="Email"/>
    //           </div>
    //           <div className="blockEditUsersList__buttonSave"> 
    //               <button>  EDIT  </button>
    //           </div>
    //         </div> */}
    //     </Formik>
//    )
// }
// // export default  EditUsersList;