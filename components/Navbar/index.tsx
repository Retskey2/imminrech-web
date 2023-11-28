"use client";

import Image from "next/image";
import { headerLogo, telegram, whatsapp } from "@/assets/images";
import { hamburger } from "@/assets/icons";

import { navLinks } from "@/constants";

import { useEffect, useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 0 && currentScrollY > lastScrollY);
      lastScrollY = currentScrollY <= 0 ? 0 : currentScrollY;
    };

    let lastScrollY = 0;

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <header className="padding-x py-8 w-full">
      <nav className="grid grid-cols-navbar max-lg:grid-cols-2 items-center">
        <Link href="/">
          <Image priority src={headerLogo} alt="logo" width={130} height={29} />
        </Link>

        <ul className="grid grid-cols-4 justify-center items-center max-lg:hidden justify-self-center">
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

        <div className="flex justify-end gap-3 font-normal max-lg:hidden justify-self-center">
          <button className="hover:bg-black px-4 py-2 border-solid border-white border-[1px] font-normal rounded flex items-center gap-2">
            <Image draggable={false} priority alt="telegram" src={telegram} />
            WhatsApp
          </button>
          <button className="hover:bg-black px-4 py-2 border-solid border-white border-[1px] font-normal rounded flex items-center gap-2">
            <Image draggable={false} priority alt="whatsapp" src={whatsapp} />
            Telegram
          </button>
        </div>

        <div className="hidden max-lg:block justify-self-end">
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
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
