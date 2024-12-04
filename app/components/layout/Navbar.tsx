import Image from "next/image";

export const Navbar = () => {
  return (
    <div className="bg-white w-full">
      <div className="max-w-cont bg-black flex-between-center">
        <div>
          <Image src="/logo.svg" alt="nav bar logo image" height={50} width={230} />
        </div>
        <div>
          <ul className="flex space-x-8 text-white font-medium">
            <li className="hover:text-blue-500 cursor-pointer">Home</li>
            <li className="hover:text-blue-500 cursor-pointer">About</li>
            <li className="hover:text-blue-500 cursor-pointer">Services</li>
            <li className="hover:text-blue-500 cursor-pointer">Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
