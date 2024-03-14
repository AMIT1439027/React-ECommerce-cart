import React from "react";
// import { items } from "./Data";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const Product = ({items, cart, setCart}) => {
  const addToCart = (id,price,title,description,imgSrc) =>{
    const obj = {
      id,price,title,description,imgSrc
    }
    setCart([...cart, obj]);
    console.log(cart)
    toast.success('🦄 your item is add!', {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
      });
  }
  return (
    <>
      <div className="container my-5">
        <div className="row">
          {items.map((product) => {
            return (
              <>
              <ToastContainer
position="top-right"
autoClose={1500}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
transition: Bounce
/>
                <div key={product.id} className="col-lg-4 col-md-6 my-3 text-center">
                  <div className="card" style={{ width: "18rem" }}>
                    {/* This is way to sending Id  Link to={`/product/${product.id}`}  */}
                    <Link to={`/product/${product.id}`} style={ 
                        {
                            display:'flex',
                        justifyContent:'center',
                        alignItems:'center'
                    }
                    }>
                    <img src={product.imgSrc} class="card-img-top" alt="..." />
                    </Link>
                    <div className="card-body">
                      <h5 className="card-title">{product.title}</h5>
                      <p className="card-text">{product.description}</p>
                      <button className="btn btn-primary mx-3">{product.price}{" "}₹</button>
                      <Link 
                      onClick={()=>addToCart(product.id,product.price,product.title,product.description,product.imgSrc)}
                      to={'/cart'} 
                      className="btn btn-warning">Add To Cart</Link>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Product;
