import React from "react";

import exclusive_image from "../../Assets/exclusive_image.png";

const Offers = () => {
  const scrolly = () => {
    const popularDiv = document.querySelector(".popular");
    popularDiv.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex justify-center my-5">
      <div className="flex justify-evenly place-items-center max-w-7xl w-full offersBG md:rounded-md py-2 px-2">
        <div className=" text-lg md:text-4xl">
          <h1>Exclusive</h1>
          <h1>Offers For You</h1>
          <p>ONLY ON BEST SELLERS PRODUCTS</p>
          <button className="red-button mt-2" onClick={scrolly}>
            Check Now
          </button>
        </div>
        <div className="">
          <img
            className="w-32 md:w-64"
            src={exclusive_image}
            alt="exclusiveImage"
          />
        </div>
      </div>
    </div>
  );
};

export default Offers;
