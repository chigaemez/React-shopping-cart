import React, { useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import './Product.cs/ProductItem.css'
import { FaInfo } from 'react-icons/fa'
import CartContext from '../../context/Cart/CartContext'

const ProductItem = ({ item }) => {

  const Globalstate = useContext(CartContext)
  const dispatch = Globalstate.dispatch;

  console.log(Globalstate)

  {
    item.quantity = 1
 }

  return (
    <div className='container-fluid col'>
    
      <div className='item'>

   

        <FaInfo className='info-icon'  />
        <img src={item.image} className='product-cart-image' alt='' />
        <h4>{item.title}</h4>
        <h5>${item.price}</h5>
        

        <button className='cart-btn btn  text-dark' onClick={() => dispatch({type:"ADD", payload:item }) } >Add To Cart</button>

        
      </div>
    </div>
  )
}

export default ProductItem
