import React, { useState } from 'react'
import { create } from '../apis/api-user'
import './User.css'
export default function SignUp() {
    const [values, setValues] = useState({
        name: '',
        password: '',
        email: '',
        open: false,
        error: ''
    })

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value })
    }

    const clickSubmit = () => {
        const user = {
            name: values.name || undefined,
            email: values.email || undefined,
            password: values.password || undefined
        }
        create(user).then((data) => {
            if (data.error) {
                setValues({ ...values, error: data.error })
            }
            else {
                setValues({ ...values, error: '', open: true })
            }
        })
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
