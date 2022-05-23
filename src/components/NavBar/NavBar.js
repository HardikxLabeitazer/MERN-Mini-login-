import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'
export default function NavBar() {
  return (
    <div className='navbaritems'>
        <div className='logoleft'>
            <h3>Skeleton</h3>
        </div>
        <div>
            <ul className='items'>
                <li className='sideitem'><Link to='/users/'>USERS</Link></li>
                <li><Link to='/signup'>SIGN UP</Link></li>
                <li><Link to='/signin'>SIGN IN</Link></li>
            </ul>
        </div>
    </div>
  )
}
