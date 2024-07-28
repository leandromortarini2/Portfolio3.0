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
  return (
    <>
      <div
        id="about"
        className=" w-full h-screen  bg-white flex flex-col justify-center "
      >
        {/* info e img */}
        {/* info e img */}
        {/* info e img */}
        <div className=" w-full h-3/4  flex  justify-center items-center ">
          <div className="w-1/2   ">
            <h1 className="text-gray-900 md:text-4xl lg:text-[50px] xl:text-[60px] font-bold mt-20 ml-20 mb-10 ">
              Sobre mi
            </h1>
            <p className="text-gray-700 ml-20 text-justify text-xl font-bold">
              Me formé como en el boot camp de Henry como Full Stack Developer
              con especialización en Front End. Mi enfoque se centra en crear
              aplicaciones web modernas y altamente funcionales, ofreciendo
              interfaces responsivas y atractivas. Con un firme compromiso,
              habilidades de trabajo en equipo y una gran determinación,
              garantizo resultados que superan las expectativas del cliente.
            </p>
          </div>{" "}
          <div className="w-1/2  flex justify-center items-center opacity-70 ">
            <img src={cohete} alt="" className="w-96 " />
          </div>
        </div>
        {/* slider */}
        {/* slider */}
        {/* slider */}
        <div className="slider">
          <div className="slideTrack">
            {/* 1 */}
            <div className="slide">
              <img src={tec1} alt="" />
            </div>
            {/* 2*/}
            <div className="slide">
              <img src={tec2} alt="" />
            </div>
            {/* 3 */}
            <div className="slide">
              <img src={tec3} alt="" />
            </div>
            {/* 4 */}
            <div className="slide">
              <img src={tec4} alt="" />
            </div>
            {/* 5 */}
            <div className="slide">
              <img src={tec5} alt="" />
            </div>
            {/* 6 */}
            <div className="slide">
              <img src={tec6} alt="" />
            </div>
            {/* 7 */}
            <div className="slide">
              <img src={tec7} alt="" />
            </div>
            {/* 8 */}
            <div className="slide">
              <img src={tec8} alt="" />
            </div>
            {/* 9 */}
            <div className="slide">
              <img src={tec9} alt="" />
            </div>
            {/* 10 */}
            <div className="slide">
              <img src={tec10} alt="" />
            </div>
            {/* 11 */}
            <div className="slide">
              <img src={tec11} alt="" />
            </div>
            {/* 12 */}
            <div className="slide">
              <img src={tec12} alt="" />
            </div>
            {/* 13 */}
            <div className="slide">
              <img src={tec13} alt="" />
            </div>
            {/* 14 */}
            <div className="slide">
              <img src={tec14} alt="" />
            </div>
            {/* 15 */}
            <div className="slide">
              <img src={tec15} alt="" />
            </div>

            <div className="slide">
              <img src={tec1} alt="" />
            </div>

            {/* 2*/}
            <div className="slide">
              <img src={tec2} alt="" />
            </div>
            {/* 3 */}
            <div className="slide">
              <img src={tec3} alt="" />
            </div>
            {/* 4 */}
            <div className="slide">
              <img src={tec4} alt="" />
            </div>
            {/* 5 */}
            <div className="slide">
              <img src={tec5} alt="" />
            </div>
            {/* 6 */}
            <div className="slide">
              <img src={tec6} alt="" />
            </div>
            {/* 7 */}
            <div className="slide">
              <img src={tec7} alt="" />
            </div>
            {/* 8 */}
            <div className="slide">
              <img src={tec8} alt="" />
            </div>
            {/* 9 */}
            <div className="slide">
              <img src={tec9} alt="" />
            </div>
            {/* 10 */}
            <div className="slide">
              <img src={tec10} alt="" />
            </div>
            {/* 11 */}
            <div className="slide">
              <img src={tec11} alt="" />
            </div>
            {/* 12 */}
            <div className="slide">
              <img src={tec12} alt="" />
            </div>
            {/* 13 */}
            <div className="slide">
              <img src={tec13} alt="" />
            </div>
            {/* 14 */}
            <div className="slide">
              <img src={tec14} alt="" />
            </div>
            {/* 15 */}
            <div className="slide">
              <img src={tec15} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
