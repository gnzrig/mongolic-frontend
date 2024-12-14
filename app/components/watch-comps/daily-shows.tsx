"use client";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";

const jsonData = [
  {
    imageUrl:
      "https://www.dailywire.com/_next/image?url=https%3A%2F%2Fdaily-wire-production.imgix.net%2Fepisodes%2Fcm4g01i600e9k0726eja650kl%2Fcm4g01i600e9k0726eja650kl-1733688570933.jpg&w=384&q=75",
    text: "Show 1",
  },
  {
    imageUrl:
      "https://www.dailywire.com/_next/image?url=https%3A%2F%2Fdaily-wire-production.imgix.net%2Fepisodes%2Fcm4cxuer4852z0886ohewhjc4%2Fcm4cxuer4852z0886ohewhjc4-1733503614511.jpg&w=384&q=75",
    text: "Show 2",
  },
  {
    imageUrl:
      "https://www.dailywire.com/_next/image?url=https%3A%2F%2Fdaily-wire-production.imgix.net%2Fepisodes%2Fcm4bhoiltg6gg08940p207i7u%2Fcm4bhoiltg6gg08940p207i7u-1733421470355.jpg&w=384&q=75",
    text: "Show 3",
  },
  {
    imageUrl:
      "https://www.dailywire.com/_next/image?url=https%3A%2F%2Fdaily-wire-production.imgix.net%2Fepisodes%2Fcm4a2q5z30cv90850hdjhkoba%2Fcm4a2q5z30cv90850hdjhkoba-1733333983147.jpg&w=384&q=75",
    text: "Show 4",
  },
  {
    imageUrl:
      "https://www.dailywire.com/_next/image?url=https%3A%2F%2Fdaily-wire-production.imgix.net%2Fepisodes%2Fcm48lu7vd5kzg0898mrj88lr6%2Fcm48lu7vd5kzg0898mrj88lr6-1733244421720.jpg&w=384&q=75",
    text: "Show 5",
  },
];

const DailyShows = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isScrollableLeft, setIsScrollableLeft] = useState(false);
  const [isScrollableRight, setIsScrollableRight] = useState(true);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setIsScrollableLeft(scrollLeft > 0);
      setIsScrollableRight(scrollLeft + clientWidth < scrollWidth);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -200 : 200;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    handleScroll(); // Initialize the scroll state
    const container = scrollContainerRef.current;
    container?.addEventListener("scroll", handleScroll);
    return () => {
      container?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <style jsx>{`
        /* Hide scrollbar for Webkit browsers */
        .scrollbar-hidden::-webkit-scrollbar {
          display: none;
        }
        /* Hide scrollbar for all other browsers */
        .scrollbar-hidden {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
      <div className="relative flex-col items-center my-10">
        <div className="flex justify-between mb-5">
          <h1 className="text-white text-2xl">The Ben Shapiro Show</h1>
          <button className="text-black px-5 bg-white rounded-3xl font-semibold">
            View All
          </button>
        </div>

        <div
          ref={scrollContainerRef}
          className="w-[55vw] h-[20vh] flex overflow-x-scroll scrollbar-hidden space-x-5 items-center"
        >
          {isScrollableLeft && (
            <button
              className="absolute left-2 bg-black bg-opacity-80 text-white w-7 h-7 rounded-full flex items-center justify-center"
              onClick={() => scroll("left")}
            >
              &larr;
            </button>
          )}

          {jsonData.map((item, index) => (
            <div key={index} className="flex-shrink-0 text-center text-white">
              <div
                className={`relative w-[14vw] h-[16vh] rounded-2xl ${
                  item.imageUrl && item.imageUrl !== "" ? "" : "bg-gray-500"
                }`}
              >
                {item.imageUrl && item.imageUrl !== "" ? (
                  <Image
                    src={item.imageUrl}
                    alt={item.text}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-2xl"
                  />
                ) : null}
              </div>
              <p className="text-[gray] mt-1 text-sm">{item.text}</p>
            </div>
          ))}
          {isScrollableRight && (
            <button
              className="absolute right-2 bg-black bg-opacity-80 text-white w-7 h-7 rounded-full"
              onClick={() => scroll("right")}
            >
              &rarr;
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default DailyShows;
