"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 1));
    }, 30);

    return () => clearInterval(progressInterval);
  }, [currentIndex]);

  return (
    <div className="homeBackground">
      {/* top banner image */}
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
      {/* slider section */}
      <div className="w-full bg-[#f7f7f7] ">
        <div className="flex-c pt-12 pb-8 max-w-container gap-4 md:flex-r md:gap-8">
          <div className="w-full md:w-[70%]">
            <div className="relative w-full mx-auto">
              {/* Image container */}
              <div className="overflow-hidden w-full">
                <div className="flex transition-transform duration-1000" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                  {images.map((image, index) => (
                    <img key={index} src={image} alt={`Image ${index + 1}`} className="w-full object-cover" />
                  ))}
                </div>
              </div>

              {/* Progress indicator */}
              <div className="flex justify-center space-x-2 mt-4">
                {images.map((_, id) => (
                  <div key={id} className="relative w-16 h-1 bg-gray-300 rounded overflow-hidden">
                    <div
                      className={`absolute top-0 left-0 h-full bg-gray-800 transition-all`}
                      style={{
                        width: currentIndex === id ? `${progress}%` : "0%",
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full md:w-[31%]">
            <h2 className="text-sm text-[#0d0d0d] font-semibold tracking-[2px] md:text-base">Top Stories</h2>
            <div className="flex-c pt-5 gap-3 md:gap-6">
              {stories.map((e, i) => (
                <div key={i} className="flex-r justify-between md:gap-4">
                  <span className="text-lg text-[#666666] md:text-[40px] md:font-thin md:mt-6">{i + 1}</span>
                  <span className={`flex-c w-[91%] gap-2 md:flex-r md:gap-4 pb-3 md:pb-6 ${i !== 0 ? "border-b" : "md:border-b"} `}>
                    <div className="flex-c gap-2 md:w-auto md:order-last">
                      <h3
                        className="text-[#0d0d0d] text-base font-bold truncate overflow-hidden line-clamp-2"
                        style={{
                          display: "-webkit-box",
                          WebkitBoxOrient: "vertical",
                          WebkitLineClamp: 2,
                          whiteSpace: "normal",
                        }}
                      >
                        {e.title}
                      </h3>
                      <p className="text-[#666666] text-xs">
                        {e.name} | {e.time}
                      </p>
                    </div>
                    <Image
                      className={`w-[305px] h-[115px] object-cover rounded-[4px] md:w-[70px] md:h-[70px] md:rounded-sm ${
                        i === 0 ? "flex" : "hidden md:flex"
                      }`}
                      width={100}
                      height={100}
                      src={e.images}
                      alt="content image"
                    />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

const images = [
  "https://via.placeholder.com/600x400?text=Image+1",
  "https://via.placeholder.com/600x400?text=Image+2",
  "https://via.placeholder.com/600x400?text=Image+3",
  "https://via.placeholder.com/600x400?text=Image+4",
  "https://via.placeholder.com/600x400?text=Image+5",
];

const stories = [
  {
    title: "Syria On Verge Of Collapse As Terrorist Rebels Take Over Vast Swaths Of Country",
    images:
      "https://dw-wp-production.imgix.net/2024/12/GettyImages-2188564512.jpg?ar=1%3A1&fit=crop&crop=faces&w=3840&auto=format&ixlib=react-9.3.0)",
    time: "17",
    name: "By  Ryan Saavedra",
  },
  {
    title: "‘Hahahaha’: Kamala Campaign Account Deletes Post That Led To Tim Pool Defamation Suit",
    images:
      "https://dw-wp-production.imgix.net/2024/11/GettyImages-2182616600.jpg?ar=1%3A1&fit=crop&crop=faces&w=3840&auto=format&ixlib=react-9.3.0)",
    time: "19hrs ago",
    name: "By  Brent Scher",
  },
  {
    title: "Here’s Why The State Dropped Top Charge In Daniel Penny Case, And Why Defense Is Calling Foul",
    images:
      "https://dw-wp-production.imgix.net/2024/11/GettyImages-2181582532.jpg?ar=1%3A1&fit=crop&crop=faces&w=3840&auto=format&ixlib=react-9.3.0)",
    time: "19hrs ago",
    name: "By Amanda Prestigiacomo",
  },
  {
    title: "Democrats Still Trying To Unravel The Riddle Of Trump Victory",
    images:
      "https://dw-wp-production.imgix.net/2024/12/GettyImages-2174451453.jpg?ar=1%3A1&fit=crop&crop=faces&w=3840&auto=format&ixlib=react-9.3.0)",
    time: "19hrs ago",
    name: "By  Andrew Klava",
  },
  {
    title: "YouTube Demonetizes AI Porn Tutorial Videos",
    images:
      "https://dw-wp-production.imgix.net/2024/12/GettyImages-1763968863.jpg?ar=1%3A1&fit=crop&crop=faces&w=3840&auto=format&ixlib=react-9.3.0)",
    time: "19hrs ago",
    name: "By  Leif Le Mahieu",
  },
];
