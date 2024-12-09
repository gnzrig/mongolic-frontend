"use client";

import { useState } from "react";
import Browser from "./call-out";
import Daily from "./daily";

const Filter = () => {
  const [selectedButton, setSelectedButton] = useState<number>(0);

  const handleButtonClick = (index: number) => {
    setSelectedButton(index);
  };

  const renderContent = () => {
    switch (selectedButton) {
      case 0:
        return <Browser />;
      case 1:
        return <Daily />;
      case 2:
        return <div>Peterson Content</div>;
      case 3:
        return <div>Prager Content</div>;
      case 4:
        return <div>Movies Content</div>;
      case 5:
        return <div>Bentkey Content</div>;
      default:
        return <div>Select an option to view content.</div>;
    }
  };

  return (
    <div>
      {/* Filter Buttons */}
      <div className="bg-[#26262699] w-[55vw] h-[45px] my-10 rounded-3xl flex justify-between items-center">
        {["Browser", "Daily", "Peterson", "Prager", "Movies", "Bentkey"].map(
          (option, index) => (
            <button
              key={index}
              onClick={() => handleButtonClick(index)}
              className={`flex-1 text-center py-2 rounded-3xl transition-all duration-300 font-semibold text-lg ${
                selectedButton === index ? "bg-white text-black" : "text-white"
              }`}
            >
              {option}
            </button>
          )
        )}
      </div>

      {/* Rendered Content */}
      <div className="content-container mt-5">{renderContent()}</div>
    </div>
  );
};

export default Filter;
