import React from "react";
import imgPortada from "../../assets/cohete.svg";

export const Home: React.FC = () => {
  return (
    <>
      <div className="w-full min-h-screen bg-white flex">
        <div className="w-1/2 h-screen  flex flex-col justify-center items-start ml-20">
          <h2 className=" text-gray-700 text-3xl font-semibold">
            Bienvenido/a{" "}
          </h2>
          <h3 className="text-gray-700 text-3xl font-semibold">soy</h3>
          <h1 className="text-[80px]  text-white font-bold">
            Leandro Mortarini
          </h1>
          <h2 className="text-4xl font-bold text-sky-300">
            Full Stack Developer
          </h2>
          <h3 className="text-gray-500 text-3xl font-semibold">
            leandromortarini2@gmail.com
          </h3>
        </div>
        <div className="w-1/2 flex justify-center">
          <img src={imgPortada} alt="" className="w-3/4" />
        </div>
      </div>
    </>
  );
};
