import React from 'react'
import{Link} from 'react-router-dom'
import './navbar.css';

const Navbar = () => {
  return (
    <nav>
        <input type="checkbox" id="check"/>
        <label htmlFor="check" className="checkbtn">
            <i className="fas fa-bars"></i>
        </label>
        <label className="logo">MediQUICK</label>
        <ul>
            <li><Link className="link active" to="/">Home</Link></li>
            <li><Link className="link" to="/">Human</Link></li>
            <li><Link className="link" to="/">Veteinary</Link></li>
            <li><Link className="link" to="/login">Login</Link></li>
            <li><Link className="link" to="/signup">Sign Up</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar
