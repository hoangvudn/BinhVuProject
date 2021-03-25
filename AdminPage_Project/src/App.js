import logo from './logo.svg';
import React, { Component }  from 'react';

import Header from './components/Header/'
import SideBar from './components/Main/SideBar/index'
import UsersList from './components/Main/MainCotent/Users/UsersList'
import EditUsersList from './components/Main/MainCotent/Users/EditUser'
import EditTour from './components/Main/MainCotent/Tour/editTour'

import './App.css';

// const dataProvider = jsonServerProvider("http://localhost:3001"); //only port 3001
function App() {  
  return (
       <div className="App">
            <Header  />
            <UsersList /> 
            <SideBar />
            {/* <EditUsersList /> */}
          {/* <EditTour />  */}
       </div>
  );
}

export default App;
