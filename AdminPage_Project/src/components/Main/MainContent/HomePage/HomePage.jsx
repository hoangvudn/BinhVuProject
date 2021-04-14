
import React, { Component, useState }  from 'react';

import Header from '../../../Header/index'
import SideBar from '../../SideBar/index'
import UsersList from '../Users/UsersList'
import NewUser from '../Users/NewUser'
import EditUser from '../Users/EditUser'

import ToursList from '../Tour/ToursList'
import EditTour from '../Tour/EditTour'
import NewTour from '../Tour/NewTour'


import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './styles/index.scss'





// const dataProvider = jsonServerProvider("http://localhost:3001"); //only port 3001
const HomePage = () => {  
  
  return (
    <Router>
          <Header/>
     
          {/* <TestTable /> */}
              <div className="blockContainer">
                 <Switch>
                   <Route exact path="/" component={UsersList} />
                   <Route exact path="/usersList" component={UsersList} />
                   <Route exact path="/usersList/new" component={NewUser} />
                   <Route exact path="/usersList/edit/:id" component={EditUser} />
                   <Route exact path="/toursList" component={ToursList} />
                   <Route exact path="/toursList/new" component={NewTour} />
                   <Route exact path="/toursList/edit/:id" component={EditTour} />  
                 </Switch>
               </div>
    </Router>
  );
}

export default HomePage;