import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from "../Assets/dropdown_icon.png";
import Item from "../Components/Item/Item";

const ShopCategory = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [currentSortOption, setCurrentSortOption] = useState("");
  const { all_product } = useContext(ShopContext);

  const toggleSort = () => {
    setIsOpen(!isOpen);
  };

  const sortFakeMostPopular = () => {
    const filteredAndSorted = [...all_product]
      .filter((item) => item.category === props.category)
      .sort((a, b) => b.fake_ratings - a.fake_ratings);
    setSortedProducts(filteredAndSorted);
    setCurrentSortOption("Most Popular");
  };

  const sortLowestPrices = () => {
    const lowestPrices = [...all_product]
      .filter((item) => item.category === props.category)
      .sort((a, b) => a.new_price - b.new_price);
    setSortedProducts(lowestPrices);
    setCurrentSortOption("Lowest Price");
  };

  const sortHighestPrices = () => {
    const highestPrices = [...all_product]
      .filter((item) => item.category === props.category)
      .sort((a, b) => b.new_price - a.new_price);
    setSortedProducts(highestPrices);
    setCurrentSortOption("Highest Price");
  };

  useEffect(() => {
    setSortedProducts(
      all_product.filter((item) => item.category === props.category)
    );
  }, [all_product, props.category]);

  return (
    <div className="flex flex-col w-full">
      <img className="w-full" src={props.banner} alt="banner" />
      <div className="flex justify-between p-1 bg-white pb-4 pt-4">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="flex relative cursor-pointer" onClick={toggleSort}>
          {currentSortOption ? `${currentSortOption}` : "Sort by "}
          <img
            className="w-3 h-2 mt-2 ml-2 "
            src={dropdown_icon}
            alt="sort icon"
          />
          {isOpen && (
            <div className="flex flex-col absolute bg-white top-6 md:top-8 -right-1 p-1 w-28 md:w-40 gap-1">
              <button
                className="bg-blue-400 p-1 rounded-md"
                onClick={sortFakeMostPopular}
              >
                Most Popular
              </button>
              <button
                className="bg-blue-400 p-1 rounded-md"
                onClick={sortLowestPrices}
              >
                Lowest Price
              </button>
              <button
                className="bg-blue-400 p-1 rounded-md"
                onClick={sortHighestPrices}
              >
                Highest Price
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3 md:grid-cols-4">
        {sortedProducts.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
      {/* <div>Explore more</div> */}
    </div>
  );
};

export default ShopCategory;
