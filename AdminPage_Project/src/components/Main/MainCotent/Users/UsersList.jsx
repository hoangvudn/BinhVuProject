import React, { useEffect } from "react"
//import EditUsersList from './editUser';
//import DataGrid from 'devextreme-react/data-grid';
import User from "./User";
import { useDispatch, useSelector } from "react-redux";
import { getUsersAction } from "../../../../actions/usersActions";
import $ from "jquery";
import "./style/usersStyle.scss";


const UsersList = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const getUsersList = () => dispatch(getUsersAction());
        getUsersList(); 
    }, []);
    

  
    const usersGroup = useSelector(state => state.usersList.usersList);
    console.log("List User:",usersGroup);
    return (
        <React.Fragment>
        <>
           <table className="blockUserListMain">
               <thead>
                   <tr>
                        <th >User Name</th>
                        <th >Email</th>
                   </tr>
                </thead>
                   <tbody>  
                       {usersGroup.map(user => (
                           <User key={user.id} user={user} />
                       ))}
                   </tbody>
           </table>
        </>
        </React.Fragment>
    );
};
export default UsersList;
// import React, { useState } from 'react'

// const [user, setUser] = useState({
       
// // })
// function getEditUser() {
//     <EditUsersList />
// }
    
// const UsersList = () => { 
//    return (
           
//    )
// }
// export default  UsersList;
// const UsersList = () => { 
//    return (
           
//    )
// }
// export default  UsersList;