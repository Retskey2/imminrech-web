import React from "react";
import ServiceItem from "../ServiceItem";
import { services } from "@/constants";

const Services = () => {
  return (
    <section className="pt-20 pb-14 flex justify-start " id="services">
      <main className="flex flex-col gap-12 px-48 w-full">
        <h1 className="text-[70px]">УСЛУГИ</h1>
        <ul className="flex justify-between ">
          <li className="max-w-[380px] text-[32px] border-b-[1px] border-white pb-5">
            Этап 1. Исследуем ваш бизнес-процесс, чтобы полностью понять
            его особенности и потребности.
          </li>
          <li className="max-w-[380px] text-[32px] border-b-[1px] border-white pb-5">
            Этап 2. Спроектируем и разработаем цифровые решения для вашего
            бизнеса.
          </li>
          <li className="max-w-[380px] text-[32px] border-b-[1px] border-white pb-5">
            Этап 3. Внедрим и обеспечим интеграции с используемыми сервисами.
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
