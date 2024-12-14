"use client";
import Image from "next/image";
import DiscussBanner from "../components/discuss-comps/discuss-banner";
import DiscussRow from "../components/discuss-comps/discuss-row";

const Discuss = () => {
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
      <DiscussBanner />
      <DiscussRow />
    </div>
  );
};

export default Discuss;
