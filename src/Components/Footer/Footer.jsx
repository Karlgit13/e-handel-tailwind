import React from "react";

import footer_logo from "../../Assets/logo_big.png";
import instagram_icon from "../../Assets/instagram_icon.png";
import pintester_icon from "../../Assets/pintester_icon.png";
import whatsapp_icon from "../../Assets/whatsapp_icon.png";

const Footer = () => {
  return (
    <div className="w-full flex justify-center heroBG py-2 md:py-4 mt-7 md:mt-14">
      <div className="w-full grid grid-cols-3 place-items-center">
        <div className="flex">
          <img className="w-12 md:w-auto" src={footer_logo} alt="footerLogo" />
          <p className="text-xs md:text-2xl">SHOPPER</p>
        </div>
        <ul>
          <li>Company</li>
          <li>Products</li>
          <li>Offices</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className="">
          <div>
            <img src={instagram_icon} alt="instaIcon" />
          </div>
          <div className="">
            <img src={pintester_icon} alt="pintesterIcon" />
          </div>
          <div className="">
            <img src={whatsapp_icon} alt="whatsappIcon" />
          </div>
        </div>
        <div className="col-span-3 mt-3">
          <p className="text-center">Copyright @ 2024 - All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
