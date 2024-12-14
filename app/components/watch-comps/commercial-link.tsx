"use client";
import Image from "next/image";

const Commercial = () => {
  return (
    <div className="flex w-[55vw] my-20 justify-between">
      <div>
        <div>
          <Image src="" alt="bentkey" />
        </div>
        <h1 className="text-white text-4xl font-bold mt-4">
          Unlock a New Adventure in<br></br>Kids Entertainment.
        </h1>
        <p className="text-white my-4 text-xl">
          1 year free with select DailyWire+<br></br>plans
        </p>
        <button className="bg-white text-black text-sm font-semibold w-[10vw] h-[5vh] rounded-3xl shadow-md">
          Discover Bentkey
        </button>
      </div>
      <div>
        <Image className="w-[20vw]" src="" alt="" />
      </div>
    </div>
  );
};

export default Commercial;
