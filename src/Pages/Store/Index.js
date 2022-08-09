import React from 'react'
import './Index.css'

const Index = ({product}) => {
  return (
    <div className='container body'>
       <p>{}Product</p>
      <input type="text" placeholder='Search...'  className='search'/>
    </div>
  )
}

export default Index
