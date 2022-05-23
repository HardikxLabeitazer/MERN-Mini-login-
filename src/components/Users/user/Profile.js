import React, { useEffect, useState } from 'react'
import auth from './../auth/auth-helper'
import {read} from '../apis/api-user'
import { Redirect} from 'react-router-dom';
import Card from '@material-ui/core/Card'
export default function Profile({match}) {

    const [user,setUser]=useState({});
    const [redirectToSignin,setRedirectToSignin]=useState(false);
   const jwt = auth.isAuthenticated();
 
    useEffect(()=>{
        const abortController = new AbortController();
        const signal = abortController.signal;
        
        read({
            userId:match.params.userId
        },{t:jwt.token},signal).then((data)=>{
            if(data && data.error){
                setRedirectToSignin(true)
            }else{
                setUser(data);
            }
        })
       
    },[match.params.userId])
    if(redirectToSignin){
        return <Redirect  to='/signin'/>
    }
  return (
    <div style={{display:'flex',justifyContent:'center'}}>
        <div >
            <h3>Profile</h3>
            <div style={{padding:'5px'}}>
                
                   Name :  {user.name}<br/>
                 Email  :  {user.email} 
                
                
            </div>
        </div>
    </div>
  )
}
