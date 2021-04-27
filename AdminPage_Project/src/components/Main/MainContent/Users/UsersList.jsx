import React, { useEffect, Component } from "react"
import { Link } from 'react-router-dom'

import { AiOutlineUserAdd } from 'react-icons/ai';
import SearchUser from './SearchUser';
import { useState } from 'react'
//import EditUsersList from './editUser';
//import DataGrid from 'devextreme-react/data-grid';
import User from "./User"
import BasicTable1 from "./BasicTable1"
import { useDispatch, useSelector } from "react-redux";
import { getUsersAction } from "../../../../actions/usersActions";
import MaterialTable from 'material-table';
import "./style/usersStyle.scss";


const UsersList = ( {history} ) => {

    const dispatch = useDispatch();

    useEffect(() => {
        const getUsersList = () => dispatch(getUsersAction());
        getUsersList(); 
    }, []);
     

    const users = useSelector(state => state.usersList.usersList);
    console.log("List User New:",users);

    return (
        <>     
            <div className="blockUserListMain">
                <table className="blockUserListMain__table">
                    <thead>
                        <tr>
                                <th className="blockUserListMain__table--headUserName">User Name</th>
                                <th className="blockUserListMain__table--headEmail">Email</th>
                                <th className="blockUserListMain__table--headActionIcon"></th>
                        </tr>         
                        </thead>
                    
                        <tbody className="blockUserListMain__listItemGroup">  
                            {users.map(user => (
                                <User key={user.id} user={user} />
                            ))}
                        </tbody>
                
                </table>   
                
                <SearchUser className="" />
            </div>
            <Link to={"/usersList/new" } >  
                            <AiOutlineUserAdd className="blockUserListMain__linkToAddUser"/> 
            </Link>
          
           
         
        </> 
    );
};
export default UsersList;

{/* <MaterialTable
title="hoangvudaraculabaha"
columns={[
    { title: 'Name', field: 'userName' },
    { title: 'Pass', field: 'password' }
]}
data={[
    // {userName:users.map(user => (
       { userName: users.map(user => (user.userName + "     "))}
        //  password: users.map(user => (user.password))}
        // //  <User key={user.id} user={user}/>
    //  ))}
]}      
options={{
    search: true
}}
/> */}

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