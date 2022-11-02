import React, { useContext } from 'react'
import {FaPlus, FaTrash, FaMinus} from 'react-icons/fa'
import './Cart.css'
import CartContext from '../../context/Cart/CartContext'


const CartItem = ({item}) => {

  const {removeItem , increase, addToCart, cartItems}  = useContext(CartContext)
  return (
    <li className='cart-item'>
      <img src={item.photo} alt="" className='image'/> 

      <div className='cart-total'>
        {item.name} <span>{item.price}</span>    Qnt:{item.quantity}


      </div>

      {
        item.length > 0  ? <FaPlus className='icon-plus text-dark' onClick={cartItems} />  : <span className='adding'><FaPlus className='icon-plus text-dark' onClick={cartItems} /> <FaTrash className='icon-plus text-dark' onClick={removeItem}/></span>
      }

      
    </li>
  )
}

export default CartItem
