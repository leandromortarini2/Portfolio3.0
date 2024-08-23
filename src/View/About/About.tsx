import React from "react";
import { arrayTech } from "../../Helpers/ArrayTech";

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
          <p className="text-gray-200 p-5 text-center md:text-center md:text-sm lg:text-md xl:text-2xl font-bold ">
            Hola, soy{" "}
            <span className="text-sky-600 ">Desarrollador Frontend</span>{" "}
            enfocado en la construcción de aplicaciones web dinámicas y
            visualmente atractivas. Me especializo en el uso de tecnologías
            clave como{" "}
            <span className="text-sky-600 ">
              JavaScript, TypeScript y React{" "}
            </span>
            , con experiencia en la implementación de{" "}
            <span className="text-sky-600 ">Redux </span>
            para una gestión de estado eficiente y escalable. <br />
            Actualmente, estoy colaborando con la empresa Inflatrack en el
            desarrollo de un{" "}
            <span className="text-sky-600 ">
              software de gestión de comercio{" "}
            </span>
            , lo que me ha permitido aplicar y expandir mis habilidades en un
            entorno empresarial real. Además, realizó desarrollos de
            aplicaciones web de manera freelance para clientes reales, lo que
            reafirma mi capacidad para entregar resultados de alta calidad.
          </p>
        </div>
        <div className=" w-full h-250px flex justify-center items-center overflow-hidden">
          <div className=" w-3/4 h-250px flex items-center overflow-hidden">
            <div className="slideTrack">
              {arrayTech.map((tec, index) => (
                <div key={index} className="slide">
                  <img src={tec} alt={`Tecnología ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
