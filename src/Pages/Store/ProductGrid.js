import React from 'react'
import Products from '../../Services/Dumm'
import './Product.cs/ProductGrid.css'
import ProductItem from './ProductItem'
import{FaSearch} from 'react-icons/fa'


const ProductGrid = () => {
  return ( 

    <div className="container">

      <div className="body ">
        <p>{Products.length} Available Products</p>
        <div className='search-holder'> <input type="text" placeholder='Search...' className='search' /><span><FaSearch className='search-icon text-secondary'/> </span></div>
       
      </div>


      <div className='container row'>

        {
          Products.map((product) => (
            (<ProductItem key={product.id} product={product} />)
          ))

        }

      </div>
    </div>
  )
}

export default ProductGrid
