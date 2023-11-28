import useMousePosition from "@/hooks/useMousePosition";
import React, { useState } from "react";

const About = () => {
  return (
    <section
      className="flex justify-start bg-[#121212] lg:py-[210px] py-[55px]"
      id="about-us"
    >
      <main className="flex flex-col gap-12 xl:px-48 lg:px-8 px-6">
        <h1 className="md:text-[35px] lg:text-[50px] xl:text-[70px] text-[25px] font-bold text-center 2xl:text-start">
          О НАС
        </h1>
        <h2 className="text-[#9C9C9C] xl:text-[32px] text-[22px] font-light max-w-[1000px] leading-8">
          ИММИНТЭК - современная IT-компания, которая занимается разработкой
          программного обеспечения и созданием сайтов.
        </h2>
        <ul className="flex flex-col md:gap-[55px] gap-[30px] xl:text-[32px] text-[22px] font-light leading-8">
          <li className="max-w-[600px]">
            Уделяем много времени исследованию и проектированию.
          </li>
          <li className="max-w-[600px]">
            Не приступаем к разработке, пока не убедимся, что архитектура
            проекта обеспечит все запросы наших клиентов.
          </li>
          <li className="max-w-[800px]">
            Cистема управления проектами максимально прозрачная и позволит вам
            отслеживать прогресс проекта на каждом этапе.
          </li>
        </ul>
      </main>
    </section>
  );
};

export default About;
