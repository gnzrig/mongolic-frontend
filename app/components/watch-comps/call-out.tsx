"use client";
import Image from "next/image";

const CallOut = () => {
  return (
    <div className='bg-[#26262699] w-[55vw] h-[120px] rounded-3xl flex'>
      {/* Image Section */}
      <div className='flex-[2] flex items-center justify-center'>
        <Image
          src='https://dailywireplus-v2.imgix.net/images/dailywire.com/16x9.png'
          alt='zurag-1'
          className='w-full h-full object-cover rounded-l-3xl'
        />
      </div>

      {/* Text and Button Section */}
      <div className='flex-[7] flex items-center justify-between text-white'>
        {/* Text Section */}
        <div className='flex flex-col ml-5 mr-5'>
          <p className='font-semibold text-lg'>Am I Racist?</p>
          <p className='text-sm'>
            Experience the #1 documentary of the decade. Follow Matt Walsh's hilarious journey as he goes deep
            undercover to infiltrate and expose the weird world of diversity, equity, and inclusion. Now streaming
            exclusively on DailyWire+.
          </p>
        </div>

        {/* Button */}
        <button className='bg-white text-black text-sm font-semibold px-6 py-2 mr-5 rounded-3xl shadow-md'>
          Watch
        </button>
      </div>
    </div>
  );
};

export default CallOut;
