import React from "react";

import CasesItem from "../CasesItem";
import { cases } from "@/constants";

const Cases = () => {
  return (
    <section
      className="bg-[#121212] pt-20 pb-14 flex justify-center"
      id="cases"
    >
      <main className="w-[1220px] flex flex-col gap-12">
        <h1 className="text-[70px]">КЕЙСЫ</h1>
        <div className="flex gap-2 justify-between">
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
