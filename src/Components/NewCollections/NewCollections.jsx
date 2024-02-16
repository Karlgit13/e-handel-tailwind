import React from "react";

import new_collection from "../../Assets/new_collections";
import Item from "../Item/Item";

const NewCollections = () => {
  return (
    <div className="flex flex-col place-items-center">
      <h1 className="text-center p-3">NEW COLLECTIONS</h1>
      <hr />
      <div className="grid grid-cols-2 md:grid-cols-4 max-w-7xl gap-1">
        {new_collection.map((item, i) => {
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

export default NewCollections;
