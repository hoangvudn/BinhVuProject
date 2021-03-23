import React from 'react';
import EditUsersList from './EditUser';

import $ from "jquery";
import "./style/usersStyle.scss";

import { useDispatch } from "react-redux";

const User = ({ user }) => {
    return (
        <>
         <tr className="blockUserListMain__listItem">
             <td>{user.userName}</td>
             <td>{user.email}</td>
             <button>EDIT</button>
             <button>DELETE</button>
         </tr>
        </>
    )
}

export default  User;



//------------------------------------------------------------EXAMPLE------------------------------------------
// // const columns = ['CompanyName', 'City', 'State', 'Phone', 'Fax'];

// // // import React, { useState } from 'react'

// // // const [user, setUser] = useState({
       
// // // // })
// // // function getEditUser() {
// // //     <EditUsersList />
// // // }
    
// // const UsersList = () => { 
// //    return (
// //             <DataGrid
// //                 dataSource="http://localhost:3000/users"
// //                 defaultColumns={columns}
// //                 showBorders={true}
// //             />
// //         //   <div  className="blockUsersList">
// //         //       <div className="blockUsersList__topUsersList">
// //         //            <input type="text"/>
// //         //            <button>SEARCH</button>
// //         //            <button>ADD USER</button>
// //         //       </div>
// //         //       <div>
                   
// //         //       </div>
// //         //   </div>
       
// //    )
// }
// export default  User;