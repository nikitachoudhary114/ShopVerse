import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";

function Item({ id, name, image, new_price, old_price }) {
  return (
    <div className="p-4 max-w-lg mx-auto bg-white rounded-lg shadow-md">
      <div className="w-[350px] m-2 transition-transform transform hover:scale-105">
        <Link to={`/new/${id}`}>
          <img
            onClick={window.scrollTo({ top: 0, behavior: "smooth" })}
            src={image}
            alt={name}
            className="w-full h-[350px] object-cover rounded-md"
          />
        </Link>
        <p className="my-1 mt-2 font-bold">{name}</p>
        <img src={assets.rating} alt="rating" className="w-25 h-auto" />
        <div className="flex gap-5 mt-2">
          <div className="text-red-500  text-lg font-semibold">
            ${new_price}
          </div>
          <div className="text-gray-500 text-lg font-medium line-through">
            ${old_price}
          </div>
        </div>
        <button className="bg-yellow-400 p-2 rounded-xl mt-4">
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default Item;
