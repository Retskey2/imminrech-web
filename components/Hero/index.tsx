import React from "react";
import { backgroundHeroPromo } from "@/assets/images";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex mt-24 lg:gap-10 gap-0 mb-32 xl:mb-80 xl:px-48 lg:px-8 px-6 justify-center">
      <main className="w-full md:text-left text-center">
        <h1 className=" md:text-[35px] lg:text-[50px] xl:text-[70px] text-[30px] xl:font-bold font-semibold mb-[16px] 2xl:mb-10 leading-tight mt-10 ">
          СОЗДАЕМ УДОБНЫЕ <br /> ЦИФРОВЫЕ ПРОДУКТЫ
        </h1>
        <h2 className="lg:text-[16px] xl:text-[25px] text-[14px] text-[#9C9C9C] mb-[30px] 2xl:mb-[50px] font-light">
          Дизайн, проектирование и разработка программного обеспечения.
        </h2>
        <button className="px-16 py-2 lg:text-[18px] md:text-[14px]  border-solid font-light border-[0.5px] border-white rounded text-xl hover:bg-[#CEFF45] hover:border-[#CEFF45] hover:text-black">
          Обсудить проект
        </button>
      </main>

      <Image
        className="md:w-[306px] md:block hidden lg:w-[400px] xl:w-[560px]"
        priority
        draggable={false}
        alt=""
        src={backgroundHeroPromo}
      />
    </div>
  );
};

export default Hero;
