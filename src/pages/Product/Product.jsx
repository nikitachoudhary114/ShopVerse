import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../Context/ProductContext";
import { assets } from "../../assets/assets";

import Description from "../../components/Description/Description";
import RelatedProducts from "../../components/RelatedProducts/RelatedProducts";

function Product() {
  const { newId } = useParams();
  const { all_product } = useContext(ProductContext);
  const product = all_product.find((item) => item.id === parseInt(newId));

  if (!product) {
    return <div className="text-center text-red-500">Product not found</div>;
  }

  return (
    <>
      <div className="flex flex-col lg:flex-row mx-4 lg:mx-[170px] gap-8 mt-8 bg-gray-800 p-6 rounded-lg shadow-md">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex flex-row lg:flex-col gap-2 lg:gap-4">
            {/* Thumbnails */}
            <img
              src={product.image}
              alt=""
              className="w-24 lg:w-32 h-20 lg:h-32 rounded-lg"
            />
            <img
              src={product.image}
              alt=""
              className="w-24 lg:w-32 h-20 lg:h-32 rounded-lg"
            />
            <img
              src={product.image}
              alt=""
              className="w-24 lg:w-32 h-20 lg:h-32 rounded-lg"
            />
            <img
              src={product.image}
              alt=""
              className="w-24 lg:w-32 h-20 lg:h-32 rounded-lg"
            />
           
          </div>
          <div>
            <img
              className="w-full lg:w-[500px] xl:w-[700px] lg:h-[600px] rounded-md"
              src={product.image}
              alt=""
            />
          </div>
        </div>
        <div className="lg:ml-[70px] flex flex-col">
          <h1 className="text-white text-2xl lg:text-4xl font-bold">
            {product.name}
          </h1>
          <div className="flex items-center gap-2 mt-2 lg:mt-3 text-base lg:text-lg text-gray-300">
            <img src={assets.rating} alt="rating" />
            <p>(122)</p>
          </div>
          <div className="flex gap-4 lg:gap-8 my-6 lg:my-10 text-lg lg:text-2xl font-bold">
            <div className="text-gray-500 line-through">
              ${product.old_price}
            </div>
            <div className="text-[#ff4141]">${product.new_price}</div>
          </div>
          
          <button className=" w-1/3 mt-4 lg:mt-6 px-4 py-2 lg:px-6 lg:py-3 bg-[#ff4141] text-white rounded-md cursor-pointer text-sm lg:text-base">
            ADD TO CART
          </button>
          
        </div>
      </div>

      <Description />
      <RelatedProducts />
    </>
  );
}
export default Product;
