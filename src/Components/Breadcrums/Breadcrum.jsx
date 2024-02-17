import React from "react";
import blackArrow from "../../Assets/blackarrow.jpg";
import { Link } from "react-router-dom";

const Breadcrum = (props) => {
  const { product } = props;

  const getCategoryPath = (category) => {
    switch (category) {
      case "men":
        return "/mens";
      case "women":
        return "/womens";
      case "kid":
        return "/kids";
      default:
        return "/";
    }
  };

  return (
    <div className="flex flex-row place-items-center gap-2 p-2 justify-center">
      <Link to={"/"}>Home</Link> <img className="w-3 h-3" src={blackArrow} alt="arrowIcon" />{" "}
      <Link to={"/"}>Shop</Link> <img className="w-3 h-3" src={blackArrow} alt="arrowIcon" />{" "}
      <Link to={getCategoryPath(product.category)}>{product.category}</Link>{" "}
      <img className="w-3 h-3" src={blackArrow} alt="" />{" "}
      <span className=" line-clamp-1">{product.name}</span>
    </div>
  );
};

export default Breadcrum;
