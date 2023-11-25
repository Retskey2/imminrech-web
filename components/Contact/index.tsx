"use client";

import Link from "next/link";
import React from "react";

const Contact = () => {
  async function handleSubmit(event: any) {
    event.preventDefault();
    const formData = new FormData(event.target);
    try {
      const response = await fetch("/api/contact", {
        method: "post",
        body: formData,
      });

      if (!response.ok) {
        console.log("falling over");
        throw new Error(`response status: ${response.status}`);
      }
      const responseData = await response.json();
      console.log(responseData["message"]);

      alert("Message successfully sent");
    } catch (err) {
      console.error(err);
      alert("Error, please try resubmitting the form");
    }
  }

  return (
    <section
      className="bg-[#121212] pt-20 pb-14 flex justify-start"
      id="contact-us"
    >
      <main className="flex flex-col px-48 w-full">
        <h1 className="text-[70px] mb-4 text-[#CEFF45]">
          Обсудить детали проекта
        </h1>
        <form onSubmit={handleSubmit} className="mt-8 mb-2 ">
          <div className="grid grid-cols-2 grid-rows-2 mb-12 gap-4 gap-y-14">
            <div>
              <label htmlFor="form-company">Компания </label>
              <input
                id="form-company"
                required
                maxLength={50}
                name="text"
                placeholder="Noname company"
                className="w-full bg-transparent placeholder-[#7B7B7B] border-b-[1px] border-[#7B7B7B] outline-none mt-2 pb-2"
              />
            </div>

            <div>
              <label htmlFor="form-name">ФИО</label>
              <input
                id="form-name"
                required
                autoComplete="name"
                maxLength={80}
                name="name"
                type="text"
                placeholder="Борисов Борис Борисыч"
                className="w-full bg-transparent placeholder-[#7B7B7B] border-b-[1px] border-[#7B7B7B] outline-none mt-2 pb-2"
              />
            </div>

            <div>
              <label htmlFor="form-phone">Номер телефона</label>
              <input
                id="form-phone"
                required
                autoComplete="phone"
                maxLength={80}
                name="phone"
                type="phone"
                placeholder="+7 (123) 123 - 12 - 12"
                className="w-full bg-transparent placeholder-[#7B7B7B] border-b-[1px] border-[#7B7B7B] outline-none mt-2 pb-2"
              />
            </div>
            <div>
              <label htmlFor="form-email">Почта</label>
              <input
                id="form-email"
                required
                autoComplete="email"
                maxLength={80}
                placeholder="NewPochta@mail.com"
                name="email"
                type="email"
                className="w-full bg-transparent placeholder-[#7B7B7B] border-b-[1px] border-[#7B7B7B] outline-none mt-2 pb-2"
              />
            </div>
          </div>
          <button
            type="submit"
            className="px-16 py-4 border-solid border-[0.5px] font-medium border-white rounded text-xl hover:bg-[#CEFF45] hover:border-[#CEFF45] hover:text-black"
          >
            Отправить
          </button>
        </form>
      </main>
    </section>
  );
};

export default Contact;
