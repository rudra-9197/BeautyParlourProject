import React, { useEffect, useState } from "react";
import axios from "axios";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import Admin from "./Pages/Admin";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (

    <Router>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="Home/Product/" element={<Product/>} />
       < Route path="/Admin" element={<Admin/>} />
      </Routes>
    </Router>

  );
}

export default App;
