import React from 'react';
import menuLogo from '../images/nav.png'
import logoutIcon from '../../assets/logout.png'
import SideBar from '../Main/SideBar/index'
//import { useHistory } from "react-router-dom"
import { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
import { useHistory } from "react-router-dom"

import "./style/headerStyle.scss"
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles } from '@material-ui/core/styles';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import DoubleArrowTwoToneIcon from '@material-ui/icons/DoubleArrowTwoTone';
import FormatIndentDecreaseTwoToneIcon from '@material-ui/icons/FormatIndentDecreaseTwoTone';
import FormatIndentIncreaseTwoToneIcon from '@material-ui/icons/FormatIndentIncreaseTwoTone';
import TocIcon from '@material-ui/icons/Toc';
import HomePage from '../Main/MainContent/HomePage/HomePage';
import menuIcon1 from "./style/menuIcon1.png"
import menuIcon from "./style/menuIcon.png"
import PersonIcon from '@material-ui/icons/Person';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
   fab: {
     margin: theme.spacing(2),
   },
   absolute: {
     position: 'absolute',
     bottom: theme.spacing(2),
     right: theme.spacing(3),
   },
 }));
const Header = ({isLogOut}) => {
   const classes = useStyles();
   const [showSideBar, setShowSideBar] = useState(true);
   const [showIcon, setShowIcon] = useState(true);
   const [showModal, setShowModal] = useState(true);
   const history = useHistory();
   //===================================================
   const clickModal = () => {
         !showModal ? setShowModal(true) : setShowModal(false);
   }
   const handleClick = () => {
         history.push('/');
         isLogOut(false);
         window.location.reload();
   }
   const clickSideBar = () => {
         setShowSideBar(!showSideBar);
         !showIcon ? setShowIcon(true) : setShowIcon(false);
   }
   //============================================================

   //=============================================================
   return (
      <>
         <div  className={showSideBar ? "blockHeader" : "blockHeader active"} >
             <div className="blockHeader__menuLogo"> 
             {
                !showIcon 
                  ? <FormatIndentIncreaseTwoToneIcon color="inherit" onClick={clickSideBar} className="blockHeader__hambugerSideBar"/>
                  : <FormatIndentDecreaseTwoToneIcon color="inherit" onClick={clickSideBar} className="blockHeader__hambugerSideBar"/>
             } 
                {/* <TocIcon color="inherit" onClick={clickSideBar} className="blockHeader__hambugerSideBar"/> */}
                {/* <img src={!showIcon ? menuIcon1 : menuIcon} onClick={clickSideBar} className="blockHeader__hambugerSideBar"/> */}
             </div>   
             <div className="blockHeader__groupAdmin">
                 <label >Administrator</label>
                 <Tooltip title="Log Out" aria-label="add" placement="right" className="blockHeader__groupAdmin__toolTip">
                     <PersonIcon  color="inherit" aria-controls="simple-menu" aria-haspopup="true" 
                                  onClick={clickModal} className="blockHeader__groupAdmin__logOutIcon" />
                     {/* <img src={logoutIcon}  onClick={handleClick} className="blockHeader__logOutIcon" /> */}
                 </Tooltip>  
                 <div className={ showModal ? "blockHeader__groupAdmin__modalLogout" 
                                             : "blockHeader__groupAdmin__modalLogout active" } >
                     <div className="blockHeader__groupAdmin__modalLogout--profile">
                        <span>Profile</span>
                     </div>
                     <div className="blockHeader__groupAdmin__modalLogout--account">
                        <span>Account</span>
                     </div>
                     <div className="blockHeader__groupAdmin__modalLogout--logOut">
                        <span onClick={handleClick} >Log Out</span>
                     </div>   
                 </div>
             </div> 
         </div>
         <SideBar show={showSideBar}/>
      </> 
   )
};
export default Header;