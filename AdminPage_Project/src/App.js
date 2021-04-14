import logo from './logo.svg';
import React, { Component }  from 'react';
import HomePage from './components/Main/MainContent/HomePage/HomePage'
import LogInForm from './components/Header/modalLogIn/LogInForm'

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




// const dataProvider = jsonServerProvider("http://localhost:3001"); //only port 3001
function App() {  
  return (
    //  <TestTable />
    //  <BasicTable />
    //  <BasicTable1 />
     <HomePage />
    // <Router>
    //       {/* <Header/> */}
    //       {/* <TestTable /> */}
    //       <LogInForm />
    //           <div className="blockContainer">
    //              <Switch>
    //                <Route exact path="/HomePage" component={HomePage} />
    //                {/* <Route exact path="/usersList" component={UsersList} />
    //                <Route exact path="/usersList/new" component={NewUser} />
    //                <Route exact path="/usersList/edit/:id" component={EditUser} />
    //                <Route exact path="/toursList" component={ToursList} />
    //                <Route exact path="/toursList/new" component={NewTour} />
    //                <Route exact path="/toursList/edit/:id" component={EditTour} />   */}
    //              </Switch>
    //            </div>
    // </Router>
  );
}

export default App;
