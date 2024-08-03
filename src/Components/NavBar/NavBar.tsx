import Burger from "../../assets/burger.svg";
import React, { useState } from "react";
import { ImHome } from "react-icons/im";
import { BsRocketTakeoff } from "react-icons/bs";
import { BsFillPersonVcardFill } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa6";

export const NavBar: React.FC = () => {
  const [burger, setBurger] = useState(false);

  function handleBurger(event: React.MouseEvent) {
    event.preventDefault();
    setBurger(!burger);

    console.log(burger);
  }

  return (
    <>
      <div className="w-full flex justify-end md:block md:w-1/5   md:h-screen bg-gray-950 fixed top-0 left-0 z-50">
        {/* botonera */}
        <div className="hidden w-full h-1/2  md:flex flex-col justify-evenly items-center">
          <a href="#home">
            <div className="w-full flex items-center justify-center ">
              <span className="md:text-lg lg:text-xl xl:text-2xl font-semibold text-white hover:text-sky-500 flex items-center">
                <ImHome className="mr-2" /> Inicio
              </span>
            </div>
          </a>
          <a href="#about">
            <div className="w-full flex items-center justify-center ">
              <span className="md:text-lg lg:text-xl xl:text-2xl font-semibold text-white hover:text-sky-500 flex items-center">
                <BsFillPersonVcardFill className="mr-2" /> Sobre mi
              </span>
            </div>
          </a>
          <a href="#project">
            <div className="w-full flex items-center justify-center ">
              <span className="md:text-lg lg:text-xl xl:text-2xl font-semibold text-white hover:text-sky-500 flex items-center">
                <BsRocketTakeoff className="mr-2" /> Proyectos
              </span>
            </div>
          </a>{" "}
        </div>
        <div className="hidden w-full md:flex justify-center ">
          <div className="w-3/4 h-1 bg-slate-700 "></div>
        </div>
        {/* redes */}
        {/* redes */}
        {/* redes */}
        <div className="hidden w-full h-1/2  md:flex flex-col justify-evenly items-center">
          {" "}
          <a href="#home">
            <div className="w-full flex items-center justify-center ">
              <span className="md:text-lg lg:text-xl xl:text-2xl font-semibold text-white hover:text-sky-500 flex items-center">
                <IoLogoLinkedin className="mr-2" /> LinkedIn
              </span>
            </div>
          </a>
          <a href="#home">
            <div className="w-full flex items-center justify-center ">
              <span className="md:text-lg lg:text-xl xl:text-2xl font-semibold text-white hover:text-sky-500 flex items-center">
                <FaGithub className="mr-2" /> GitHub
              </span>
            </div>
          </a>
          <a href="#home">
            <div className="w-full flex items-center justify-center ">
              <span className="md:text-lg lg:text-xl xl:text-2xl font-semibold text-white hover:text-sky-500 flex items-center">
                <FaWhatsapp className="mr-2" /> Whatsapp
              </span>
            </div>
          </a>
          <a href="#home">
            <div className="w-full flex items-center justify-center ">
              <span className="md:text-lg lg:text-xl xl:text-2xl font-semibold text-white hover:text-sky-500 flex items-center">
                <FaInstagram className="mr-2" /> Instagram
              </span>
            </div>
          </a>
        </div>

        {/* hamburguesa */}
        <div className="w-1/2 h-20 flex justify-end items-center z-50 md:hidden  ">
          <button onClick={handleBurger}>
            <img src={Burger} alt="" className="w-12 mr-2" />
          </button>
        </div>
      </div>{" "}
      {/* container burger */}
      {burger === true ? (
        <div className=" w-full h-[370px] flex flex-col justify-center items-center   md:hidden fixed z-50 mt-20 bg-gray-800 ">
          <div className="w-full h-3/4  flex flex-col justify-evenly items-center ">
            <a href="#home">
              <span className="text-white hover:text-sky-500 text-xl font-semibold flex items-center">
                <ImHome className="mr-2" /> Inicio
              </span>
            </a>
            <a href="#about">
              <span className="text-white hover:text-sky-500 text-xl font-semibold flex items-center">
                <BsFillPersonVcardFill className="mr-2" /> Sobre Mi
              </span>
            </a>
            <a href="#project">
              <span className="text-white hover:text-sky-500 text-xl font-semibold flex items-center">
                <BsRocketTakeoff className="mr-2" /> Proyectos
              </span>
            </a>
          </div>
          <div className="w-3/4 min-h-20  flex justify-evenly items-center bg-gray-700 rounded-2xl">
            <a href="#home">
              <div className="w-full h-10 flex justify-center items-center   ">
                <span className="text-white hover:text-sky-500 text-xl flex items-center">
                  <IoLogoLinkedin className="" />
                </span>{" "}
              </div>
            </a>
            <a href="#home">
              <div className="w-full h-10 flex justify-center items-center   ">
                <span className="text-white hover:text-sky-500 text-xl flex items-center">
                  <FaGithub className="" />
                </span>{" "}
              </div>
            </a>
            <a href="#home">
              <div className="w-full h-10 flex justify-center items-center  ">
                <span className="text-white hover:text-sky-500 text-xl flex items-center">
                  <FaWhatsapp className="" />
                </span>{" "}
              </div>
            </a>
            <a href="#home">
              <div className="w-full h-10 flex justify-center items-center   ">
                <span className="text-white hover:text-sky-500 text-xl flex items-center">
                  <FaInstagram className="" />
                </span>{" "}
              </div>
            </a>
          </div>
          <div className="w-full h-20 flex justify-center items-center bg-gray-700 mt-10 ">
            <a href="#home">
              <span className="text-white hover:text-sky-500 text-xl flex items-center">
                Curriculum
                <FaLocationArrow className="" />
              </span>{" "}
            </a>
          </div>
        </div>
      ) : null}
    </>
  );
};
