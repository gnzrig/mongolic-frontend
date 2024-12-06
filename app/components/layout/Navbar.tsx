"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* header */}
      <div className="headerBackground w-full h-[70px] flex items-center lg:h-[90px]">
        <div className="max-w-container headerBackground flex-between-center">
          <div>
            <Image className="lg:w-[180px]" src="/logo.svg" alt="nav bar logo image" height={50} width={230} />
          </div>
          <Image className="md:hidden cursor-pointer" src="/icon/hamburgerMenu.svg" alt="menu icon" height={15} width={24} onClick={toggleMenu} />
          <div className="hidden md:flex">
            <ul className="flex space-x-8 text-white font-medium">
              <li className="cursor-pointer">
                <Link href="/">Home</Link>
              </li>
              <li className="cursor-pointer">
                <Link href="/">Listen</Link>
              </li>
              <li className="cursor-pointer">
                <Link href="/">Watch</Link>
              </li>
              <li className="cursor-pointer">
                <Link href="/">Discuss</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* phone menu */}
      <div
        className={`headerMenuBackground fixed top-0 left-0 h-screen w-screen text-black transform ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 z-50 overflow-y-auto scroll-smooth`}
      >
        <div className="p-8 flex-between-center">
          <div>
            <Image src="/logoDark.svg" alt="nav bar logo image" height={25} width={200} />
          </div>
          <button onClick={toggleMenu} className="text-white text-xl opacity-40">
            <Image src="/icon/close.svg" alt="nav bar logo image" height={20} width={20} />
          </button>
        </div>
        <ul className="space-y-9 pt-3 px-8 text-[20px] leading-[35px] font-bold">
          <li className="cursor-pointer">
            <Link href="/">Home</Link>
          </li>
          <li className="cursor-pointer">
            <Link href="/">Listen</Link>
          </li>
          <li className="cursor-pointer">
            <Link href="/">Watch</Link>
          </li>
          <li className="cursor-pointer">
            <Link href="/">Discuss</Link>
          </li>
        </ul>
      </div>
    </>
  );
};
