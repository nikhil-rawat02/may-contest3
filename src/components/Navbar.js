import React from 'react'
import '../App.css'
import { NavLink } from 'react-router-dom'
import Signup from '../pages/Signup'
import Profile from '../pages/Profile'
function Navbar(props) {
  return (
    <div className='nav-bar'>
      <div className="left-container">
        <span>Header</span>
      </div>
      <div className="right-container">
        {
          props.userData === {} ? (<NavLink className="right-container-elements" to="/">Signup</NavLink>)
            :
            (<span className="right-container-elements" >Signup</span>)
        }
        {
          props.userData === {} ? (<NavLink className="right-container-elements" >Profile</NavLink>)
            :
            (<span className="right-container-elements" to="/profile">Profile</span>)
        }
      </div>
    </div>
  )
}

export default Navbar
