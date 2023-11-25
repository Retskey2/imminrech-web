import React from "react";
import { backgroundPromo, iphone, star } from "@/assets/images";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex mt-24 gap-20 mb-80 px-48 items-center">
      <main>
        <h1 className="text-[70px] font-bold mb-10 leading-tight">
          СОЗДАЕМ УДОБНЫЕ <br /> ЦИФРОВЫЕ ПРОДУКТЫ
        </h1>
        <h2 className="text-3xl text-[#9C9C9C] mb-16 font-light">
          Дизайн, проектирование и разработка программного обеспечения.
        </h2>
        <button className="px-16 py-4 border-solid font-light border-[0.5px] border-white rounded text-xl hover:bg-[#CEFF45] hover:border-[#CEFF45] hover:text-black">
          Обсудить проект
        </button>
      </main>
      <div className="relative min-h-[454px] min-w-[572px]">
        <Image
          priority
          draggable={false}
          className="absolute z-0 top-12"
          alt=""
          src={backgroundPromo}
        />
        <Image
          priority
          draggable={false}
          className="absolute z-10 -top-14 right-10"
          alt=""
          src={iphone}
        />
        <Image
          priority
          draggable={false}
          className="absolute z-20 right-[20px] top-[100px]"
          alt=""
          src={star}
        />
        <Image
          priority
          width={70}
          height={70}
          draggable={false}
          className="absolute z-20 right-24 top-[174px]"
          alt=""
          src={star}
        />
        <Image
          priority
          width={35}
          height={35}
          draggable={false}
          className="absolute z-20 left-[90px] top-[174px]"
          alt=""
          src={star}
        />
        <Image
          priority
          width={85}
          height={85}
          draggable={false}
          className="absolute z-20 -left-[26px] bottom-[10px]"
          alt=""
          src={star}
        />
      </div>
    </div>
  );
};

export default Hero;
