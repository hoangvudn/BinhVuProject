import React from 'react';
import "./style/sidebarStyle.scss";
import "./style/responsive.scss";
import menuLogo from '../../images/nav.png';
import { Link, useHistory } from 'react-router-dom';
import { MdCardTravel } from 'react-icons/md';
import { FaUserAlt,FaHistory } from 'react-icons/fa';

const SideBar = ( { show } ) => {
   let history = useHistory();
   return (
          <div  className={ show ? "blockSideBar active" : "blockSideBar"} >
             <ul className="blockSideBar__menuSideBar">
            
                  <Link to={"/usersList"} className="blockSideBar__linkTitle">
                        <FaUserAlt className="blockSideBar__linkTitle--icon"/>
                        <li>USERS</li>
                  </Link>
           
                  <Link to={"/toursList"} className="blockSideBar__linkTitle">     
                        <MdCardTravel className="blockSideBar__linkTitle--icon"/>
                        <li>TOUR</li>
                   
                  </Link> 

                  <Link to={"/toursList"} className="blockSideBar__linkTitle">     
                        <FaHistory className="blockSideBar__linkTitle--icon"/>
                        <li className="blockSideBar__linkTitle--historyTitle">TOUR HISTORY</li>
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

