import React from 'react';
import SideBar from '../Main/SideBar/index'
import { useState } from 'react'
import { useHistory } from "react-router-dom"
import "./style/headerStyle.scss"
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles } from '@material-ui/core/styles';
import FormatIndentDecreaseTwoToneIcon from '@material-ui/icons/FormatIndentDecreaseTwoTone';
import FormatIndentIncreaseTwoToneIcon from '@material-ui/icons/FormatIndentIncreaseTwoTone';
import PersonIcon from '@material-ui/icons/Person';
// import HomePage from '../Main/MainContent/HomePage/HomePage'
import AutorenewIcon from '@material-ui/icons/Autorenew';

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
   const clickRefresh = () => {
         window.location.reload();
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
             </div>   
             <div className="blockHeader__groupAdmin">
                 <Tooltip title="Refresh" aria-label="add" placement="right" className="blockHeader__groupAdmin__toolTipRefresh">
                     <AutorenewIcon color="inherit" aria-controls="simple-menu" aria-haspopup="true"  
                                    onClick={clickRefresh} className="blockHeader__groupAdmin__refreshIcon" />
                 </Tooltip> 
                 <label >Administrator</label>
                 <Tooltip title="Log Out" aria-label="add" placement="right" className="blockHeader__groupAdmin__toolTip">
                     <PersonIcon  color="inherit" aria-controls="simple-menu" aria-haspopup="true" 
                                  onClick={clickModal} className="blockHeader__groupAdmin__logOutIcon" />
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
        {/* // <HomePage  disable /> */}
      </> 
   )
};
export default Header;