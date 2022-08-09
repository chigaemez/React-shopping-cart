import React, { useContext } from 'react'
import './Product.cs/ProductItem.css'
import CartContext from '../../context/Cart/CartContext'
// import formatCurrency from "react-currency-format"

const ProductItem = ({ product }) => {

    const {addToCart} = useContext(CartContext)
    // let opts ={format : '%s%v', symbol: ''}
    
    return (
        <div className='container col'>

            <div className="item">
            
                <img src={product.photo} className='product-cart-image' alt="" />
                <h4>{product.name}</h4>
                <h5>{product.price}</h5>
                <button className='cart btn bg-dark' onClick={() => addToCart(product)}> Add to Cart</button>
                
                </div>

        </div>
    )
}

export default ProductItem
