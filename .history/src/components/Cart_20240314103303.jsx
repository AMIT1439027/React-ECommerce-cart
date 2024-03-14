import React from "react";

const Cart = ({ cart, setCart }) => {
  return (
    <>
      <div className="container">
        {cart.map((product) => {
          return <>
          </>;
        })}
      </div>
    </>
  );
};

export default Cart;
