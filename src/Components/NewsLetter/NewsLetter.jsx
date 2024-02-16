import React from "react";

const NewsLetter = () => {
  return (
    <div className="flex justify-center my-5">
      <div className="flex flex-col gap-5 text-center text-lg md:text-4xl justify-evenly place-items-center py-5 md:py-14 max-w-7xl w-full offersBG md:rounded-md px-2">
        <div className="">
          <h1>Get exclusive offers on your email!</h1>
          <p>subscribe to our newsletter and stay updated</p>
        </div>
        <div className="inline-flex">
          <input
            className=" pl-2 rounded-lg md:p-4"
            type="email"
            placeholder="Your email adress"
          />
          <button className="red-button">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
