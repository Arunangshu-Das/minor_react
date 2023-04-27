import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../../context/cart'
import { useAuth } from '../../context/auth'
const Showcart = () => {
    const [auth,setAuth] = useAuth()
    const [cart,setCart] = useCart()
    const navigate = useNavigate()
  return (
    <div>
      cart
    </div>
  )
}

export default Showcart
