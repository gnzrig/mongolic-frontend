"use client";

import { useState } from "react";

const Filter = () => {
  const [selectedButton, setSelectedButton] = useState<number>(0); // Default selected index is 0

  const handleButtonClick = (index: number) => {
    setSelectedButton(index);
  };

  return (
    <div className='bg-[#26262699] w-[50vw] h-[45px] my-10 rounded-3xl flex justify-between'>
      {["Browser", "Daily", "Peterson", "Prager", "Movies", "Bentkey"].map((option, index) => (
        <button
          key={index}
          onClick={() => handleButtonClick(index)}
          className={`px-11 rounded-3xl transition-all duration-300 font-semibold text-lg ${
            selectedButton === index ? "bg-white text-black" : "text-white"
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default Filter;
