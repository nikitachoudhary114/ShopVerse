import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";

function Item({ id, name, image, new_price, old_price }) {
  return (
    <div className="p-4 w-full sm:w-[200px] mx-auto bg-gray-800 text-gray-100 rounded-lg shadow-md">
      <div className="w-full m-2 transition-transform transform hover:scale-105">
        <Link to={`/new/${id}`}>
          <img
            src={image}
            alt={name}
            className="w-full h-[180px] object-cover rounded-md"
          />
        </Link>
        <p className="my-2 font-bold">{name}</p>
        <img src={assets.rating} alt="rating" className="w-25 h-auto" />
        <div className="flex gap-5 mt-2">
          <div className="text-red-500  text-lg font-semibold">
            ${new_price}
          </div>
          <div className="text-gray-400 text-lg font-medium line-through">
            ${old_price}
          </div>
        </div>
        <button className="bg-yellow-500 p-2 rounded-xl mt-4 w-full">
          Add to cart
        </button>
      </div>
    </div>
  );
}
export default Item;
