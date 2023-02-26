import React, { useState, useEffect } from 'react';

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProductCard = ({productData}) => {

  return (
    <div className='product-card'
     key={productData.id}>
      <div className='product-img'>
        <Link to={`/shop/${productData.id}`}
          state={{ productinfo: productData }}>
          <motion.img whileHover={{ scale: 0.9 }} src={productData.img} alt='' /></Link>
      </div>
      <div className='product-name'>
        <p> {productData.name} </p>
      </div>
    </div>
  )
}

export default ProductCard;