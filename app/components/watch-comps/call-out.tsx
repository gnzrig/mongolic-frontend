"use client";
import Image from "next/image";

import Commercial from "./commercial-link";
import WatchShows from "./watch-shows";
import Banner from "./watch-banner";

const Browser = () => {
  return (
    <div>
      <Banner />
      <WatchShows />
      <Commercial />
      <WatchShows />
    </div>
  );
};

export default Browser;
