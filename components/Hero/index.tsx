"use client";
import React, { useState } from "react";
import { backgroundHeroPromo, iphone, star } from "@/assets/images";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  const [position, setPosition] = useState({
    star: { x: 0, y: 0 },
    iphone: { x: 0, y: 0 },
  });

  const handleMouseMove = (e) => {
    const xPos = (e.clientX / window.innerWidth - 0.5) * 40; // Изменение значения для эффекта параллакса
    const yPos = (e.clientY / window.innerHeight - 0.5) * 40; // Изменение значения для эффекта параллакса
    setPosition({
      star: {
        x: xPos,
        y: yPos,
      },
      iphone: {
        x: xPos * 0.3,
        y: yPos * 0.3,
      },
    });
  };
  return (
    <div
      className="grid lg:grid-cols-hero grid-cols-1 lg:py-[180px] py-[55px] xl:px-48 lg:px-8 px-6 gap-10"
      onMouseMove={handleMouseMove}
    >
      <main className="lg:text-left text-center z-20">
        <h1 className="md:text-[35px] lg:text-[50px] 2xl:text-[70px] text-[25px] xl:font-bold font-semibold mb-[16px] 2xl:mb-10 leading-tight mt-10 whitespace-nowrap  2xlmax:whitespace-normal">
          СОЗДАЕМ УДОБНЫЕ <br /> ЦИФРОВЫЕ ПРОДУКТЫ
        </h1>
        <h2 className="max-w-[1000px] md:text-[22px] lg:text-[28px] xl:text-[32px] text-[14px] text-[#9C9C9C] mb-[30px] 2xl:mb-[50px] font-light">
          Дизайн, проектирование и разработка программного обеспечения.
        </h2>
        <Link
          href="#contact-us"
          className="px-16 py-2 lg:text-[18px] md:text-[14px]  border-solid font-light border-[0.5px] border-white rounded text-xl hover:bg-[#CEFF45] hover:border-[#CEFF45] hover:text-black"
        >
          Обсудить проект
        </Link>
      </main>

      <div className="lg:flex justify-self-center relative h-full lg:w-[360px] xl:w-[400px] 2xl:w-[480px] hidden">
        <Image
          className="absolute w-full top-6"
          priority
          draggable={false}
          alt=""
          src={backgroundHeroPromo}
        />
        <Image
          className="absolute w-full -top-12 transition-transform duration-300 ease-out "
          style={{
            transform: `translate(${position.iphone.x}px, ${position.iphone.y}px)`,
          }}
          priority
          draggable={false}
          alt=""
          src={iphone}
        />
        <div
          className="w-full"
          style={{
            transform: `translate(${position.star.x}px, ${position.star.y}px)`,
          }}
        >
          <Image
            width={84}
            className="absolute bottom-4 -left-6"
            priority
            draggable={false}
            alt="star"
            src={star}
          />
          <Image
            width={32}
            className="absolute top-36 left-[92px]"
            priority
            draggable={false}
            alt="star"
            src={star}
          />
          <Image
            width={105}
            className="absolute top-16 -right-8"
            priority
            draggable={false}
            alt="star"
            src={star}
          />{" "}
          <Image
            width={69}
            className="absolute top-[132px] right-8"
            priority
            draggable={false}
            alt="star"
            src={star}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
