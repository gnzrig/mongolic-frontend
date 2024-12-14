"use client";
import Image from "next/image";

import Commercial from "./commercial-link";
import WatchShows from "./watch-shows";

const Banner = () => {
  return (
    <div>
      <div className="bg-[#26262699] w-[55vw] h-[120px] rounded-3xl flex">
        <div className="flex-[2] flex items-center justify-center">
          <Image
            src="https://www.dailywire.com/_next/image?url=https%3A%2F%2Fdailywireplus-v2.imgix.net%2Fimages%2Fimage-overrides%2F44eb306c-154f-4c7b-b3e8-a1a570bb621a.jpg%3Fauto%3Dcompress%26cs%3Dorigin&w=384&q=75"
            alt="zurag-1"
            width={0}
            height={0}
            className="w-full h-full object-cover rounded-l-3xl"
          />
        </div>

        <div className="flex-[7] flex items-center justify-between text-white">
          {/* Text Section */}
          <div className="flex flex-col ml-5 mr-5">
            <p className="font-semibold text-lg">Am I Racist?</p>
            <p className="text-sm">
              Experience the #1 documentary of the decade. Follow Matt Walsh's
              hilarious journey as he goes deep undercover to infiltrate and
              expose the weird world of diversity, equity, and inclusion. Now
              streaming exclusively on DailyWire+.
            </p>
          </div>

          <button className="bg-white text-black text-sm font-semibold px-6 py-2 mr-5 rounded-3xl shadow-md">
            Watch
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
