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
      setProduct(filterProduct[0])

    },[id])
  return (
    
    <>
    <div className="container">
        <div className="img">
         <img src={} alt='' />
        </div>
    </div>
    </>
  )
}

export default ProductDetail