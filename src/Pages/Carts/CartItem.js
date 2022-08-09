import React, { useContext } from 'react'
import './Cart.css'
import CartContext from '../../context/Cart/CartContext'


const CartItem = ({item}) => {

  const {removeItem} = useContext(CartContext)
  return (
    <li className='cart-item'>
      <img src={item.image} alt="" />

      <div className='cart-total'>
        {item.name} {item.price}
      </div>

      <button className='cart-button btn bg-dark' onClick={()=> removeItem(item.id)}>Remove</button>
    </li>
  )
}

export default CartItem
