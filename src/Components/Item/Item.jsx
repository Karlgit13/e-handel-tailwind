import React from "react";

import { Link } from "react-router-dom";

const Item = (props) => {
  return (
    <div className="flex flex-col place-items-center">
      <Link to={`/product/${props.id}`}>
        <img className=" w-full rounded" onClick={window.scrollTo(0, 0)} src={props.image} alt="" />
      </Link>
      <p className="text-center max-w-xs line-clamp-2 md:line-clamp-4">{props.name}</p>
      <div className="flex flex-row gap-2">
        <div className="text-red-600 ">${props.new_price}</div>
        <div className=" text-gray-600 line-through">${props.old_price}</div>
      </div>
    </div>
  );
};

export default Item;
