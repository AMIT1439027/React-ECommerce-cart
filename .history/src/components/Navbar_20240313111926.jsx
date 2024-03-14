import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { items } from "./Data";

const Navbar = ({ setData }) => {
 const [searchTerm, setSearchTerm] = useState(" ")
 const navigate = useNavigate();

  const filterByCategory = (category) => {
    const element = items.filter((product) => product.category === category);
    setData(element);
  };

  const filterByPrice = (price) =>{
    const element = items.filter((product)=>product.price >= price)
    setData(element)
  }

  const  handleSubmit = (e)=>{
    e.preventDefault();
    navigate(`/search`)
  }
  return (
    <>
      <header className="sticky-top">
        <div className="nav-bar">
          <Link to={"/"} className="brand">
            E-Cart
          </Link>
          <form className="search-bar">

            <input 
            value={searchTerm}
            onChange={(e)=>setSearchTerm(e.target.value)}
            type="text" 
            placeholder="Search Products" 
            />
          </form>
          <Link to={"/cart"} className="cart">
            Cart
          </Link>
        </div>

        <div className="nav-bar-wrapper">
          <div className="items">Filter by -{"->"}</div>
          <div onClick={()=>setData(items)}
           className="items">No Filter</div>

          <div onClick={() => filterByCategory("mobiles")} className="items">
            Mobiles
          </div>
          <div onClick={() => filterByCategory("laptops")}
           className="items">Laptops</div>
          <div  onClick={() => filterByCategory("tablets")}
          className="items">Tablets</div>

          <div  onClick={()=>filterByPrice(29999)}
          className="items">{">="} 29999</div>
          <div onClick={()=>filterByPrice(49999)}
          className="items">{">="} 49999</div>
          <div onClick={()=>filterByPrice(69999)}
          className="items">{">="} 69999</div>
          <div onClick={()=>filterByPrice(89999)}
          className="items">{">="} 89999</div>
        </div>
      </header>
    </>
  );
};

export default Navbar;