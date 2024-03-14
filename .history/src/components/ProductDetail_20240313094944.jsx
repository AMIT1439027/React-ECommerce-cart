import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { items } from './Data'

// THat id recieved by useParams 


const ProductDetail = () => {
    const {id} = useParams()
    const [product, setProduct]=useState({}) 
    useEffect(()=>{
      const filterProduct = items.filter((product)=>product.id==id)
      // console.log(filterProduct)
      setProduct()

    },[id])
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