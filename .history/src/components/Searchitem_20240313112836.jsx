import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { items } from './Data';

const Searchitem = () => {
  // const  params = useParams()
  // console.log(useParams())
  const {term} = useParams();
 const [filterData, setFilterData] = useState([])
 
 const 



  return (
    // <div>Searchitem {term}</div>
    <div>  </div>
  )
}

export default Searchitem