"use client";

const DiscussBanner = () => {
  return (
    <div className="w-[75vw] h-[45vh] bg-zinc-800 rounded-xl my-10 flex items-center">
      <div className="w-1/2 h-full relative">
        <div
          className="absolute inset-0 bg-cover bg-center rounded-l-xl"
          style={{
            backgroundImage:
              "url('https://daily-wire-production.imgix.net/episodes/cm4hbw5aeeoba0866bey7is9y/cm4hbw5aeeoba0866bey7is9y-1734031099133.png?fit=crop&ar=16%3A9&w=828&auto=format&ixlib=react-9.3.0')",
          }}
        ></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <button className="w-16 h-16 bg-black rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform">
            <div className="w-0 h-0 border-l-8 border-t-[10px] border-b-[10px] border-t-transparent border-b-transparent ml-1"></div>
          </button>
        </div>
      </div>

      <div className="w-1/2 p-6">
        <p className="text-sm text-[#999999]">ALL ACCESS LIVE</p>
        <h1 className="text-3xl mt-2 text-white">
          Ep. 897 Milk in a Bag, and Pineapple Pizza
        </h1>
        <p className="text-[#999999] text-xs">Dec 13, 2024</p>
        <p className="text-[#999999] mt-2">
          Join the boys in their weekly LIVE Q+A!
        </p>
      </div>
    </div>
  );
};

export default DiscussBanner;
