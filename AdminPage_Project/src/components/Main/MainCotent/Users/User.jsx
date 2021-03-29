import React from 'react';
import EditUsersList from './EditUser';
import { Link } from 'react-router-dom';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import Swal from "sweetalert2";
import "./style/usersStyle.scss";

import { useDispatch } from "react-redux";
import { deleteUserAction } from "../../../../actions/usersActions"

const User = ({ user }) => {
    
    const dispatch = useDispatch();

    const confirmDeleteUser = id => {
        Swal.fire({
            title: "WARNING!",
            text: "Do you want delete User : " + `${user.userName}` ,
            type:"warning",
            showCancelButton: true,
            confirmButtonText: " YES "
        }).then(result => {
            if (result.value) {
                Swal.fire("Deleted User", " User has been deleted ", "ok");

                dispatch(deleteUserAction(id));
            }
        });
    };

    return (
        <>
         <tr className="blockUserListMain__listItem">
             <td className="blockUserListMain__itemUser">{user.userName}</td>
             <td className="blockUserListMain__itemEmail">{user.email}</td>
             <Link to={`/usersList/edit/${user.id}`} > 
                     <AiFillEdit className="blockUserListMain__editIcon"/>
             </Link>
          
             <AiFillDelete className="blockUserListMain__deleteIcon" onClick={() => confirmDeleteUser(user.id)}/>
           
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