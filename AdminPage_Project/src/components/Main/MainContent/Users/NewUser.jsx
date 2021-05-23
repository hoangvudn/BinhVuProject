import React from 'react';
import { Formik } from 'formik'


import { createNewUserAction } from "../../../../actions/usersActions";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Break } from 'devextreme-react/range-selector';
const NewUser = ({ history }) => {
    const [ userName, setUserName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ userExit, setUserExit ] = useState(false);
    const [ field, setField ] = useState("");
    const [ error, setError ] = useState("");
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
    const handleSubmit = e => {
      
        e.preventDefault();
        // const checkUserName = (userName) =>{
             
        // }
        //validate
        if ( userName.trim() === "" || email.trim() === "" || password.trim() === "") {
            setError("Value Not Null");
            return;
        }

        if ( userName.length < 5) {
            setError("Value must > 5");
            return;
        }
        
        if ( checkUser.length !== 0) {
            alert("USER EXITED! Please input another user");
            return;
        }
        
       //  {users.map(user => {
        //         if (user.userName === userName) {
        //             alert("Error User exited: ");
        //             setUserExit(true);
        //         }    
        //     })
        //  }
        
        addUser({ userName, email, password });
        //If it success 
        // return home page
        history.push(`/`);
    };

    return (
         <>
            <div className="blockNewUser">
                <div className="blockNewUser__headerTitle">
                        <h2>ADD USER</h2>
                </div>
                   
                <form onSubmit={handleSubmit} className="blockNewUser__groupForm">
                   <div className="blockNewUser__groupItem">
                       <label className="blockNewUser__label">User Name</label>
                       <input 
                          className="blockNewUser__inputUserName"
                          type="text"
                          placeholder = "user name"
                          value={userName}
                          onChange={ e => setUserName(e.target.value)}
                       />
                       <span>{error}</span>
                   </div>

                   <div className="blockNewUser__groupItem">
                       <label className="blockNewUser__label"> Email </label>
                       <input 
                          className="blockNewUser__inputEmail"
                          type="email"
                          placeholder = "email"
                          value={email}
                          onChange={ e => setEmail(e.target.value)}
                       />
                   </div>

                   <div className="blockNewUser__groupItem">
                       <label className="blockNewUser__label"> PassWord </label>
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