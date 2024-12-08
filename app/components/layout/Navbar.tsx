"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [pathname, setPathname] = useState("/");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setPathname(window.location.pathname);
    }
  }, []);

  return (
    <>
      {/* header */}
      <div className="headerBackground w-full h-[70px] flex items-center lg:h-[90px]">
        <div className="max-w-container headerBackground flex-between-center">
          <Image className="md:w-[180px]" src="/logo.svg" alt="nav bar logo image" height={50} width={230} />
          <Image
            className="md:hidden cursor-pointer"
            src="/icon/header/hamburgerMenu.svg"
            alt="menu icon"
            height={15}
            width={24}
            onClick={toggleMenu}
          />
          <div className="hidden md:flex md:w-full md:ml-20 md:justify-between md:items-center">
            <ul className="flex space-x-6 text-white font-medium md:text-[13px]">
              <li className="cursor-pointer">
                <Link className={`${pathname === "/" && "border-b border-white"}`} href="/">
                  Home
                </Link>
              </li>
              <li className="cursor-pointer">
                <Link href="/">Listen</Link>
              </li>
              <li className="cursor-pointer">
                <Link className={`${pathname === "/watch" && "border-b border-white"}`} href="/watch">
                  Watch
                </Link>
              </li>
              <li className="cursor-pointer">
                <Link href="/">Discuss</Link>
              </li>
              <li className="cursor-pointer">
                <Link href="/">Shop</Link>
              </li>
              <li className="cursor-pointer">
                <Link href="/">Kids</Link>
              </li>
              <li className="cursor-pointer">
                <Link href="/">Gift Membership</Link>
              </li>
            </ul>
            <div className="hidden md:flex-r gap-3">
              <Image alt="icon search" src="/icon/header/search.svg" width={20} height={20} />
              <button className="py-2 px-4 text-xs text-white rounded-md">Login</button>
              <button className="w-full py-[10px] px-6 bg-[#B33828] text-xs text-white rounded-md">Sign Up</button>
            </div>
          </div>
        </div>
      </div>
      {/* phone menu */}
      <div
        className={`headerMenuBackground fixed top-0 left-0 h-screen w-screen text-black transform ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 z-50 overflow-y-auto scroll-smooth md:hidden`}
      >
        <div className="p-8 flex-between-center">
          <div>
            <Image src="/logoDark.svg" alt="nav bar logo image" height={25} width={200} />
          </div>
          <button onClick={toggleMenu} className="text-white text-xl opacity-40">
            <Image src="/icon/close.svg" alt="nav bar logo image" height={20} width={20} />
          </button>
        </div>
        <ul className="space-y-9 pt-3 px-8 pb-8 text-[20px] leading-[35px] font-bold">
          <li className="cursor-pointer">
            <Link href="/">Home</Link>
          </li>
          <li className="cursor-pointer">
            <Link href="/">Listen</Link>
          </li>
          <li className="cursor-pointer">
            <Link href="/pages">Watch</Link>
          </li>
          <li className="cursor-pointer">
            <Link href="/">Discuss</Link>
          </li>
          <li className="cursor-pointer">
            <Link href="/">Shop</Link>
          </li>
          <li className="cursor-pointer">
            <Link href="/">Kids</Link>
          </li>
          <li className="cursor-pointer">
            <Link href="/">Gift Membership</Link>
          </li>
          <li className="cursor-pointer">
            <Link href="/">Search</Link>
          </li>
          <div className="flex-c gap-4">
            <button className="w-full py-2 px-4 bg-black text-xs text-white rounded-md">Login</button>
            <button className="w-full py-2 px-4 bg-[#B33828] text-xs text-white rounded-md">Sign Up</button>
          </div>
        </ul>
      </div>
    </>
  );
};
