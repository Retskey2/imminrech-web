"use client";

import Image from "next/image";
import { headerLogo, telegram, whatsapp } from "@/assets/images";
import { navLinks } from "@/constants";

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const handleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <header className="padding-x py-8 w-full">
      <nav className="grid grid-cols-3 items-center">
        <Link href="/">
          <Image priority src={headerLogo} alt="logo" width={130} height={29} />
        </Link>

        <ul className="grid grid-cols-4 justify-center items-center gap-x-4">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className=" text-[16px] font-normal leading-normal text-lg text-slate-gray
                hover:border-b-2
                hover:border-[#CEFF45] 
                hover:text-[#CEFF45]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex justify-end gap-3 font-normal">
          <button className="px-4 py-2 border-solid border-white border-[1px] font-normal rounded flex items-center gap-2">
            <Image draggable={false} priority alt="telegram" src={whatsapp} />
            WhatsApp
          </button>
          <button className="px-4 py-2 border-solid border-white border-[1px] font-normal rounded flex items-center gap-2">
            <Image draggable={false} priority alt="whatsapp" src={whatsapp} />
            Telegram
          </button>
        </div>

        {/* <div className="hidden max-lg:block  ">
          <Image
            src={hamburger}
            alt="hamburger"
            width={25}
            height={25}
            onClick={handleNav}
            className={` cursor-pointer lg:hidden ${
              showNav ? "inline-block rotate-90" : ""
            }`}
          />
        </div> */}
      </nav>
    </header>
  );
};

export default Navbar;
