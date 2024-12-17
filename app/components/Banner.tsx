import Image from "next/image";

export const Banner = () => {
  return (
    <div className="homeBannerBack w-full h-[125px] md:h-[195px]">
      <div className="max-w-container-sm-full">
        <Image
          className="w-full hidden md:flex md:h-[195px] overflow-hidden object-cover"
          src="/image/homeTopBanner.png"
          width={2000}
          height={20}
          unoptimized={true}
          alt="banner image"
        />
        <Image
          className="w-full h-[125px] md:hidden overflow-hidden object-cover"
          src="/image/homeMobileBanner.png"
          width={2000}
          height={20}
          unoptimized={true}
          alt="banner image"
        />
      </div>
    </div>
  );
};
