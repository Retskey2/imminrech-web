import React from "react";

const About = () => {
  return (
    <section
      className="bg-[#121212] pt-20 pb-14 flex justify-center"
      id="about-us"
    >
      <main className="w-[1220px] flex flex-col gap-12">
        <h1 className="text-[70px]">О НАС</h1>
        <h2 className="text-[#9C9C9C] text-[32px]">
          ИММИНТЭК - современная IT-компания, которая занимается <br />{" "}
          разработкой программного обеспечения и созданием сайтов.
        </h2>
        <ul className="flex flex-col gap-12 text-[32px] max-w-[700px]">
          <li>Уделяем много времени исследованию и проектированию.</li>
          <li>
            Не приступаем к разработке, пока не убедимся, что архитектура
            проекта обеспечит все запросы наших клиентов.
          </li>
          <li>
            Cистема управления проектами максимально прозрачная и позволит вам
            отслеживать прогресс проекта на каждом этапе.
          </li>
        </ul>
      </main>
    </section>
  );
};

export default About;
