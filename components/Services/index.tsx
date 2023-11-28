import React from "react";
import ServiceItem from "../ServiceItem";
import { services } from "@/constants";

const Services = () => {
  return (
    <section className="py-[210px] flex justify-start " id="services">
      <main className="flex flex-col gap-12 xl:px-48 lg:px-8 px-6 w-full">
        <h1 className="md:text-[35px] lg:text-[50px] xl:text-[70px] text-[25px] font-medium text-center 2xl:text-start">
          УСЛУГИ
        </h1>
        <ul className="flex flex-wrap lg:flex-nowrap gap-6 justify-center 2xl:justify-between">
          <li className="max-w-[380px] border-b-[1px] border-white pb-5  lg:text-[26px] xl:text-[32px] text-[22px]">
            <span className="font-bold"> Этап 1.</span> Исследуем
            ваш бизнес-процесс, чтобы полностью понять его особенности
            и потребности.
          </li>
          <li className="max-w-[380px] border-b-[1px] border-white pb-5  lg:text-[26px] xl:text-[32px] text-[22px]">
            <span className="font-bold"> Этап 2.</span> Спроектируем
            и разработаем цифровые решения для вашего бизнеса.
          </li>
          <li className="max-w-[380px] border-b-[1px] border-white pb-5  lg:text-[26px] xl:text-[32px] text-[22px]">
            <span className="font-bold">Этап 3.</span> Внедрим и обеспечим
            интеграции с используемыми сервисами.
          </li>
        </ul>
        <ul className="flex flex-col gap-[10px] mt-20">
          {services.map((service) => (
            <ServiceItem
              key={service.id}
              title={service.title}
              description={service.description}
            />
          ))}
        </ul>
      </main>
    </section>
  );
};

export default Services;
