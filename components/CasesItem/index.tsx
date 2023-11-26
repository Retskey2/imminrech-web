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
    <div className="border-[1px] rounded-md px-5 py-10 w-full md:max-w-[360px] xl:max-w-none">
      <div className="bg-white w-full 2xl:h-80 md:h-60 h-40 rounded-xl flex justify-center items-center p-8">
        <Image
          draggable={false}
          priority
          src={image}
          alt="item"
          className="w-full"
        />
      </div>
      <div className="uppercase tracking-[1.3px] font-bold mb-4 mt-8 text-[#CEFF45]">
        {title}
      </div>
      <p className="xl:text-[26px] text-[18px] font-semibold">{description}</p>
    </div>
  );
};

export default CasesItem;
