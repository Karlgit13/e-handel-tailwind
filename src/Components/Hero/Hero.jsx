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
    <div className="heroBG flex justify-around p-1 py-12">
      <div className="">
        <div>
          <img className="w-6" src={hand_icon} alt="handIcon" />
        </div>
        <p>new</p>
        <p>collections</p>
        <p>for everyone</p>
        <button className="red-button" onClick={scrollThingy}>
          <div>Latest</div>
          <img className="w-6" src={arrow_icon} alt="arrowIcon" />
        </button>
      </div>
      <div className="">
        <img className="w-32" src={hero_image} alt="heroImage" />
      </div>
    </div>
  );
};

export default Hero;
