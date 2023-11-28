import React from "react";

import CasesItem from "../CasesItem";
import { cases } from "@/constants";

const Cases = () => {
  return (
    <section
      className="bg-[#121212] lg:py-[210px] py-[55px] flex justify-start "
      id="cases"
    >
      <main className="flex flex-col gap-12 xl:px-48 lg:px-8 px-6 w-full">
        <h1 className="md:text-[35px] lg:text-[50px] xl:text-[70px] text-[25px] font-medium text-center 2xl:text-start">
          КЕЙСЫ
        </h1>
        <div className="flex flex-wrap lg:flex-nowrap gap-6 justify-center 2xl:justify-between">
          {cases.map((item) => (
            <CasesItem
              description={item.description}
              key={item.id}
              image={item.image}
              title={item.title}
            />
          ))}
        </div>
      </main>
    </section>
  );
};

export default Cases;
