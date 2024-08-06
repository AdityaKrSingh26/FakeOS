import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import ProductDescription from './pages/ProductDescription/ProductDescription';
import Favourite from './pages/Favourite/Favourite';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductDescription />} />
          <Route path="/fav" element={<Favourite />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
