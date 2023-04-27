import React from 'react'
import{Link} from 'react-router-dom'
import './navbar.css';
import { useAuth } from '../../context/auth';
import { useCart } from "../../context/cart";
import toast from 'react-hot-toast';
import { Badge} from 'antd';
const Navbar = () => {
  const [auth,setAuth] = useAuth()
  const [cart] = useCart();
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
  }
  return (
    <nav>
        <input type="checkbox" id="check"/>
        <label htmlFor="check" className="checkbtn">
            <i className="fas fa-bars"></i>
        </label>
        <label className="logo">MediQUICK</label>
        <ul>
            <li><Link className="link " to="/">Home</Link></li>
            <li><Link className="link" to="/human">Human</Link></li>
            <li><Link className="link" to="/veterinary">Veteinary</Link></li>
            {
              !auth.user ? (
              <>
                <li><Link className="link" to="/login">Login</Link></li>
                <li><Link className="link" to="/signup">Sign Up</Link></li>
              </>) : (
              <>
                <li><Link className="link" to="/login" onClick={handleLogout}>Logout</Link></li>
              </>)
            }
            <li><Link className="link" to="/search">Search</Link></li>
            <li><Link className="link" to="/showcart">
                <Badge count={cart?.length} showZero offset={[10, -5]}>
                  Cart
                </Badge>
                </Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar
