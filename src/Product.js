// useState with object state in a functional component
import React from 'react'
import { useState } from 'react'

const Product = () => {
  const [product, setProduct] = useState({
    id: 101,
    name: 'Mobile Phone',
    price: 200
  });

  const handleProductChange = () => {
    setProduct(prevState => ({
      ...prevState,
      name: prevState.name.toUpperCase(),
      price: 700
    }))
  }

  return (
    <div className='card w-25 mx-5'>
      <div className='card-header'>
        <h2>Product</h2>
      </div>
      <div className='card-body'>
        <p>id: {product.id} </p>
        <p>name: {product.name} </p>
        <p>price: {product.price.toFixed(2)} </p>
      </div>
      <div className='card-footer'>
        <button onClick={handleProductChange} className='btn btn-primary'>Change Product Details</button>
      </div>
    </div>
  )
}

export default Product