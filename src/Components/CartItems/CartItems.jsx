import React, { useContext } from "react";

import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../../Assets/cart_cross_icon.png";

const CartItems = () => {
  const { all_product, cartItems, removeFromCart, getTotalCartAmount } =
    useContext(ShopContext);
  return (
    <div className="flex flex-col w-full text-lg md:text-2xl md:py-10 py-5">
      <div className="grid grid-cols-6 place-items-center p-2 font-bold">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div className="flex w-full">
              <div className="grid grid-cols-6 place-items-center p-2">
                <img
                  className=" w-10 md:w-20 rounded-sm"
                  src={e.image}
                  alt=""
                />
                <p className=" line-clamp-2">{e.name}</p>
                <p>${e.new_price}</p>
                <button>{cartItems[e.id]}</button>
                <p>${e.new_price * cartItems[e.id]}</p>
                <img
                  src={remove_icon}
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                  alt=""
                />
              </div>
            </div>
          );
        }
        return null;
      })}
      <div className="flex flex-col p-2 mt-10 md:mt-56 md:flex-row md:place-items-center md:justify-evenly w-full text-lg md:text-2xl">
        <div>
          <h1 className=" font-bold">Cart Totals</h1>
          <div>
            <div className="flex justify-between">
              <p>Subtotal</p>
              <p className="font-bold">${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="flex justify-between">
              <p>Shipping Fee</p>
              <p className="font-bold">Free</p>
            </div>
            <hr />
            <div className="flex justify-between">
              <h3>Total</h3>
              <h3 className="font-bold">${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button className="bg-red-400 p-2 rounded-sm w-full mt-2">
            PROCEED TO CHECKOUT
          </button>
        </div>
        <div className="mt-12">
          <p>If you have a promo code, Enter it here</p>
          <div className="flex flex-row">
            <input
              className="border p-2"
              type="text"
              placeholder="promo code"
            />
            <button className="bg-red-400 p-2 rounded-sm">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
