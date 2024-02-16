import React from "react";

import hand_icon from "../../Assets/hand_icon.png";
import arrow_icon from "../../Assets/arrow.png";
import hero_image from "../../Assets/hero_image.png";

const Hero = () => {
  const scrollThingy = () => {
    const newCollectionsDiv = document.querySelector(".new-collections");
    newCollectionsDiv.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="heroBG flex justify-around p-1 py-12 place-items-center">
      <div className="">
        <div>
          <img className="w-6" src={hand_icon} alt="handIcon" />
        </div>
        <p>new</p>
        <p>collections</p>
        <p>for everyone</p>
        <button className="red-button mt-3" onClick={scrollThingy}>
          <div>Latest</div>
          <img className="w-4" src={arrow_icon} alt="arrowIcon" />
        </button>
      </div>
      <div className="">
        <img className="w-32 md:w-64" src={hero_image} alt="heroImage" />
      </div>
    </div>
  );
};

export default Hero;
