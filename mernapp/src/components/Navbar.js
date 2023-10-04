import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Modal from '../Modal'
import Cart from '../screens/Cart'
import { useCart } from './ContextReducer'

export default function Navbar() {
    let data = useCart()
    const [cartView, setCartView] = useState(false)

    const navigate = useNavigate()

    const handleLogOut = () => {
        localStorage.removeItem('authToken')
        navigate('/login')
    }

  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-success position-sticky" tyle={{ boxShadow: "0px 10px 20px black", filter: 'blur(20)', position: "fixed", zIndex: "10", width: "100%" }}>
            <div className='container-fluid'>
            <Link className="navbar-brand fs-1 fst-italic" to="/">MERNchies</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link className="nav-link fs-5 mx-3 active" to="/">Home</Link>
                </li>
                {
                    (localStorage.getItem('authToken')) ?
                        <li>
                            <Link className='nav-link fs-5 mx-3 active' to='/myOrder'>My Orders</Link>
                        </li>
                        : ""
                }
                </ul>

            {
                (!localStorage.getItem('authToken')) ? 
                    <form className='d-flex'>
                        <Link className='btn bg-white text-success mx-1' to='/login'>Login</Link>
                        <Link className='btn bg-white text-success mx-1' to='/signup'>Signup</Link>
                    </form>
                :   
                    <div>
                        <div className='btn bg-white text-success mx-2' onClick={() => setCartView(true)}>
                            <Badge color="secondary" badgeContent={data.length} >
                                <ShoppingCartIcon />
                            </Badge>
                            Cart
                        </div>
                        {cartView ? <Modal onClose={() => setCartView(false)}><Cart></Cart></Modal> : ""}
                        <button className='btn bg-white text-danger mx-2' onClick={handleLogOut}>
                            LogOut
                        </button>
                    </div>
            }
            </div>
            </div>  
        </nav>
    </div>
  )
}
