"use client";
import React, { useState } from "react";

interface ServiceItemProps {
  title: string;
  description: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ title, description }) => {
  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);

  return (
    <li className="py-5 border-b-[1px] border-white w-full flex justify-between flex-col text-[26px] transition-all ease-out duration-100">
      <div
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className="flex justify-between items-center w-full font-light xl:text-[32px] text-[22px]"
      >
        <span>{title}</span>
        <span className="flex cursor-pointer text-[16px] gap-1 font-light">
          <a className="" href={"#contact-us"}>
            Подробнее
          </a>
          →
        </span>
      </div>

      <p
        className={`mt-2 text-[16px] max-w-[1000px] font-normal${
          isHovering
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
