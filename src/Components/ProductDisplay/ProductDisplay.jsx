import React, { useContext, useState } from "react";
import star_icon from "../../Assets/star_icon.png";
import star_dull_icon from "../../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
  const [selectedSize, setSelectedSize] = useState("");

  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  return (
    <div className="flex flex-col gap-1">
      <div>
        <div className="flex justify-center">
          <img
            className="w-full md:max-w-5xl md:rounded-md"
            src={product.image}
            alt=""
          />
        </div>
        <div className="flex justify-center mt-1">
          <div className="grid grid-cols-4 max-w-5xl gap-1">
            <img className=" md:rounded-md" src={product.image} alt="product" />
            <img className=" md:rounded-md" src={product.image} alt="product" />
            <img className=" md:rounded-md" src={product.image} alt="product" />
            <img className=" md:rounded-md" src={product.image} alt="product" />
          </div>
        </div>
      </div>
      <div
        className="flex flex-col md:place-items-center md:mt-5 gap-4
      "
      >
        <h1 className=" text-2xl md:text-4xl">{product.name}</h1>
        <div className="flex flex-row">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
        </div>
        <p>(122)</p>
        <div className="flex flex-row gap-4 text-2xl">
          <div className=" text-red-600">${product.new_price}</div>
          <div className="text-gray-600 line-through">${product.old_price}</div>
        </div>
        <div className="text-lg md:text-2xl">
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
        </div>
        <div>
          <h1 className=" text-2xl md:text-4xl md:text-center">Select Size</h1>
          <div className="flex flex-row gap-2">
            {["Small", "Medium", "Large", "XL", "XXL"].map((size) => (
              <button
                onClick={() => setSelectedSize(size)}
                key={size}
                className={` bg-white border border-black p-2 focus:bg-red-400 focus:border-white ${
                  selectedSize === size ? "selected" : ""
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
        <button
          className="bg-red-400 p-2 w-full md:w-auto"
          onClick={() => {
            addToCart(product.id);
          }}
        >
          ADD TO CART
        </button>
        <p className="text-sm">
          <span>Category :</span>Women, T-Shirt, Crop Top
        </p>
        <p className="text-sm -mt-3">
          <span>Tags :</span>Modern, Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
