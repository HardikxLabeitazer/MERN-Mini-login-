import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import {list} from '../apis/api-user'
import './User.css'
export default function User() {

    const [users,setUsers]=useState([]);
    
    useEffect(() => {
        const abortController = new AbortController()
        const signal = abortController.signal
    
        list(signal).then((data) => {
          if (data && data.error) {
            console.log(data.error)
          } else {
             
            setUsers(data)
            
          }
        })
    
        
      }, [])
    
  return (
    
     
     <div className='usercontainer'>
         <div className='mycontainer'>
          <ul>
             All the users on the platform
        {
            users.map((item,i)=>{
                return <li className='myinfo' key={i}>{item.name}</li>
            })
        }
         </ul>   
        </div>

        
     </div>
    
    
    
  )
}
