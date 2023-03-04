import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar-container'>
        <Link to={'/profile'}>
        <i className="fa-solid fa-user fa-xl">
        </i>
        </Link>
        <Link to={'/'}>
        <i className="fa-solid fa-house fa-xl"></i>
        </Link>
        <Link to={'/settings'}>
        <i className="fa-solid fa-gear fa-xl"></i>
        </Link>
        
        
       
    </div>
  )
}

export default Navbar