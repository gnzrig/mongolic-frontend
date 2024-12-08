import Image from "next/image";

export const News = ({ image, title, name, date }: { image: string; title: string; name: string; date: string }) => {
  return (
    <div className="flex-r border-b border-[#b8b8b8] items-center pb-5  w-full gap-5 md:gap-0 md:bg-white  md:flex-c md:pb-0 md:border-0">
      <Image className="w-[84px] h-[92px] object-cover order-last md:order-first md:w-full" src={image} width={100} height={100} alt="conte image" />
      <div className="flex-c gap-1 md:gap-4 md:px-6 md:pt-6 md:pb-10">
        <h3
          className="text-[#241d1d] text-sm truncate overflow-hidden line-clamp-3 font-semibold leading-[150%]  md:text-[20px] md:leading-[135%]"
          style={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 3,
            whiteSpace: "normal",
          }}
        >
          {title}
        </h3>
        <p className="text-[#666] text-xs md:text-sm">
          {name} | {date}
        </p>
      </div>
    </div>
  );
};
