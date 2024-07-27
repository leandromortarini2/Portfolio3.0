import React from "react";
import imgPortada from "../../assets/portada3.jpg";

export const Home: React.FC = () => {
  return (
    <>
      <div className="w-full min-h-screen bg-black flex">
        <div className="w-1/3 h-screen  flex  justify-center items-center ml-20  ">
          <div>
            <h1 className=" text-[100px]   text-orange-500 font-bold ">
              Leandro Mortarini
            </h1>
          </div>
        </div>
        <div className="w-1/3 h-screen overflow-hidden flex  ">
          <img src={imgPortada} alt="" className="w-full" />
        </div>
        <div className="w-1/3 h-screen overflow-hidden flex flex-col justify-center items-center bg-slate-800">
          <h3>Bienvenido</h3>
          <h3 className="text-gray-500 text-lg font-semibold">
            Mi enfoque se centra en crear aplicaciones web modernas y altamente
            funcionales, ofreciendo interfaces responsivas y atractivas. Con un
            firme compromiso, habilidades de trabajo en equipo y una gran
            determinación, garantizo resultados que superan las expectativas del
            cliente.
          </h3>
        </div>
      </div>
    </>
  );
};
