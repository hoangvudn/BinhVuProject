import logo from './logo.svg';
import React, { Component }  from 'react';

import Header from './components/Header/'
import SideBar from './components/Main/SideBar/index'
import UsersList from './components/Main/MainCotent/Users/UsersList'
import NewUser from './components/Main/MainCotent/Users/NewUser'
import EditUser from './components/Main/MainCotent/Users/EditUser'

import ToursList from './components/Main/MainCotent/Tour/ToursList'
import EditTour from './components/Main/MainCotent/Tour/EditTour'

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './styles/index.scss'
import TestTable from './components/Main/MainCotent/Tour/TestTable'
import './styles/index.scss'
import './App.css';



// const dataProvider = jsonServerProvider("http://localhost:3001"); //only port 3001
function App() {  
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
                   {/* <Route exact path="/toursList/new" component={NewTour} /> */}
                   <Route exact path="/toursList/edit/:id" component={EditTour} />  
                 </Switch>
               </div>
    </Router>
  );
}

export default App;
