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
      <div className="container">
        <div className="container ">
          <div className="row ">
            <div className="col-md-7  p-0 m-0">
              {cart?.map((p) => (
                <div className="row card flex-row" key={p.id}>
                  <div className="col-md-4">
                    <img
                      src={p.id}
                      className="card-img-top"
                      alt={p.name}
                      width="100%"
                      height={"130px"}
                    />
                  </div>
                  <div className="col-md-4">
                    <p>{p.name}</p>
                    {/* <p>{p.description.substring(0, 30)}</p> */}
                    <p>Price : {p.price}</p>
                  </div>
                </div>
              ))}
            </div>
            </div>
            </div>
            </div>
    </div>
  )
}

export default Showcart
