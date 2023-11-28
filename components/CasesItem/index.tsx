import React from "react";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface CasesItemProps {
  title: string;
  description: string;
  image: string | StaticImport;
}

const CasesItem: React.FC<CasesItemProps> = ({ title, description, image }) => {
  return (
    <div className="border-[1px] flex rounded-3xl px-5 py-10 w-full flex-col max-w-[360px] 2xl:max-w-none">
      <div className="flex justify-center items-center bg-white w-full rounded-xl p-8 h-[262px]">
        <Image
          draggable={false}
          priority
          src={image}
          alt="item"
          className="w-full h-full"
        />
      </div>
      <div className="uppercase text-[14px] tracking-[1.3px] font-bold mb-4 mt-8 text-[#CEFF45]">
        {title}
      </div>
      <p className="xl:text-[26px] text-[18px] font-semibold leading-8">
        {description}
      </p>
    </div>
  );
};

export default CasesItem;
