import React from 'react';
import menuLogo from '../images/nav.png'
import logoutIcon from '../../assets/logout.png'
import SideBar from '../Main/SideBar/index'
//import { useHistory } from "react-router-dom"
import { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
import { useHistory } from "react-router-dom"
import menuIcon1 from './style/menuIcon1.png'
import "./style/headerStyle.scss"
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles } from '@material-ui/core/styles';
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
   const history = useHistory();
   const handleClick = () => {
         history.push('/');
         isLogOut(false);
         window.location.reload();
   }
   return (
      <>
         <div  className="blockHeader" >
             <div className="blockHeader__menuLogo">  
                <img src={menuIcon1} onClick={() => setShowSideBar(!showSideBar)} className="blockHeader__hambugerSideBar"/>
             </div>   
             <div className="blockHeader__groupAdmin">
                 <label >Administrator</label>
                 <Tooltip title="Log Out" aria-label="add" placement="right" >
                     <img src={logoutIcon}  onClick={handleClick} className="blockHeader__logOutIcon" />
                 </Tooltip>
             </div> 
         </div>
         <SideBar show={showSideBar}/>
      </> 
   )
};
export default Header;