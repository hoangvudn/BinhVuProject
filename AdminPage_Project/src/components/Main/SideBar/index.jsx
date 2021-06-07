import React from 'react';
import "./style/sidebarStyle.scss";
import "./style/responsive.scss";
import menuLogo from '../../images/nav.png';
import { Link, useHistory } from 'react-router-dom';
import { MdCardTravel } from 'react-icons/md';
import { FaUserAlt,FaHistory } from 'react-icons/fa';
import { SiHomeassistant } from 'react-icons/si'

const SideBar = ( { show } ) => {
   let history = useHistory();
   return (
          <div  className={ show ? "blockSideBar active" : "blockSideBar"} >
             <ul className="blockSideBar__menuSideBar">
                  <Link target="_blank" to={"//localhost:3006/"} className="blockSideBar__menuSideBar__linkHomeTitle">     
                        <SiHomeassistant className="blockSideBar__menuSideBar__linkHomeTitle--icon"/>
                        <li className="blockSideBar__menuSideBar__linkHomeTitle--homeTitle">BOOKING TOUR</li>
                  </Link> 
            
                  <Link to={"/usersList"} className="blockSideBar__menuSideBar__linkTitle">
                        <FaUserAlt className="blockSideBar__menuSideBar__linkTitle--icon"/>
                        <li>USERS</li>
                  </Link>
           
                  <Link to={"/toursList"} className="blockSideBar__menuSideBar__linkTitle">     
                        <MdCardTravel className="blockSideBar__menuSideBar__linkTitle--icon"/>
                        <li>TOUR</li>
                  </Link> 

                  <Link to={"/historyToursList"} className="blockSideBar__menuSideBar__linkTitle">     
                        <FaHistory className="blockSideBar__menuSideBar__linkTitle--icon"/>
                        <li className="blockSideBar__menuSideBar__linkTitle--historyTitle">HISTORY</li>
                  </Link> 

                  <Link to={"/reportHistoryTour"} className="blockSideBar__menuSideBar__linkTitle">     
                        <FaHistory className="blockSideBar__menuSideBar__linkTitle--icon"/>
                        <li className="blockSideBar__menuSideBar__linkTitle--historyTitle">REPORT</li>
                  </Link> 
                  
             </ul>
          </div>
   )
}
export default  SideBar;

