import React, { useContext,  } from 'react'
import './Product.cs/ProductItem.css'
import {FaShoppingCart} from 'react-icons/fa'
import {FaInfo} from 'react-icons/fa'
import CartContext from '../../context/Cart/CartContext'

const ProductItem = ({ product }) => {
    

    const {addToCart, cartItems, increase} = useContext(CartContext)
    


    
    return (
        <div className='container col'>

            <div className="item">
                <FaInfo className='info-icon'/>
                <img src={product.photo} className='product-cart-image' alt="" />
                <h4>{product.name}</h4>
                <h5>${product.price}</h5>


             
                {

                    cartItems.map( product =>product.id).includes(product.id) ?
        
                    <button className="cart-btn btn  text-dark" onClick={() => addToCart(product)}>Add more</button>

                    : 

                    <button className="cart-btn btn text-dark" onClick={() => addToCart(product)}>Add to cart <span className='shop'> <FaShoppingCart/> </span></button>

                }
               

                
                </div>
        </div>
    )
}

export default ProductItem
