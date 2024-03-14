import React from "react";

const Cart = ({ cart, setCart }) => {
  return (
    <>
      <div className="container">
        {cart.map((product) => {
          return(
            <>
                <div className="card mb-3" style={{width:'700px'}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={product.imgSrc} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">
         {product.discr} 
        </p>
        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
            </>
          )
        })}
      </div>
    </>
  );
};

export default Cart;
