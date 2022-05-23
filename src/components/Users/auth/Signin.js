import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { signin } from './api-auth'
import auth from './../auth/auth-helper'
import './Signin.css'
export default function Signin(props) {

    const [values, setValues] = useState({
        email: '',
        password: '',
        error: '',
        redirectToReferrer: false
    })

    const clickSubmit = () => {
        const user = {
            email: values.email || undefined,
            password: values.password || undefined
        }

        signin(user).then((data) => {
            if (data.error) {
                setValues({ ...values, error: data.error })
            }
            else {
                auth.authenticate(data, () => {
                    setValues({ ...values, error: '', redirectToReferrer: true })
                })
            }
        })
    }

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value })
    }

    const { from } = props || {
        from: {
            pathname: '/'
        }
    }
    const  redirectToReferrer  = values.redirectToReferrer
    if (redirectToReferrer) {
        return (<Redirect  to={from} />)
    }
    return (
        <div className='mainsignin'>
        
            <div className='signincontainer'>
                <div className='signinsingle'>
                    <h3>SIGN IN</h3>
                </div>
                <div  className='signinsingle'>
                    <input id="email" label='Email' placeholder='Email' value={values.email} onChange={handleChange('email')} />
                </div>
                <div  className='signinsingle'>
                    <input type="password" id="password" label='password' placeholder='Password' value={values.password} onChange={handleChange('password')} />
                </div>
                <div  className='signinsingle'>
                    <button onClick={clickSubmit}>Submit</button>
                </div>
            </div>
        

    </div >
  )
}
