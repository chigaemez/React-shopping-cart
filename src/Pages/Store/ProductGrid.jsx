import React, { useEffect, useState } from 'react'
import './Product.cs/ProductGrid.css'
import ProductItem from './ProductItem'
import { FaSearch } from 'react-icons/fa'
import axios from 'axios'

const ProductGrid = () => {
  const [product, setProduct] = useState([])

  const fetchData = async () =>{

    const response = await axios.get("https://fakestoreapi.com/products")

    setProduct(response.data)

  }

  useEffect(() => {
    fetchData()
  },[])


  

  return (
    <div className='container-fluid'>
      <div className='body '>
        <p>{product.length} Available Products</p>
        <div className='search-holder'>
          {' '}
          <input type='text' placeholder='Search...' className='search' />
          <span>
            <FaSearch className='search-icon text-secondary' />{' '}
          </span>
        </div>
      </div>

      <div className='container-fluid row'>
        {product.map((item, index) => (
         
          <ProductItem key={index} item={item} />
        ))}
      </div>
    </div>
  )
}

export default ProductGrid
