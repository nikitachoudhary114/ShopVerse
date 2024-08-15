import React, { useState } from "react";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";

function Navbar() {
  const [menu, setMenu] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-between items-center p-4 z-20 bg-white shadow-md">
      <div className="flex items-center space-x-2">
        <img src={assets.logo} alt="ShopVerse Logo" className="w-12 h-auto" />
        <h3 className="text-xl font-semibold">ShopVerse</h3>
      </div>

      <div className="hidden md:flex space-x-4 list-none text-gray-700 text-sm cursor-pointer">
        <li
          onClick={() => setMenu("home")}
          className={`pb-2 ${
            menu === "home" ? "border-b-2 border-blue-600" : ""
          }`}
        >
          <Link to="/">Home</Link>
        </li>
        <li
          onClick={() => setMenu("new")}
          className={`pb-2 ${
            menu === "new" ? "border-b-2 border-blue-600" : ""
          }`}
        >
          <Link to="/new">New Arrival</Link>
        </li>
        <li
          onClick={() => setMenu("contact")}
          className={`pb-2 ${
            menu === "contact" ? "border-b-2 border-blue-600" : ""
          }`}
        >
          Contact-us
        </li>
      </div>

      <div className="hidden md:flex items-center space-x-4">
        <div className="relative">
          <img
            src={assets.basket_icon}
            alt="Basket Icon"
            className="w-8 h-auto"
          />
          <div className="absolute top-[-8px] right-[-8px] w-2.5 h-2.5 bg-red-500 rounded-full"></div>
        </div>
        <button className="bg-transparent text-sm text-gray-700 border border-red-500 py-2 px-6 rounded-full hover:bg-red-500 hover:text-white transition duration-300">
          Sign in
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          <i class="fa-solid fa-bars"></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden">
          <ul className="flex flex-col space-y-4 p-4 text-gray-700 text-sm">
            <li
              onClick={() => {
                setMenu("home");
                setIsOpen(false);
              }}
              className={`pb-2 ${
                menu === "home" ? "border-b-2 border-blue-600" : ""
              }`}
            >
              <Link to="/">Home</Link>
            </li>
            <li
              onClick={() => {
                setMenu("new");
                setIsOpen(false);
              }}
              className={`pb-2 ${
                menu === "new" ? "border-b-2 border-blue-600" : ""
              }`}
            >
              <Link to="/new">New Arrival</Link>
            </li>
            <li
              onClick={() => {
                setMenu("contact");
                setIsOpen(false);
              }}
              className={`pb-2 ${
                menu === "contact" ? "border-b-2 border-blue-600" : ""
              }`}
            >
              Contact-us
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
