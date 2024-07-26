import React from "react";
import Navbar from "./components/Navbar";
import { Home } from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Cart from "./pages/cart";

function App() {
  return (
    <div className="flex flex-col justify-center">
      <div className="w-full">
        <Navbar/>
      </div><br/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </div>
  );
}

export default App;