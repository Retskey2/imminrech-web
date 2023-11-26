"use client";
import React, { useState } from "react";

interface ServiceItemProps {
  title: string;
  description: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ title, description }) => {
  const [isVisibility, setIsVisibility] = useState(false);

  return (
    <li className="py-5 border-b-[1px] border-white w-full flex justify-between flex-col text-[26px] transition-all ease-out duration-100">
      <div className="flex justify-between w-full font-semibold lg:text-[22px] xl:text-[32px] text-[22px]">
        <span>{title}</span>
        <span
          className="cursor-pointer"
          onClick={() => setIsVisibility(!isVisibility)}
        >
          <span className="underline">Подробнее</span> →
        </span>
      </div>

      <p
        className={`mt-2 text-[16px] max-w-[1000px] ${
          isVisibility
            ? "opacity-100 max-h-[500px] transition-all duration-300 ease-in"
            : "opacity-0 max-h-0 overflow-hidden transition-all duration-300 ease-out"
        }`}
      >
        {description}
      </p>
    </li>
  );
};

export default ServiceItem;
