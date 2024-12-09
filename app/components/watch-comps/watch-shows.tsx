"use client";
import Image from "next/image";

const jsonData = [
  {
    imageUrl: "https://dailywireplus-v2.imgix.net/images/dailywire.com/16x9.png",
    text: "Show 1",
  },
  {
    imageUrl: "",
    text: "Show 2",
  },
  {
    imageUrl: "",
    text: "Show 3",
  },
  {
    imageUrl: "",
    text: "Show 4",
  },
  {
    imageUrl: "",
    text: "Show 5",
  },
  {
    imageUrl: "",
    text: "Show 6",
  },
  {
    imageUrl: "",
    text: "Show 1",
  },
  {
    imageUrl: "",
    text: "Show 2",
  },
  {
    imageUrl: "",
    text: "Show 3",
  },
  {
    imageUrl: "",
    text: "Show 4",
  },
  {
    imageUrl: "",
    text: "Show 5",
  },
  {
    imageUrl: "",
    text: "Show 6",
  },
  {
    imageUrl: "",
    text: "Show 4",
  },
  {
    imageUrl: "",
    text: "Show 5",
  },
  {
    imageUrl: "",
    text: "Show 6",
  },
];

const WatchShows = () => {
  return (
    <div className='flex flex-col'>
      {Array.from({ length: 3 }).map((_, rowIndex) => (
        <div key={rowIndex} className='w-[55vw] h-[35vh] flex justify-between my-5 '>
          {jsonData.slice(rowIndex * 5, (rowIndex + 1) * 5).map((item, index) => (
            <div key={index} className='text-center text-white'>
              <div
                className={`w-[10vw] h-[35vh] rounded-2xl ${
                  item.imageUrl && item.imageUrl !== "" ? "" : "bg-gray-500"
                }`}
              >
                {item.imageUrl && item.imageUrl !== "" ? (
                  <Image src={item.imageUrl} alt={item.text} className='w-full h-full object-cover rounded-2xl' />
                ) : null}
              </div>
              <p className='text-[gray] mt-1 text-sm'>{item.text}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default WatchShows;
