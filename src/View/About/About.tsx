import React from "react";
import cohete from "../../assets/cohete.svg";
import tec1 from "../../assets/tecnologias/react.svg";
import tec2 from "../../assets/tecnologias/javascript.svg";
import tec3 from "../../assets/tecnologias/typescript.svg";
import tec4 from "../../assets/tecnologias/nextjs_icon_dark.svg";
import tec5 from "../../assets/tecnologias/tailwindcss.svg";
import tec6 from "../../assets/tecnologias/html5.svg";
import tec7 from "../../assets/tecnologias/css.svg";
import tec8 from "../../assets/tecnologias/nodejs.svg";
import tec9 from "../../assets/tecnologias/Express.js_light.svg";
import tec10 from "../../assets/tecnologias/postgresql.svg";
import tec11 from "../../assets/tecnologias/mongodb.svg";
import tec12 from "../../assets/tecnologias/typeorm.svg";
import tec13 from "../../assets/tecnologias/materialui (1).svg";
import tec14 from "../../assets/tecnologias/flowbite.svg";
import tec15 from "../../assets/tecnologias/Vercel_light.svg";

export const About: React.FC = () => {
  const tecnologias = [
    tec1,
    tec2,
    tec3,
    tec4,
    tec5,
    tec6,
    tec7,
    tec8,
    tec9,
    tec10,
    tec11,
    tec12,
    tec13,
    tec14,
    tec15,
    tec1,
    tec2,
    tec3,
    tec4,
    tec5,
    tec6,
    tec7,
    tec8,
    tec9,
    tec10,
    tec11,
    tec12,
    tec13,
    tec14,
    tec15,
  ];

  return (
    <div
      id="about"
      className="w-full h-screen bg-white flex flex-col justify-center"
    >
      <div className="w-full h-3/4 flex justify-center items-center">
        <div className="w-1/2">
          <h1 className="text-orange-600 md:text-4xl lg:text-[50px] xl:text-[60px] font-bold mt-20 ml-20 mb-10">
            Sobre mí
          </h1>
          <p className="text-gray-800 ml-20 text-justify text-xl font-bold">
            Me formé en el boot camp de Henry como{" "}
            <span className="text-orange-600">
              Full Stack Developer con especialización en Front End.
            </span>{" "}
            <br />
            Mi experiencia se centra en tecnologías como{" "}
            <span className="text-orange-600">
              React, TypeScript, Javascript, Tailwind, Node.js, Express, Next,
              entre otras.
            </span>{" "}
            Mi enfoque se centra en crear aplicaciones web modernas y altamente
            funcionales, ofreciendo interfaces responsivas y atractivas. Con un
            firme compromiso, habilidades de trabajo en equipo y una gran
            determinación. <br />
            <span className="text-orange-600">
              Garantizo resultados que superan las expectativas del cliente.
            </span>
          </p>
        </div>
        <div className="w-1/2 flex justify-center items-center ">
          <img src={cohete} alt="Cohete" className="w-96" />
        </div>
      </div>

      <div className="slider">
        <div className="slideTrack">
          {tecnologias.map((tec, index) => (
            <div key={index} className="slide">
              <img src={tec} alt={`Tecnología ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
