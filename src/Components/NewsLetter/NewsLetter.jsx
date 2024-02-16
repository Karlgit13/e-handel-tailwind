import React from "react";

const NewsLetter = () => {
  return (
    <div className="flex justify-center my-5">
      <div className="flex justify-evenly place-items-center py-5 max-w-7xl w-full offersBG md:rounded-md px-2">
        <div className="">
          <h1>Get exclusive offers on your email!</h1>
          <p>subscribe to our newsletter and stay updated</p>
        </div>
        <div className="">
          <input type="email" placeholder="Your email id" />
          <button className="red-button">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
