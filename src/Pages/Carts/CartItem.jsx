import React, { useContext, useState } from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa'
import './Cart.css'
import CartContext from '../../context/Cart/CartContext'

const CartItem = ({ item }) => {


  
  const GlobalState = useContext(CartContext)
  const dispatch = GlobalState.dispatch


  return ( 


    <li className='cart-item text-center'>

      
      
      <div className='product-holds'>
      <p className='dic'>{item.title}</p>
        <img src={item.image} alt='' className='image' />
        <div className="text-hold">

          <button className="btn bg-dark text-light  remove-btn"  onClick={() => dispatch({type:'REMOVE', payload: item})}>Remove</button>
        </div>
        

      </div>

      <div>
        <span className='price'>${item.price}</span>
      </div>



      <span className='adding'>
        <FaPlus className='icon-plus text-dark' onClick={() => dispatch({type:'INCREASE', payload:item})} />

        {item.quantity}
        <FaMinus className='icon-plus text-dark'  onClick={() => item.quantity > 1 ? dispatch({type:'DECREASE', payload:item}) : dispatch({type:'REMOVE', payload: item})}  />
      </span>


      <div className="subtotal">
        ${ item.quantity * item.price}
      </div>






    </li>
  )
}

export default CartItem
