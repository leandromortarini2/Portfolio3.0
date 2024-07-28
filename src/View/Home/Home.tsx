import React from "react";
import imgPortada from "../../assets/perfil1.png";

export const Home: React.FC = () => {
  return (
    <>
      <div className="w-full h-screen  bg-gray-900 flex justify-center items-center">
        <div className="w-1/2 h-screen flex flex-col justify-center items-center">
          <div className="md:w-[300px] lg:w-[600px] xl:w-[800px] xl:h-72 flex flex-col justify-evenly md:ml-10  lg:ml-52  xl:ml-64 ">
            <h3 className="text-gray-300 md:text-xl  lg:text-2xl xl:text-3xl font-semibold">
              Bienvenido/a
            </h3>
            <h3 className="text-gray-300 md:text-xl  lg:text-2xl xl:text-3xl font-semibold">
              soy
            </h3>
            <h1 className="text-white md:text-4xl lg:text-[50px] xl:text-[80px] font-bold">
              Leandro Mortarini
            </h1>
            <h2 className="text-white md:text-2xl lg:text-3xl xl:text-4xl font-semibold">
              Desarrollador Full Stack
            </h2>
            <h3 className="text-gray-300 md:text-xl lg:text-2xl  xl:text-3xl font-semibold">
              leandromortarini2@gmail.com
            </h3>
          </div>
          <div className="w-3/4 md:h-14 lg:h-24 xl:h-32 flex justify-end items-end">
            <button className=" md:w-32 lg:w-40 xl:w-52 md:h-8  lg:h-10 xl:h-14 bg-white text-gray-900 md:text-md lg:text-lg xl:text-xl  font-bold rounded-2xl">
              Ir al Curriculum
            </button>
          </div>
        </div>
        <div className="w-1/2 h-screen flex justify-center items-end ">
          <img
            src={imgPortada}
            alt=""
            className="md:w-[230px] lg:w-[300px] xl:w-[400px]  ShadowEffect imgEffectLow"
          />
        </div>
      </div>
    </>
  );
};
