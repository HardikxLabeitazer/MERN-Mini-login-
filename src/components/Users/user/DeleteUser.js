import React, { useState } from 'react'
import auth from './../auth/auth-helper'
import PropTypes from 'prop-types'
import { remove } from '../apis/api-user'
import { Redirect } from 'react-router-dom'
export default function DeleteUser(props) {

    const [open,setOpen]= useState(false);
    const [redirect,setRedirect]=useState(false);

    const jwt = auth.isAuthenticated();
    const clickButton = ()=>{
        setOpen(true);
    }
    const deleteAccount =()=>{
        remove({
            userId:props.userId
        },{t:jwt.token}).then((data)=>{
            if(data && data.error){
                console.log(data.error);
            }else{
                auth.clearJWT(()=>console.log('deleted'))
                setRedirect(true);
            }
        })
    }
    const handleRequestClose =()=>{
        setOpen(false);
    }
    if(redirect){
        return <Redirect  to="/"/>
    }
  return (
    <div>
        <div onClick={clickButton}>
        <i onClick={deleteAccount} class="fa-solid fa-trash"></i>
        </div>
    </div>
  )
}

DeleteUser.propTypes = {
    userId:PropTypes.string.isRequired
}