import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import ProductDetail from "./components/ProductDetail";
import Searchitem from "./components/Searchitem";
import Cart from "./components/Cart";
import { items } from "./components/Data";

const App = () => {
  const [data, setData] = useState([...items]);
  const [cart, setCart] = useState([]);
  return (
    <>
      <Router>
        <Navbar setData={setData} />
        <Routes>
          <Route path="/" element={<Product cart={cart} items={data} />} />
          <Route path="/cart" element={<Cart />} />
          {/* Dynamic Routes  */}
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/search/:term" element={<Searchitem />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
