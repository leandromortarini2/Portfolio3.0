import { ImHome } from "react-icons/im";
import { BsRocketTakeoff } from "react-icons/bs";
import { BsFillPersonVcardFill } from "react-icons/bs";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";
import { Redes } from "../Redes/Redes";
import { useState } from "react";
import { IoMdBriefcase } from "react-icons/io";

export const NavBar: React.FC = () => {
  const [positionHome, setPositionHome] = useState(true);
  const [positionAbout, setPositionAbout] = useState(false);
  const [positionProject, setPositionProject] = useState(false);
  const [positionExperience, setPositionExperience] = useState(false); // Nuevo estado

  function handlePositionHome() {
    setPositionHome(true);
    setPositionAbout(false);
    setPositionProject(false);
    setPositionExperience(false);
  }

  function handlePositionAbout() {
    setPositionAbout(true);
    setPositionHome(false);
    setPositionProject(false);
    setPositionExperience(false);
  }

  function handlePositionProject() {
    setPositionProject(true);
    setPositionAbout(false);
    setPositionHome(false);
    setPositionExperience(false);
  }

  function handlePositionExperience() {
    // Nueva función
    setPositionExperience(true);
    setPositionProject(false);
    setPositionAbout(false);
    setPositionHome(false);
  }

  return (
    <>
      <div className="w-full flex justify-end md:block md:w-1/5 md:h-screen bg-gray-950 fixed top-0 left-0 z-50">
        {/* Botonera */}
        <div className="hidden w-full h-1/2 md:flex flex-col justify-evenly items-center">
          <a href="#home" onClick={handlePositionHome}>
            <div className="w-full flex items-center justify-center">
              <span
                className={`md:text-lg lg:text-xl xl:text-2xl font-semibold ${
                  positionHome ? "text-sky-500" : "text-white"
                } hover:text-sky-500 flex items-center`}
              >
                <ImHome className="mr-2" /> Inicio
              </span>
            </div>
          </a>
          <a href="#about" onClick={handlePositionAbout}>
            <div className="w-full flex items-center justify-center">
              <span
                className={`md:text-lg lg:text-xl xl:text-2xl font-semibold ${
                  positionAbout ? "text-sky-500" : "text-white"
                } hover:text-sky-500 flex items-center`}
              >
                <BsFillPersonVcardFill className="mr-2" /> Sobre Mi
              </span>
            </div>
          </a>
          <a href="#project" onClick={handlePositionProject}>
            <div className="w-full flex items-center justify-center">
              <span
                className={`md:text-lg lg:text-xl xl:text-2xl font-semibold ${
                  positionProject ? "text-sky-500" : "text-white"
                } hover:text-sky-500 flex items-center`}
              >
                <BsRocketTakeoff className="mr-2" /> Proyectos
              </span>
            </div>
          </a>
          <a href="#experience" onClick={handlePositionExperience}>
            {" "}
            {/* Ruta actualizada */}
            <div className="w-full flex items-center justify-center">
              <span
                className={`md:text-lg lg:text-xl xl:text-2xl font-semibold ${
                  positionExperience ? "text-sky-500" : "text-white"
                } hover:text-sky-500 flex items-center`}
              >
                <IoMdBriefcase className="mr-2" /> Experiencia
              </span>
            </div>
          </a>
        </div>
        <div className="hidden w-full md:flex justify-center">
          <div className="w-3/4 h-1 bg-slate-700"></div>
        </div>
        {/* Redes */}
        <Redes />
        <BurgerMenu />
      </div>
    </>
  );
};
