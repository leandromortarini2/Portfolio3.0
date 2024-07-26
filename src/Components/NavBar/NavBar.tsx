import Burger from "../../assets/burger.svg";
import React, { useState } from "react";

export const NavBar: React.FC = () => {
  const [burger, setBurger] = useState(false);

  function handleBurger(event: React.MouseEvent) {
    event.preventDefault();
    setBurger(!burger);

    console.log(burger);
  }

  return (
    <>
      <div className=" w-full h-20 bg-white flex  fixed z-50">
        <div className="w-1/2 sm:w-1/4 flex justify-center items-center">
          <h2 className=" text-lg font-semibold  sm:text-azul xl:text-3xl sm:font-bold tracking-[2px]  ">
            Developer
          </h2>
        </div>
        {/* botonera */}
        <div className="hidden w-3/4 h-20  md:flex justify-evenly items-center">
          <a href="#home">
            <button className="md:text-lg lg:text-xl xl:text-2xl font-bold text-azul hover:scale-110 duration-1000 hover:text-gray-800 ">
              Inicio{" "}
            </button>
          </a>
          <a href="#about">
            <button className="md:text-lg lg:text-xl xl:text-2xl font-bold text-azul hover:scale-110 duration-1000 hover:text-gray-800 ">
              Conocenos
            </button>
          </a>
          <a href="#service">
            <button className="md:text-lg lg:text-xl xl:text-2xl font-bold text-azul hover:scale-110 duration-1000 hover:text-gray-800 ">
              Servicios
            </button>
          </a>
          <a href="#contacto">
            <button className="md:text-lg lg:text-xl xl:text-2xl font-bold text-azul hover:scale-110 duration-1000 hover:text-gray-800 ">
              Contacto
            </button>
          </a>
        </div>
        {/* hamburguesa */}
        <div className="w-1/2 h-20 flex justify-end items-center md:hidden ">
          <button onClick={handleBurger}>
            <img src={Burger} alt="" className="w-12 mr-2" />
          </button>
        </div>
      </div>{" "}
      {/* container burger */}
      {burger === true ? (
        <div className=" w-full h-72 flex justify-end  md:hidden fixed z-50 mt-20 ">
          <div className="w-1/2 h-72  flex flex-col justify-evenly items-end bg-gray-300">
            <a href="#home">
              <button className="text-lg font-bold text-gray-800 hover:scale-110 duration-1000 hover:text-gray-800  mr-5">
                Inicio
              </button>
            </a>
            <a href="#about">
              <button className="text-lg font-bold text-gray-800  hover:scale-110 duration-1000 hover:text-gray-800  mr-5">
                Conocenos
              </button>
            </a>
            <a href="#service">
              <button className="text-lg font-bold text-gray-800  hover:scale-110 duration-1000 hover:text-gray-800  mr-5">
                Servicios
              </button>
            </a>

            <a href="#contacto">
              <button className="text-lg font-bold text-gray-800  hover:scale-110 duration-1000 hover:text-gray-800  mr-5">
                Contacto
              </button>
            </a>
          </div>
        </div>
      ) : null}
    </>
  );
};
