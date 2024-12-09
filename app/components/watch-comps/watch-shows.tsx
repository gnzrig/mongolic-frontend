"use client";
import Image from "next/image";

const jsonData = [
  {
    imageUrl: "https://dailywireplus-v2.imgix.net/images/dailywire.com/16x9.png",
    text: "Show 1",
  },
  {
    imageUrl:
      "https://www.dailywire.com/_next/image?url=https%3A%2F%2Fdailywireplus-v2.imgix.net%2Fimages%2Fimage-overrides%2Fd92d0328-61a0-45ae-b77a-7685e274a26b.png%3Fauto%3Dcompress%26cs%3Dorigin&w=384&q=75",
    text: "Show 2",
  },
  {
    imageUrl:
      "https://www.dailywire.com/_next/image?url=https%3A%2F%2Fdailywireplus-v2.imgix.net%2Fimages%2Fimage-overrides%2Fd0d49fc3-ebed-422e-9243-5402e6441c5b.jpg%3Fauto%3Dcompress%26cs%3Dorigin&w=384&q=75",
    text: "Show 3",
  },
  {
    imageUrl:
      "https://www.dailywire.com/_next/image?url=https%3A%2F%2Fdaily-wire-production.imgix.net%2Fshows%2Fck0a8bg6y30rf078602msy6qo-portraitImage-1711466848992.png%3Fauto%3Dcompress%26cs%3Dorigin&w=384&q=75",
    text: "Show 4",
  },
  {
    imageUrl:
      "https://www.dailywire.com/_next/image?url=https%3A%2F%2Fdailywireplus-v2.imgix.net%2Fimages%2Fimage-overrides%2F07a7cf56-5eb8-4c6a-9be6-9452597649d6.png%3Fauto%3Dcompress%26cs%3Dorigin&w=384&q=75",
    text: "Show 5",
  },
  {
    imageUrl:
      "https://www.dailywire.com/_next/image?url=https%3A%2F%2Fdaily-wire-production.imgix.net%2Fshows%2Fck0gx918z008007947vwinup8-portraitImage-1693183187825.png%3Fauto%3Dcompress%26cs%3Dorigin&w=384&q=75",
    text: "Show 6",
  },
  {
    imageUrl:
      "https://www.dailywire.com/_next/image?url=https%3A%2F%2Fdaily-wire-production.imgix.net%2Fshows%2Fck0gxbu6w008j0738c7l411yq-portraitImage-1692587392879.png%3Fauto%3Dcompress%26cs%3Dorigin&w=384&q=75",
    text: "Show 1",
  },
  {
    imageUrl:
      "https://www.dailywire.com/_next/image?url=https%3A%2F%2Fdaily-wire-production.imgix.net%2Fshows%2Fck0gxadc0007v0738h8tw5eqb-portraitImage-1693880475448.png%3Fauto%3Dcompress%26cs%3Dorigin&w=384&q=75",
    text: "Show 2",
  },
  {
    imageUrl:
      "https://www.dailywire.com/_next/image?url=https%3A%2F%2Fdaily-wire-production.imgix.net%2Fshows%2Fck05emr8s26p10786bcd0z048-portraitImage-1686330610196.jpg%3Fauto%3Dcompress%26cs%3Dorigin&w=384&q=75",
    text: "Show 3",
  },
  {
    imageUrl:
      "https://www.dailywire.com/_next/image?url=https%3A%2F%2Fdaily-wire-production.imgix.net%2Fshows%2Fcl7unwc3f2g0w0878detyx2r2-portraitImage-1704739990176.jpg%3Fauto%3Dcompress%26cs%3Dorigin&w=384&q=75",
    text: "Show 4",
  },
];

const WatchShows = () => {
  return (
    <div className="flex flex-col mb-10">
      {Array.from({ length: 3 }).map((_, rowIndex) => (
        <div key={rowIndex} className="w-[55vw] flex justify-between my-5 ">
          {jsonData
            .slice(rowIndex * 5, (rowIndex + 1) * 5)
            .map((item, index) => (
              <div key={index} className="text-center text-white">
                <div
                  className={`w-[10vw] h-[35vh] rounded-2xl ${
                    item.imageUrl && item.imageUrl !== "" ? "" : "bg-gray-500"
                  }`}
                >
                  {item.imageUrl && item.imageUrl !== "" ? (
                    <img
                      src={item.imageUrl}
                      alt={item.text}
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  ) : null}
                </div>
                <p className="text-[gray] mt-1 text-sm">{item.text}</p>
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
