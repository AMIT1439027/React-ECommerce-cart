import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { items } from './Data';
import Product from './Product';

const Searchitem = () => {
  // const  params = useParams()
  // console.log(useParams())
  const {term} = useParams();
 const [filterData, setFilterData] = useState([])
 

useEffect(() => {
  const filteredData = ()=>{
    const data = items.filter((p)=>p.title .toLowerCase().includes(term.toLowerCase()))
  }
}, [third])




  return (
    // <div>Searchitem {term}</div>
    <div>  </div>
  )
}

export default Searchitem