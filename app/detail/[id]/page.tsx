import { Banner } from "@/app/components/Banner";
import Image from "next/image";

const Detail = () => {
  return (
    <div className="w-full flex-c bg-white">
      <Banner />
      <div className="w-full border-b border-[#ACACAC]">
        <Image src="/theLogo.svg" alt="logo image" width={167} height={28} className="mx-auto my-4" />
      </div>
      <div className="max-w-detail-container mt-8">
        <div className="flex-c">
          <h3 className="text-[#B33828] uppercase mb-3 text-xs flex justify-start md:justify-center">
            <span className="hidden md:block">—</span>&nbsp;News&nbsp;<span className="hidden md:block">—</span>
          </h3>
          <h1 className="text-[#0d0d0d] font-light text-start text-2xl md:text-[40px] md:leading-[50px] md:text-center">{detail.title}</h1>
          <p className="mt-4 text-start font-[900] text-[#0d0d0d] text-[16px] leading-[20px] md:text-center">{detail.boldText}</p>
          <div className="flex-c mt-4 md:flex-r justify-center mb-6">
            <span className="text-[#B33828] text-sm">By&nbsp;{detail.name}</span>
            <span className="hidden md:block">&nbsp;•&nbsp;</span>
            <p className="flex text-[#333333] my-3 text-sm md:my-0">
              <span>{detail.date}</span>&nbsp;
              <span>{detail.great}</span>
            </p>
          </div>
          <div>
            <Image className="w-full h-auto" src={detail.image} alt="image" width={400} height={400} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;

const detail = {
  title: "Schumer Presses Mayorkas To Deploy ‘Special Drone-Detection Tech’",
  boldText: `Congress is also working on legislation to give local authorities "more tools."`,
  date: "Dec 16, 2024",
  name: "Daniel Chaitin",
  great: "DailyWire.com",
  image:
    "https://dw-wp-production.imgix.net/2024/12/GettyImages-2189246117-scaled-e1734288211280.jpg?fit=crop&ar=16%3A9&w=2048&auto=format&ixlib=react-9.3.0",
  desc1:
    "On Sunday, Senate Majority Leader Chuck Schumer (D-NY) urged Homeland Security Secretary Alejandro Mayorkas for better equipment to locate mystery drones in the Mid-Atlantic.",
  desc2:
    "“I’m pushing for answers amid these drone sightings,” Schumer said on X. “I’m calling for [Mayorkas] to deploy special drone-detection tech across” New York and New Jersey.",
};
