"use client";
import CallOut from "../components/watch-comps/call-out";
import Image from "next/image";
import Commercial from "../components/watch-comps/commercial-link";
import Filter from "../components/watch-comps/filter";
import WatchShows from "../components/watch-comps/watch-shows";

const Watch = () => {
  return (
    <div className="bg-[#141414] w-full flex flex-col items-center ">
      <div className="homeBannerBack w-full h-[125px] md:h-[195px]">
        <div className="max-w-container-sm-full">
          <Image
            className="w-full hidden md:flex md:h-[195px] overflow-hidden object-cover"
            src="/image/homeTopBanner.png"
            width={2000}
            height={20}
            alt="banner image"
          />
          <Image
            className="w-full h-[125px] md:hidden overflow-hidden object-cover"
            src="/image/homeMobileBanner.png"
            width={2000}
            height={20}
            alt="banner image"
          />
        </div>
      </div>
      <Filter />
    </div>
  );
};

export default Watch;
