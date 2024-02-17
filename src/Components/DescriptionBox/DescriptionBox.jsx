import React, { useState } from "react";

const DescriptionBox = () => {
  const [toggleDiv, setToggleDiv] = useState(false);

  const handleDiv = () => {
    setToggleDiv(!toggleDiv);
  };

  return (
    <div className="flex flex-col md:place-items-center mt-5 md:mt-10">
      <div className="flex flex-row">
        <div
          onClick={handleDiv}
          className={`border cursor-pointer p-4 ${toggleDiv ? "" : "fade"}`}
        >
          Description
        </div>
        <div
          onClick={() => setToggleDiv(false)}
          className={`border cursor-pointer p-4 ${toggleDiv ? "" : "fade"}`}
        >
          Reviews (0)
        </div>
      </div>
      {toggleDiv ? (
        <div className="p-4">
          <p>Description...</p>
          <p>More description...</p>
        </div>
      ) : (
        <div className="p-4">
          <p>Reviews...</p>
          <p>More reviews...</p>
        </div>
      )}
    </div>
  );
};

export default DescriptionBox;
