import React, { useContext } from 'react'
import { FaTimes } from 'react-icons/fa'
import CartContext from '../../context/Cart/CartContext'
import CartItem from './CartItem'
import './CartItem.css'


const Cart = () => {
    const {showCart, cartItems, ShowHiddenCart  } = useContext(CartContext)
 

  return (
    <>
        <div className='cart-wrapper' >
      {showCart && (
        <div>
          <div style={{ textAlign: 'right' }}>
            <FaTimes aria-hidden='true' onClick={ShowHiddenCart} style={{ cursor: 'pointer' }} className='close-btn' />

          </div>

          <div className="cart-holder">
            {cartItems.length === 0 ? (<h4>Cart is Empty</h4>) : (
              <ul>
                {cartItems.map(item => (<CartItem key={item.id} item={item} />))}
              </ul>
            )}
          </div>

          <div className="cart-total">
            <div>
                Cart Total
            </div>
            <div></div>
            <div style={{marginLeft: 5}}>
                {cartItems.reduce((amount, item) => item.price + amount, 0)}
            </div>
          </div>
        </div>

      )}
    </div>
    </>
  )
}

export default Cart

