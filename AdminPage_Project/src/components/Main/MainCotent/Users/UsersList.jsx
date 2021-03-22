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

    const users = useSelector(state => state.usersList.usersList);
    console.log("List User:",users)
    return (
        <>
           <table>
               <thread>
                   <tr>
                        <th>User Name</th>
                        <th>Email</th>
                   </tr>
                </thread>
                   <tbody>
                       {users.map(user => (
                           <User key={user.id} user={user} />
                       ))}
                   </tbody>
           </table>
        </>
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