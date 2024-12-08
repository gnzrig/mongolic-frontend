"use client";
import CallOut from "../components/watch-comps/call-out";
import Commercial from "../components/watch-comps/commercial-link";
import Filter from "../components/watch-comps/filter";
import WatchShows from "../components/watch-comps/watch-shows";

const Watch = () => {
  return (
    <div className="bg-[#141414] w-full flex flex-col items-center ">
      <Filter />
      <CallOut />
      <WatchShows />
      <Commercial />
      <WatchShows />
    </div>
  );
};

export default Watch;
