import React, { useContext, useState } from "react";
import logo from "../../Assets/logo.png";
import cart_icon from "../../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import barsSolid from "../../Assets/bars-solid.svg";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getTotalCartItems } = useContext(ShopContext);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex flex-row w-screen justify-between bg-white text-black">
      <div className="p-1">
        <Link to="/">
          <img className="w-7" src={logo} alt="logo" />
        </Link>
        <Link to="/">
          <p>E-Commerce</p>
        </Link>
      </div>
      <div className="hidden md:flex flex-grow justify-center">
        <ul className="flex gap-5 items-center text-center">
          <li
            onClick={() => {
              setMenu("shop");
            }}
          >
            <Link to="/">Shop</Link>
            {menu === "shop" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("mens");
            }}
          >
            <Link to="/mens">Men</Link>
            {menu === "mens" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("women");
            }}
          >
            <Link to="/womens">Women</Link> {menu === "women" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("kids");
            }}
          >
            <Link to="/kids">Kids</Link> {menu === "kids" ? <hr /> : <></>}
          </li>
        </ul>
      </div>
      <div className="flex flex-row items-center relative ml-auto md:pr-5">
        <Link to="/login">
          <button className="hidden">Login</button>
        </Link>
        <Link to="/cart">
          <img className="w-7" src={cart_icon} alt="cart icon" />
        </Link>
        <div className=" pl-1 pr-1 -mt-7 bg-red-500 rounded-2xl tex-xs mr-1">
          {getTotalCartItems()}
        </div>
      </div>

      <div className="flex relative" onClick={toggleMenu}>
        <img className="w-7 md:hidden mr-1" src={barsSolid} alt="barsSolid" />

        {isMenuOpen && (
          <div
            className={`flex flex-row absolute right-0 top-14 w-screen bg-white justify-evenly p-4 transition-all duration-500 ease-in-out ${
              isMenuOpen
                ? "opacity-100 scale-100 max-h-screen"
                : "opacity-0 scale-95 max-h-0"
            }`}
            style={{ transformOrigin: "top" }}
          >
            <>
              <Link to="/" onClick={() => setIsMenuOpen(false)}>
                Shop
              </Link>
              <Link to="/mens" onClick={() => setIsMenuOpen(false)}>
                Men
              </Link>
              <Link to="/womens" onClick={() => setIsMenuOpen(false)}>
                Women
              </Link>
              <Link to="/kids" onClick={() => setIsMenuOpen(false)}>
                Kids
              </Link>
              <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                Login
              </Link>
            </>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
