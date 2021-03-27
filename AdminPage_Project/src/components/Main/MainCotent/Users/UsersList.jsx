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
        <>
           <table className="blockUserListMain">
               <thead>
                   <tr>
                        <th className="blockUserListMain__userName">User Name</th>
                        <th className="blockUserListMain__email">Email</th>
                   </tr>
                </thead>
                <tbody className="blockUserListMain__listItemGroup">  
                       {usersGroup.map(user => (
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
      
//    )
// }
// export default  UsersList;
// const UsersList = () => { 
//    return (
           
//    )
// }
// export default  UsersList;
// }
// export default  UsersList;
// }
// export default  UsersList;