import React from 'react';
import menuLogo from '../images/nav.png'
import logoutIcon from '../images/logout.jpg'
import SideBar from '../Main/SideBar/index'
import { useState } from 'react'
import "./style/headerStyle.scss"
const Header = () => {
   const [showSideBar, setShowSideBar] = useState(false);
   return (
      <>
         <div  className="blockHeader">
             <div className="blockHeader__menuLogo">
                <img src={menuLogo} alt='logoSideBar' onClick={() => setShowSideBar(!showSideBar)} className="hambugerSideBar"/>
             </div>   
             <div className="blockHeader__logoutIcon">
                 <label >Administrator</label>
                 <img src={logoutIcon} className="blockHeader__modalLogOut" />
             </div> 
         </div>
         <SideBar show={showSideBar}/> 
      </>
   )
}
export default Header;