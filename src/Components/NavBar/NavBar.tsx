import Burger from "../../assets/burger.svg";
import React, { useState } from "react";
import imgHome from "../../assets/home.svg";
import imgAbout from "../../assets/about.svg";
import imgProject from "../../assets/project.svg";
import imgLinkedin from "../../assets/tecnologias/linkedin.svg";
import imgGitHub from "../../assets/tecnologias/Github_dark.svg";
import imgWhatsapp from "../../assets/tecnologias/whatsapp.svg";
import imgInstagram from "../../assets/tecnologias/Instagram_dark.svg";

export const NavBar: React.FC = () => {
  const [burger, setBurger] = useState(false);

  function handleBurger(event: React.MouseEvent) {
    event.preventDefault();
    setBurger(!burger);

    console.log(burger);
  }

  return (
    <>
      <div className="w-full flex justify-end md:block md:w-1/5   md:h-screen bg-gray-900 fixed top-0 left-0 ">
        <div className="w-1/2 md:hidden flex justify-center items-center ">
          <h1 className="text-2xl font-bold text-white">Portfolio</h1>
        </div>
        {/* botonera */}
        <div className="hidden w-full h-1/2  md:flex flex-col justify-evenly items-start">
          <a href="#home">
            <div className="w-full flex ml-5 ">
              <img src={imgHome} alt="" className="w-7 mr-2" />
              <button className="md:text-lg lg:text-xl xl:text-2xl font-bold text-white  ">
                Inicio{" "}
              </button>
            </div>
          </a>
          <a href="#about">
            <div className="w-full flex ml-5 ">
              <img src={imgAbout} alt="" className="w-7 mr-2" />
              <button className="md:text-lg lg:text-xl xl:text-2xl font-bold text-white  ">
                Sobre mi
              </button>
            </div>
          </a>
          <a href="#service">
            <div className="w-full flex ml-5 ">
              <img src={imgProject} alt="" className="w-7 mr-2" />
              <button className="md:text-lg lg:text-xl xl:text-2xl font-bold text-white  ">
                Proyectos
              </button>
            </div>
          </a>{" "}
          <div className="w-full flex justify-center">
            <div className="w-3/4 h-3 bg-gray-600 "></div>
          </div>
        </div>
        {/* redes */}
        {/* redes */}
        {/* redes */}
        <div className="hidden w-full h-1/2  md:flex flex-col justify-evenly items-start">
          {" "}
          <a href="#home">
            <div className="w-full flex ml-5 ">
              <img src={imgLinkedin} alt="" className="w-7 mr-2" />
              <button className="md:text-lg lg:text-xl xl:text-2xl font-bold text-white  ">
                Linkedin
              </button>
            </div>
          </a>
          <a href="#home">
            <div className="w-full flex ml-5 ">
              <img src={imgGitHub} alt="" className="w-7 mr-2" />
              <button className="md:text-lg lg:text-xl xl:text-2xl font-bold text-white  ">
                GitHub{" "}
              </button>
            </div>
          </a>
          <a href="#home">
            <div className="w-full flex ml-5 ">
              <img src={imgWhatsapp} alt="" className="w-7 mr-2" />
              <button className="md:text-lg lg:text-xl xl:text-2xl font-bold text-white  ">
                Whatsapp{" "}
              </button>
            </div>
          </a>
          <a href="#home">
            <div className="w-full flex ml-5 ">
              <img src={imgInstagram} alt="" className="w-7 mr-2" />
              <button className="md:text-lg lg:text-xl xl:text-2xl font-bold text-white  ">
                Instagram{" "}
              </button>
            </div>
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
        <div className=" w-full h-[250px] flex flex-col justify-start   md:hidden fixed z-50 mt-20 bg-gray-800 ">
          <div className="w-full h-3/4  flex flex-col justify-evenly items-center ">
            <a href="#home">
              <button className="text-lg font-bold text-gray-300 hover:scale-110 duration-1000 hover:text-gray-800  ">
                Inicio
              </button>
            </a>
            <a href="#about">
              <button className="text-lg font-bold text-gray-300  hover:scale-110 duration-1000 hover:text-gray-800  ">
                Sobre mi
              </button>
            </a>
            <a href="#service">
              <button className="text-lg font-bold text-gray-300  hover:scale-110 duration-1000 hover:text-gray-800  ">
                Proyectos
              </button>
            </a>
          </div>
          <div className="w-full min-h-20  flex justify-evenly items-center">
            <a href="#home">
              <div className="w-full h-10 flex justify-center items-center   ">
                <img src={imgLinkedin} alt="" className="w-7 mr-2" />
              </div>
            </a>
            <a href="#home">
              <div className="w-full h-10 flex justify-center items-center   ">
                <img src={imgGitHub} alt="" className="w-7 mr-2" />
              </div>
            </a>
            <a href="#home">
              <div className="w-full h-10 flex justify-center items-center  ">
                <img src={imgWhatsapp} alt="" className="w-7 mr-2" />
              </div>
            </a>
            <a href="#home">
              <div className="w-full h-10 flex justify-center items-center   ">
                <img src={imgInstagram} alt="" className="w-7 mr-2" />
              </div>
            </a>
          </div>
        </div>
      ) : null}
    </>
  );
};
