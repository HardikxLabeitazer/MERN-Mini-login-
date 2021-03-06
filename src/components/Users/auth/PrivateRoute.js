import React, { Component } from "react";
import {Route} from 'react-router-dom';
import { Redirect} from "react-router-dom";
import auth from './auth-helper';


// const PrivateRoute = ({component:Component,...rest})=>{
//     <Route
//     {...rest} render={props =>(
//         auth.isAuthenticated()?(
//             <Component {...props}/>
//         ):(<Navigate replace to={{
//             pathname:'/signin',
//             state:{from:props.location}
//         }}/>)
//     )}
//     />
// }
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    auth.isAuthenticated() ? (
      <Component {...props}/>
    ) : (
      <Redirect  to={{
        pathname: '/signin',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

export default PrivateRoute;


