
import './App.css';
import React,{useEffect, useState} from 'react'
import NavBar from './components/NavBar/NavBar';
import Home from './components/HomePage/Home';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router';
import { Route,Switch } from 'react-router-dom';
import User from './components/Users/user/User';
import SignUp from './components/Users/user/SignUp';
import Signin from './components/Users/auth/Signin';
import Profile from './components/Users/user/Profile';
import PrivateRoute from './components/Users/auth/PrivateRoute'
import EditProfile from './components/Users/user/EditProfile';
import Menu from './components/Users/core/Menu';
function App() {
 
  return (
    <>
    <BrowserRouter>
    
      {/* <NavBar/>  */}
       <Menu/>
      <Switch>
       <Route exact path="/" component={Home}/>
        <Route exact path="/signup" component={SignUp}/>
        <Route exact path="/users" component={User}/>
        <Route exact path="/signin" component={Signin}/>
        <PrivateRoute exact path="/user/edit/:userId" component={EditProfile}/>
        <Route exact path='/user/:userId' component={Profile}/>
      </Switch>

    </BrowserRouter>
    
    
   
    </>
  )
}

export default App;
