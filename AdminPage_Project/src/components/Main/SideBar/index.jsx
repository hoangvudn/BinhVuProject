import React from 'react';
import "./style/sidebarStyle.scss";
import menuLogo from '../../images/nav.png';
import { Link, useHistory } from 'react-router-dom';
import { MdCardTravel } from 'react-icons/md';
import { FaUserAlt } from 'react-icons/fa';

const SideBar = ( { show } ) => {
   let history = useHistory();
   return (
          <div  className={ show ? "blockSideBar active" : "blockSideBar"} >
             <ul className="blockSideBar__menuSideBar">
            
                  <Link to={"/usersList"} className="blockSideBar__linkTitle">
                      <div className="blockSideBar__groupItem">
                        <FaUserAlt className="blockSideBar__icon"/>
                        <li>USERS</li>
                     </div>
                  </Link>
           
                  <Link to={"/toursList"} className="blockSideBar__linkTitle"> 
                     <div className="blockSideBar__groupItem">
                           <MdCardTravel className="blockSideBar__icon"/>
                           <li>TOUR</li>
                     </div>
                  </Link> 
                  
               
                   {/* <Link to={"http://localhost:3001/"} className="blockSideBar__linkTitle"> 
                     <div className="blockSideBar__groupItem">
                           <MdCardTravel className="blockSideBar__icon"/>
                           <li>LOG OUT</li>
                     </div>
                  </Link>   */}
                  {/* <div className="blockSideBar__logout" onClick={ e => history.push("/") }>
                        LOG OUT
                  </div> */}
                  
             </ul>
          </div>
   )
}
export default  SideBar;

