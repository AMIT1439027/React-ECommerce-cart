import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { items } from './Data'
import { items } from './Data'
// THat id recieved by useParams 


const ProductDetail = () => {
    const {id} = useParams()
    const [product, setProduct]=useState 
    
  return (
    
    <>
    <div className="container">
        <div className="img">

        </div>
    </div>
    </>
  )
}

export default ProductDetail