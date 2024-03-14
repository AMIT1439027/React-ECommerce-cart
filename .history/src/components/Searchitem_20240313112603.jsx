import React from 'react'
import { useParams } from 'react-router-dom'

const Searchitem = () => {
  // const  params = useParams()
  // console.log(useParams())

  const {term} = useParams();

  return (
    <div>Searchitem </div>
  )
}

export default Searchitem