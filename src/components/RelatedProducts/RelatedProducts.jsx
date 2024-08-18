import React from "react";
import data_product from "../../assets/data";
import Item from "../Items/Item";

function RelatedProducts() {
  return (
    <div className="mt-8 bg-gray-900 p-8 rounded-lg">
      <h2 className="text-2xl text-center font-semibold mb-4 text-gray-100 relative">
        Related Products
        <span className="block w-32 h-1 bg-gray-600 mt-2 mx-auto"></span>
      </h2>
      <div className="flex justify-center flex-wrap gap-4">
        {data_product.map((item, i) => (
          <div key={i} className="transform scale-95">
            <Item
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
export default RelatedProducts;