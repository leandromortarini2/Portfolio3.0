import React from "react";
import imgPortada from "../../assets/perfil1.png";
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
import tec13 from "../../assets/tecnologias/materialui (1).svg";
import tec14 from "../../assets/tecnologias/flowbite.svg";
import tec15 from "../../assets/tecnologias/Vercel_dark.svg";
import tec16 from "../../assets/tecnologias/Astro_dark.svg";
import { FaLocationArrow } from "react-icons/fa6";

export const Home: React.FC = () => {
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
    tec16,
  ];
  return (
    <>
      <div
        id="home"
        className="hidden w-full h-screen  bg-gray-900 md:flex justify-center items-center"
      >
        <div className="w-1/2 h-screen flex flex-col justify-center items-center">
          <div className="md:w-[300px] lg:w-[600px] xl:w-[800px] xl:h-72 flex flex-col justify-evenly md:ml-10  lg:ml-52  xl:ml-64 ">
            <h3 className="text-gray-200 md:text-xl  lg:text-2xl xl:text-3xl font-semibold">
              Bienvenido/a
            </h3>
            <h3 className="text-gray-200 md:text-xl  lg:text-2xl xl:text-3xl font-semibold">
              soy
            </h3>
            <h1 className="text-sky-700 md:text-4xl lg:text-[50px] xl:text-[80px] font-bold">
              Leandro Mortarini
            </h1>
            <h2 className="text-sky-500 md:text-2xl lg:text-3xl xl:text-4xl font-semibold">
              Desarrollador Full Stack
            </h2>
            <h3 className="text-gray-200 md:text-xl lg:text-2xl  xl:text-3xl font-semibold">
              leandromortarini2@gmail.com
            </h3>
          </div>

          <div className=" w-full h-250px flex justify-center items-center overflow-hidden">
            <div className=" w-3/4 h-250px flex items-center overflow-hidden">
              <div className="slideTrack">
                {tecnologias.map((tec, index) => (
                  <div key={index} className="slide">
                    <img src={tec} alt={`Tecnología ${index + 1}`} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <a href="https://docs.google.com/document/d/e/2PACX-1vSaMUsNK5DUQArFCfDuOtO-Ys_wuCUZafXnD-Q6goJMAI2jzVeCBXrek6MVa4Z2mL-3OSb5CgYE3UjI/pub">
            <button className=" w-40 h-14 flex justify-center items-center bg-gray-700 mt-10 rounded-3xl  hover:text-sky-500 hover:bg-gray-800">
              <span className="text-white text-xl flex items-center">
                Curriculum
                <FaLocationArrow className="" />
              </span>{" "}
            </button>{" "}
          </a>
        </div>
        <div className="w-1/2 h-screen flex justify-center items-end ">
          <img
            src={imgPortada}
            alt=""
            className="md:w-[230px] lg:w-[300px] xl:w-[400px]  ShadowEffect2 imgEffectLow "
          />
        </div>
      </div>
      {/* celu */}
      {/* celu */}
      {/* celu */}
      <div className="w-full min-h-screen  bg-gray-900 flex flex-col justify-center items-center md:hidden">
        <h3 className="text-gray-300 text-lg font-semibold mt-24">
          Bienvenido/a
        </h3>
        <div className="w-full  flex justify-center items-center ">
          <img
            src={imgPortada}
            alt=""
            className="w-1/2   ShadowEffect imgEffectLow"
          />
        </div>
        <div className="w-full  flex flex-col justify-evenly items-center  ">
          <h3 className="text-gray-300 text-lg   font-semibold">soy</h3>
          <h1 className="text-white text-3xl font-bold">Leandro Mortarini</h1>
          <h2 className="text-white text-lg  font-semibold">
            Desarrollador Full Stack
          </h2>
          <h3 className="text-gray-300 md:text-xl lg:text-2xl  xl:text-3xl font-semibold">
            leandromortarini2@gmail.com
          </h3>
        </div>
        <div className=" w-full h-250px flex justify-center items-center overflow-hidden">
          <div className=" w-3/4 h-250px flex items-center overflow-hidden">
            <div className="slideTrack">
              {tecnologias.map((tec, index) => (
                <div key={index} className="slide">
                  <img src={tec} alt={`Tecnología ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
