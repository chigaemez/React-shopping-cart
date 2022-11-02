import React, { useContext } from 'react'
import CartContext from '../../context/Cart/CartContext'
import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './Index.css'

const Index = ({setPage, setStore}) => {

   

    const { cartItems, ShowHiddenCart  } = useContext(CartContext)
    return (
        <>
            <nav className="navbar  navbar-expand-lg navbar-light bg-dark">
                <div className="container">
                    <button className="navbar-toggler bg-light" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon "></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <Link to='/ProductGrid' className='nav-link' onClick={setStore} disabled={setStore === true ? true : false}> Store</Link>
                            </li>
                            <li className="nav-item">
                               <Link to="/About" className='nav-link' onClick={setPage} disabled={setPage === true ? true : false}> About</Link>
                            </li>

                        </ul>
                        <input type="submit" value="Log In" className='btn Log' />

                    </div>
                    <div className="cart-icon">
                            <FaShoppingCart className='icon' onClick={ShowHiddenCart } />
                            {
                            cartItems.length > 0 && <div className='item-count'><span>{cartItems.length}</span></div>
                        }
                       
                        
                      
                    </div>
                    
                </div>
            </nav>
        </>
    )
}

export default Index
