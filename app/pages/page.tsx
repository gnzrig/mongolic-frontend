"use client";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import { useState, useEffect, useRef } from "react";
import { News } from "../components/News";

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
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 1
      );
    }, 30);

    return () => clearInterval(progressInterval);
  }, [currentIndex]);
  const sliderRef = useRef<Slider | null>(null);
  const next = () => {
    sliderRef.current?.slickNext();
  };
  const previous = () => {
    sliderRef.current?.slickPrev();
  };

  const settings = {
    infinite: false,
    speed: 500,
    slidesToScroll: 1,
    arrows: false,
    slidesToShow: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

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
                <div
                  className="flex transition-transform duration-1000"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {images.map((image, index) => (
                    <Image
                      key={index}
                      src={image}
                      alt={`Image ${index + 1}`}
                      className="w-full object-cover"
                    />
                  ))}
                </div>
              </div>

              {/* Progress indicator */}
              <div className="flex justify-center space-x-2 mt-4">
                {images.map((_, id) => (
                  <div
                    key={id}
                    className="relative w-16 h-1 bg-gray-300 rounded overflow-hidden"
                  >
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
            <h2 className="text-sm text-[#0d0d0d] font-semibold tracking-[2px] md:text-base">
              Top Stories
            </h2>
            <div className="flex-c pt-5 gap-3 md:gap-6">
              {stories.map((e, i) => (
                <div key={i} className="flex-r justify-between md:gap-4">
                  <span className="text-lg text-[#666666] md:text-[40px] md:font-thin md:mt-6">
                    {i + 1}
                  </span>
                  <span
                    className={`flex-c w-[91%] gap-2 md:flex-r md:gap-4 pb-3 md:pb-6 ${
                      i !== 0 ? "border-b" : "md:border-b"
                    } `}
                  >
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
                        By {e.name} | {e.time}
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
      {/*  black slick */}
      <div className="w-full homeEpisoderBack py-12">
        <div className="max-w-container flex-c relative">
          <div className="flex-between-center text-[#f5f5f5] pb-5 md:pb-16">
            <h2 className="uppercase text-sm font-semibold tracking-[2px] md:text-base">
              Latest Episodes
            </h2>
            <Link
              href="/node_modules"
              className="uppercase flex-r-center gap-2 font-semibold text-xs tracking-[.48px] md:text-base md:tracking-[.64px]"
            >
              View All
              <Image
                src="/icon/arrow.svg"
                width={24}
                height={24}
                alt="arrow icon"
              />
            </Link>
          </div>
          <div className="w-full relative md:py-10 text-black">
            <Slider ref={sliderRef} {...settings}>
              {episodes.map((e, i) => (
                <div key={i} className="w-[346px] flex-c px-2">
                  <Image
                    className="w-full md:h-[190px]"
                    src={e.image}
                    width={227}
                    height={127}
                    alt="content image"
                    unoptimized={true}
                  />
                  <h3
                    className="text-white mt-6 text-sm truncate overflow-hidden line-clamp-1 font-semibold leading-[150%]  md:text-[20px] md:leading-[135%]"
                    style={{
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: 1,
                      whiteSpace: "normal",
                    }}
                  >
                    {e.title}
                  </h3>
                  <p className="text-[#666] mt-2 text-xs md:text-sm">
                    {e.name} | {e.date}
                  </p>
                </div>
              ))}
            </Slider>
            <button
              className="hidden md:flex rounded-full bg-black w-8 h-8 flex-center absolute top-0 bottom-0 my-auto left-4 rotate-180"
              onClick={previous}
            >
              <Image
                className=""
                src="/icon/arrow-none-line.svg"
                width={24}
                height={24}
                alt="arrow icon"
              />
            </button>
            <button
              className="hidden md:flex rounded-full bg-black w-8 h-8 flex-center absolute top-0 bottom-0 my-auto right-4"
              onClick={next}
            >
              <Image
                className=""
                src="/icon/arrow-none-line.svg"
                width={24}
                height={24}
                alt="arrow icon"
              />
            </button>
          </div>
        </div>
      </div>
      {/* content setion */}
      <div className="w-full homeContentBack pt-6 md:pt-[96px] pb-10">
        <div className="max-w-container flex-c">
          <h2 className="uppercase text-sm font-semibold tracking-[2px] mb-12 text-center md:text-base text-[#0d0d0d]">
            Latest News
          </h2>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 md:gap-4">
            {news.map((e, i) => (
              <div key={i} className="md:bg-white">
                <News
                  image={e.image}
                  title={e.title}
                  name={e.name}
                  date={e.date}
                />
              </div>
            ))}
          </div>
          <button className="flex-c justify-start items-center cursor-pointer h-[40px] mt-12">
            <h3 className="uppercase text-[#666] font-bold text-center tracking-[1.5px] text-sm duration-300 pb-2 hover:pb-4">
              More stories
            </h3>
            <Image
              src="/icon/arrow-black.svg"
              width={20}
              height={20}
              alt="icon"
            />
          </button>
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
    title:
      "Syria On Verge Of Collapse As Terrorist Rebels Take Over Vast Swaths Of Country",
    images:
      "https://dw-wp-production.imgix.net/2024/12/GettyImages-2188564512.jpg?ar=1%3A1&fit=crop&crop=faces&w=3840&auto=format&ixlib=react-9.3.0)",
    time: "17",
    name: "Ryan Saavedra",
  },
  {
    title:
      "‘Hahahaha’: Kamala Campaign Account Deletes Post That Led To Tim Pool Defamation Suit",
    images:
      "https://dw-wp-production.imgix.net/2024/11/GettyImages-2182616600.jpg?ar=1%3A1&fit=crop&crop=faces&w=3840&auto=format&ixlib=react-9.3.0)",
    time: "19hrs ago",
    name: "Brent Scher",
  },
  {
    title:
      "Here’s Why The State Dropped Top Charge In Daniel Penny Case, And Why Defense Is Calling Foul",
    images:
      "https://dw-wp-production.imgix.net/2024/11/GettyImages-2181582532.jpg?ar=1%3A1&fit=crop&crop=faces&w=3840&auto=format&ixlib=react-9.3.0)",
    time: "19hrs ago",
    name: "Amanda Prestigiacomo",
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
    name: "Leif Le Mahieu",
  },
];

const episodes = [
  {
    title: "The Evolution of a Rockstar | Gene Simmons",
    image:
      "https://daily-wire-production.imgix.net/episodes/cm4deysa07who0894jg7y0wbm/cm4deysa07who0894jg7y0wbm-1733529937361.jpg",
    name: "The Sunday Special",
    date: "Dec 8, 2024",
  },
  {
    title: "Miracles",
    image:
      "https://daily-wire-production.imgix.net/episodes/cm4bnan9iljni08786e1rjecn/cm4bnan9iljni08786e1rjecn-1733422995299.jpg",
    name: "The Gospels",
    date: "Dec 8, 2024",
  },
  {
    title: "Hunter’s Big Pardon: Now With Extra Corruption!",
    image:
      "https://daily-wire-production.imgix.net/episodes/cm4dldiu31zvm0806ks67np5g/cm4dldiu31zvm0806ks67np5g-1733540702673.jpg",
    name: "Ben After Dark",
    date: "Dec 8, 2024",
  },
  {
    title: "This Is What 'America Last' Looks Like",
    image:
      "https://daily-wire-production.imgix.net/episodes/cm4dinz0wgx8u0894byhxgv23/cm4dinz0wgx8u0894byhxgv23-1733536151354.jpg",
    name: "The Comments Section with Brett Cooper",
    date: "Dec 8, 2024",
  },
  {
    title: "The Viral Debate Between American and Russian Men",
    image:
      "https://daily-wire-production.imgix.net/episodes/cm4dia6nhpxwc0894r7w86403/cm4dia6nhpxwc0894r7w86403-1733535508068.jpg",
    name: "The Comments Section with Brett Cooper",
    date: "Dec 7, 2024",
  },
  {
    title: "Meghan Markle’s Public Image Takes Another Hit",
    image:
      "https://daily-wire-production.imgix.net/episodes/cm4dhva00fmsb0826dc73j4so/cm4dhva00fmsb0826dc73j4so-1733534812577.jpg",
    name: "The Comments Section with Brett Cooper",
    date: "Dec 7, 2024",
  },
];

const news = [
  {
    title: "The Rise of Electric Vehicles in 2024",
    image:
      "https://dw-wp-production.imgix.net/2024/12/GettyImages-2188586022-scaled.jpg?ar=16%3A6&fit=crop&crop=faces&w=3840&auto=format&ixlib=react-9.3.0)",
    name: "Technology",
    date: "Dec 9, 2024",
  },
  {
    title: "AI Breakthrough: ChatGPT 5 Released",
    image:
      "https://dw-wp-production.imgix.net/2024/12/GettyImages-1776716327.jpg?ar=16%3A6&fit=crop&crop=faces&w=3840&auto=format&ixlib=react-9.3.0)",
    name: "Science",
    date: "Dec 9, 2024",
  },
  {
    title: "World Cup 2024: Surprising Underdogs",
    image:
      "https://dw-wp-production.imgix.net/2024/12/GettyImages-2188116482-scaled.jpg?ar=16%3A6&fit=crop&crop=faces&w=3840&auto=format&ixlib=react-9.3.0)",
    name: "Sports",
    date: "Dec 8, 2024",
  },
  {
    title: "Global Climate Summit: Key Outcomes",
    image:
      "https://dw-wp-production.imgix.net/2023/07/GettyImages-1206236347.jpg?ar=16%3A6&fit=crop&crop=faces&w=3840&auto=format&ixlib=react-9.3.0)",
    name: "Environment",
    date: "Dec 8, 2024",
  },
  {
    title: "Top 10 Movies to Watch This Holiday Season",
    image:
      "https://dw-wp-production.imgix.net/2022/04/GettyImages-1366337054.jpg?ar=16%3A6&fit=crop&crop=faces&w=3840&auto=format&ixlib=react-9.3.0)",
    name: "Entertainment",
    date: "Dec 7, 2024",
  },
  {
    title:
      "Eric Adams Says ‘Net Is Tightening’ On Man Who Assassinated Health Insurance CEO",
    image:
      "https://dw-wp-production.imgix.net/2024/12/GettyImages-2188229522-scaled-e1733600578804.jpg?ar=16%3A6&fit=crop&crop=faces&w=3840&auto=format&ixlib=react-9.3.0)",
    name: "By  Zach Jewell",
    date: "Dec 7, 2024",
  },
  {
    title: "The Rise of Electric Vehicles in 2024",
    image:
      "https://dw-wp-production.imgix.net/2024/12/GettyImages-2188586022-scaled.jpg?ar=16%3A6&fit=crop&crop=faces&w=3840&auto=format&ixlib=react-9.3.0)",
    name: "Technology",
    date: "Dec 9, 2024",
  },
  {
    title: "AI Breakthrough: ChatGPT 5 Released",
    image:
      "https://dw-wp-production.imgix.net/2024/12/GettyImages-1776716327.jpg?ar=16%3A6&fit=crop&crop=faces&w=3840&auto=format&ixlib=react-9.3.0)",
    name: "Science",
    date: "Dec 9, 2024",
  },
  {
    title: "World Cup 2024: Surprising Underdogs",
    image:
      "https://dw-wp-production.imgix.net/2024/12/GettyImages-2188116482-scaled.jpg?ar=16%3A6&fit=crop&crop=faces&w=3840&auto=format&ixlib=react-9.3.0)",
    name: "Sports",
    date: "Dec 8, 2024",
  },
  {
    title: "Global Climate Summit: Key Outcomes",
    image:
      "https://dw-wp-production.imgix.net/2023/07/GettyImages-1206236347.jpg?ar=16%3A6&fit=crop&crop=faces&w=3840&auto=format&ixlib=react-9.3.0)",
    name: "Environment",
    date: "Dec 8, 2024",
  },
  {
    title: "Top 10 Movies to Watch This Holiday Season",
    image:
      "https://dw-wp-production.imgix.net/2022/04/GettyImages-1366337054.jpg?ar=16%3A6&fit=crop&crop=faces&w=3840&auto=format&ixlib=react-9.3.0)",
    name: "Entertainment",
    date: "Dec 7, 2024",
  },
  {
    title:
      "Eric Adams Says ‘Net Is Tightening’ On Man Who Assassinated Health Insurance CEO",
    image:
      "https://dw-wp-production.imgix.net/2024/12/GettyImages-2188229522-scaled-e1733600578804.jpg?ar=16%3A6&fit=crop&crop=faces&w=3840&auto=format&ixlib=react-9.3.0)",
    name: "By  Zach Jewell",
    date: "Dec 7, 2024",
  },
];
