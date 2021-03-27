import logo from './logo.svg';
import React, { Component }  from 'react';

import Header from './components/Header/'
import SideBar from './components/Main/SideBar/index'
import UsersList from './components/Main/MainCotent/Users/UsersList'
import EditUser from './components/Main/MainCotent/Users/EditUser'
import EditTour from './components/Main/MainCotent/Tour/editTour'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './styles/index.scss'

import './App.css';

// const dataProvider = jsonServerProvider("http://localhost:3001"); //only port 3001
function App() {  
  return (
    <Router>
          <Header/>
    
              <div className="blockContainer">
                 <Switch>
                   <Route exact path="/" component={UsersList} />
                   <Route exact path="/usersList/edit/:id" component={EditUser} />  
                 </Switch>
               </div>
    </Router>
  );
}

export default App;
