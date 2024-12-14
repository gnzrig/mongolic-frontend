"use client";

import DailyShows from "./daily-shows";
import Image from "next/image";
import Banner from "./watch-banner";

const Daily = () => {
  return (
    <div>
      <Banner />
      <div className="w-[55vw] h-[1px] bg-gradient-to-r from-white to-transparent mt-10"></div>
      <DailyShows />
      <div className="w-[55vw] h-[1px] bg-gradient-to-r from-white to-transparent mt-10"></div>
      <DailyShows />
      <div className="w-[55vw] h-[1px] bg-gradient-to-r from-white to-transparent mt-10"></div>
      <DailyShows />
      <div className="w-[55vw] h-[1px] bg-gradient-to-r from-white to-transparent mt-10"></div>
      <DailyShows />
    </div>
  );
};

export default Daily;
