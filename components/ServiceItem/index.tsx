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
      <div className="flex justify-between w-full">
        <span>{title}</span>
        <span
          className="underline cursor-pointer"
          onClick={() => setIsVisibility(!isVisibility)}
        >
          Подробнее →
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
