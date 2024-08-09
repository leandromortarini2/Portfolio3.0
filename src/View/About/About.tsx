import React from "react";
import tec1 from "../../assets/tecnologias/react.svg";
import tec2 from "../../assets/tecnologias/javascript.svg";
import tec3 from "../../assets/tecnologias/typescript.svg";
import tec4 from "../../assets/tecnologias/nextjs_icon_dark.svg";
import tec5 from "../../assets/tecnologias/tailwindcss.svg";
import tec6 from "../../assets/tecnologias/html5.svg";
import tec7 from "../../assets/tecnologias/css.svg";
import tec8 from "../../assets/tecnologias/nodejs.svg";
import tec9 from "../../assets/tecnologias/expressjs_dark.svg";
import tec10 from "../../assets/tecnologias/postgresql.svg";
import tec11 from "../../assets/tecnologias/mongodb.svg";
import tec12 from "../../assets/tecnologias/typeorm.svg";

export const About: React.FC = () => {
  return (
    <div
      id="about"
      className="w-full min-h-screen bg-gray-900 flex flex-col justify-center items-center"
    >
      <div className="w-full   flex flex-col justify-center items-center md:mt-5  mt-10">
        <div className="w-full md:w-3/4 h-1/2 flex flex-col justify-center items-center  ">
          <h1 className="text-gray-50 text-3xl md:text-4xl lg:text-[40px] xl:text-[60px] font-bold mt-14 md:mt-0  lg:mb-5 xl:mb-10">
            Sobre Mí
          </h1>
          <p className="text-gray-200 p-5 text-center md:text-justify md:text-sm lg:text-md xl:text-2xl font-bold">
            Me formé en el BootCamp de Henry como{" "}
            <span className="text-sky-600">
              Full Stack Developer con especialización en Front End.
            </span>{" "}
            Mi experiencia incluye tecnologías como{" "}
            <span className="text-sky-600">
              React, TypeScript, Javascript, Tailwind, Node.js, Express, Next,
              entre otras.
            </span>{" "}
            Mi enfoque se centra en crear aplicaciones web modernas y altamente
            funcionales, ofreciendo interfaces responsivas y atractivas. También
            tengo experiencia en la{" "}
            <span className="text-sky-600">
              creación y consumo de APIs REST{" "}
            </span>
            , así como en el{" "}
            <span className="text-sky-600">
              manejo de bases de datos como PostgreSQL{" "}
            </span>
            . <br /> Además de mis habilidades técnicas, poseo habilidades
            sociales que me permiten comprender y anticipar las necesidades de
            los clientes, lo que me ayuda a construir soluciones personalizadas
            y efectivas. Disfruto colaborar con otros y siempre busco formas de
            mejorar tanto individualmente como en equipo, asegurando que cada
            proyecto sea un éxito.
          </p>
        </div>
        <div className="w-full md:w-3/4 flex flex-col justify-evenly items-center xl:mt-20 mb-10 ">
          <div className="w-full  flex flex-wrap justify-evenly">
            <img
              src={tec1}
              alt=""
              className="w-8 h-10 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 m-2 "
            />
            <img
              src={tec2}
              alt=""
              className="w-8 h-10 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 m-2 "
            />
            <img
              src={tec3}
              alt=""
              className="w-8 h-10 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 m-2 "
            />
            <img
              src={tec4}
              alt=""
              className="w-8 h-10 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 m-2 "
            />
            <img
              src={tec5}
              alt=""
              className="w-8 h-10 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 m-2 "
            />
            <img
              src={tec6}
              alt=""
              className="w-8 h-10 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 m-2 "
            />
            <img
              src={tec7}
              alt=""
              className="w-8 h-10 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 m-2 "
            />

            <img
              src={tec8}
              alt=""
              className="w-8 h-10 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 m-2 "
            />
            <img
              src={tec9}
              alt=""
              className="w-8 h-10 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 m-2 "
            />
            <img
              src={tec10}
              alt=""
              className="w-8 h-10 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 m-2 "
            />
            <img
              src={tec11}
              alt=""
              className="w-8 h-10 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 m-2 "
            />
            <img
              src={tec12}
              alt=""
              className="w-8 h-10 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 m-2 "
            />
          </div>
        </div>
      </div>
    </div>
  );
};
