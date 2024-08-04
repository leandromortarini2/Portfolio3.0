import React, { useState } from "react";
import { ImHome } from "react-icons/im";
import { BsRocketTakeoff } from "react-icons/bs";
import { BsFillPersonVcardFill } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsRocket } from "react-icons/bs";

export const BurgerMenu: React.FC = () => {
  const [burger, setBurger] = useState(false);

  function handleBurger() {
    setBurger(!burger);

    console.log(burger);
  }
  return (
    <>
      <div className="w-1/2 md:hidden  flex justify-center items-center">
        <span className="text-gray-300 font-bold  tracking-wider text-xl ballMovile flex justify-center items-center ml-5 ">
          <BsRocket />
          Developer
        </span>
      </div>
      {/* hamburguesa */}
      <div className="w-1/2 h-20 flex justify-end items-center z-50 md:hidden  ">
        <button onClick={handleBurger}>
          <GiHamburgerMenu className="text-4xl text-white hover:text-sky-500 mr-5 " />
        </button>
      </div>
      {burger === true ? (
        <div className=" w-full h-[370px] flex flex-col justify-center items-center   md:hidden fixed z-50 mt-20 bg-gray-800 ">
          <div className="w-full h-3/4  flex flex-col justify-evenly items-center ">
            <a href="#homeMobie" onClick={handleBurger}>
              <span className="text-white hover:text-sky-500 text-xl font-semibold flex items-center">
                <ImHome className="mr-2" /> Inicio
              </span>
            </a>
            <a href="#about" onClick={handleBurger}>
              <span className="text-white hover:text-sky-500 text-xl font-semibold flex items-center">
                <BsFillPersonVcardFill className="mr-2" /> Sobre Mi
              </span>
            </a>
            <a href="#project" onClick={handleBurger}>
              <span className="text-white hover:text-sky-500 text-xl font-semibold flex items-center">
                <BsRocketTakeoff className="mr-2" /> Proyectos
              </span>
            </a>
          </div>
          <div className="w-3/4 min-h-20  flex justify-evenly items-center bg-gray-700 rounded-2xl">
            <a href="https://www.linkedin.com/in/leandro-mortarini/">
              <div className="w-full h-10 flex justify-center items-center   ">
                <span className="text-white hover:text-sky-500 text-xl flex items-center">
                  <IoLogoLinkedin className="" />
                </span>{" "}
              </div>
            </a>
            <a href="https://github.com/leandromortarini2">
              <div className="w-full h-10 flex justify-center items-center   ">
                <span className="text-white hover:text-sky-500 text-xl flex items-center">
                  <FaGithub className="" />
                </span>{" "}
              </div>
            </a>
            <a href="https://wa.me/541126034427?text=Hola%20Leandro%2C%20estuve%20viendo%20tu%20portfolio%20y%20me%20interesa%20hablar%20contigo">
              <div className="w-full h-10 flex justify-center items-center  ">
                <span className="text-white hover:text-sky-500 text-xl flex items-center">
                  <FaWhatsapp className="" />
                </span>{" "}
              </div>
            </a>
            <a href="https://www.instagram.com/mortajunior/">
              <div className="w-full h-10 flex justify-center items-center   ">
                <span className="text-white hover:text-sky-500 text-xl flex items-center">
                  <FaInstagram className="" />
                </span>{" "}
              </div>
            </a>
          </div>
          <div className="w-full h-20 flex justify-center items-center bg-gray-700 mt-10 ">
            <a href="https://docs.google.com/document/d/e/2PACX-1vSaMUsNK5DUQArFCfDuOtO-Ys_wuCUZafXnD-Q6goJMAI2jzVeCBXrek6MVa4Z2mL-3OSb5CgYE3UjI/pub">
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
