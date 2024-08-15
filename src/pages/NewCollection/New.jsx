import React from "react";
import all_product from "../../assets/all_product";
import Item from "../../components/Items/Item";

function New() {
  return (
    <div className="new-collection">
      <h1 className="text-center text-2xl font-bold mt-5">
        Popular Collections
      </h1>
      
      <div className="flex flex-wrap justify-center items-center gap-2 p-8 mb-4">
        {all_product.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
             
          />
        ))}
      </div>
    </div>
  );
}

export default New;
