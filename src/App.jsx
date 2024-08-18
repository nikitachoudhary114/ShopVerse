import React from "react";

import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

import New from "./pages/NewCollection/New";
import Product from "./pages/Product/Product";
import Footer from "./components/Footer/Footer";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    <div className="app bg-gray-900 text-gray-100">
      <Navbar />
      <Routes>
        <Route path="/new" element={<New />} />
        <Route path="/new/:newId" element={<Product />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
