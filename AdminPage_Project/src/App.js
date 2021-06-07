import logo from './logo.svg';
import React, { Component, useState, useEffect  }  from 'react';
import HomePage from './components/Main/MainContent/HomePage/HomePage'
import LogInForm from './components/Header/modalLogIn/LogInForm'
import "./styles/index.scss"
// import Header from './components/Header/'
// import SideBar from './components/Main/SideBar/index'
// import UsersList from './components/Main/MainContent/Users/UsersList'
// import NewUser from './components/Main/MainContent/Users/NewUser'
// import EditUser from './components/Main/MainContent/Users/EditUser'

// import ToursList from './components/Main/MainContent/Tour/ToursList'
// import EditTour from './components/Main/MainContent/Tour/EditTour'
// import NewTour from './components/Main/MainContent/Tour/NewTour'


 import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import './styles/index.scss'
// import TestTable from './components/Main/MainContent/Tour/TestTable'
// import './styles/index.scss'
import './App.css';
import TestTable from './components/Main/MainContent/Tour/TestTable';
import BasicTable from './components/Main/MainContent/Tour/TestTable';
import BasicTable1 from './components/Main/MainContent/Users/BasicTable1';



function getSessionStorageOrDefault(key, defaultValue) {
  const stored = sessionStorage.getItem(key);
  if (!stored) {
    return defaultValue;
  }
  return JSON.parse(stored);
}
// const dataProvider = jsonServerProvider("http://localhost:3001"); //only port 3001
function App() { 
  const [loggedIn, setLoggedIn] = useState(
    getSessionStorageOrDefault('terms', false)
  );

  useEffect(() => {
    sessionStorage.setItem('terms', JSON.stringify(loggedIn));
  }, [loggedIn]);

  //const [loggedIn, setLoggedIn] = useState(false);
  const handleClick = e => {
    setLoggedIn(!loggedIn);
  };
  return (

     <Router>
          {/* <LogInForm /> */}
              
              <div className="mainLogInForm">
                 <Switch>
                   {
                      !loggedIn ?
                      <Route  path="/"> <LogInForm logIn={handleClick} /> </Route>
                       :
                      <Route  path="/"> <HomePage logOut={handleClick}/> </Route>
                   }
                   
                 </Switch>
                 
               </div>
     </Router>
  );
}

export default App;
