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
    <div className="border-[1px] rounded-md px-5 py-10 w-[400px]">
      <div className="max-w-[360px]">
        <div className="bg-white w-full h-64 rounded-xl flex justify-center items-center">
          <Image src={image} alt="item" />
        </div>
        <div className="mb-4 mt-8 text-[#CEFF45]">{title}</div>
        <p className="text-[26px]">{description}</p>
      </div>
    </div>
  );
};

export default CasesItem;
