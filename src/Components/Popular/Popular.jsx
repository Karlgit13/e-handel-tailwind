import React from "react";

import data_product from "../../Assets/data";
import Item from "../Item/Item";

const Popular = () => {
  return (
    <div className="flex flex-col place-items-center">
      <h1 className="text-center p-3">POPULAR IN WOMEN</h1>
      <hr />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-1 max-w-7xl">
        {data_product.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
