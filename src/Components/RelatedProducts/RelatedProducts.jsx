import React, { useContext } from "react";
import Item from "../Item/Item";
import { ShopContext } from "../../Context/ShopContext";

const RelatedProducts = ({ currentCategory }) => {
  const { all_product } = useContext(ShopContext);

  const filteredProducts = all_product.filter(
    (item) => item.category === currentCategory
  );

  return (
    <div className="flex flex-col">
      <h1 className="text-lg md:text-3xl text-center p-2">Related Products</h1>
      <hr />
      <div className="flex flex-row overflow-scroll">
        {filteredProducts.map((item, i) => {
          return (
            <div className="flex-grow min-w-[250px] md:min-w-[350px] p-2">
            <Item
              key={i}
              id={item.id}
              name={item.name}
              category={item.category}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            /></div>
          );
        })}
      </div>
    </div>
  );
};

export default RelatedProducts;
