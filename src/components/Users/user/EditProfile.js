import React, { useEffect, useState } from 'react'
import auth from './../auth/auth-helper'
import { Redirect } from 'react-router-dom'
import {read,update} from '../apis/api-user'
import './User.css'
export default function EditProfile({match}) {

    const [values,setValues]=useState({
        name:'',
        password:'',
        email:'',
        open:false,
        error:'',
        redirectToProfile:false
    })
    const jwt = auth.isAuthenticated();
    console.log(jwt)
    useEffect(()=>{
      const abortController = new AbortController();
      const signal = abortController.signal;

      read({
        userId:match.params.userId
      },{t:jwt.token},signal).then((data)=>{
        if(data && data.error){
          setValues({...values,error:data.error})
        }
        else{
          setValues({...values,name:data.name,email:data.email})
        }
      })
      // return function cleanup(){
      //   abortController.abort();
      // }

    },[match.params.userId])

    const clickSubmit = ()=>{
      const user ={
        name:values.name || undefined,
        email:values.email || undefined,
        password:values.password || undefined
      }
      update({
        userId:match.params.userId
      },{
        t:jwt.token
      },user).then((data)=>{
        if(data && data.error){
          setValues({...values,error:data.error})
        }else{
          setValues({...values,userId:data._id,redirectToProfile:true})
        }
      })
    }
    const handleChange =name=>event =>{
      setValues({...values,[name]:event.target.value})
    }
    if(values.redirectToProfile){
      return (<Redirect  to={"/user/" + values.userId}/>)
    }
  return (
    <div className='signupmain'>
        <div className='signupcontainer'>
            <div className='signupcont'>
                <h3>SIGN UP</h3>
            </div>
            <div className='signupcont'>
                <input placeholder="Name" id='name' label="Name" value={values.name} onChange={handleChange('name')} /> </div>
            <div  className='signupcont'> <input placeholder='Email' id='email' type="email" label="Email" value={values.email} onChange={handleChange('email')} /></div>
            <div  className='signupcont'><input placeholder='Password' id='password' type='password' label="Password" value={values.password} onChange={handleChange('password')} /></div>
            <div className='signupcont'><button onClick={clickSubmit}>Submit</button></div>
        </div>
        </div>
  )
}
