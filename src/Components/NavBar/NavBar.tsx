import { ImHome } from "react-icons/im";
import { BsRocketTakeoff } from "react-icons/bs";
import { BsFillPersonVcardFill } from "react-icons/bs";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";
import { Redes } from "../Redes/Redes";
import { useState } from "react";

export const NavBar: React.FC = () => {
  const [positionHome, setpositionHome] = useState(true);
  const [positionAbout, setpositionAbout] = useState(false);
  const [positionProject, setpositionProject] = useState(false);

  function handlepositionHome() {
    setpositionHome(true);
    setpositionAbout(false);
    setpositionProject(false);
  }
  function handlepositionAbout() {
    setpositionAbout(true);
    setpositionHome(false);
    setpositionProject(false);
  }
  function handlepositionProject() {
    setpositionProject(true);
    setpositionAbout(false);
    setpositionHome(false);
  }

  return (
    <>
      <div className="w-full flex justify-end md:block md:w-1/5   md:h-screen bg-gray-950 fixed top-0 left-0 z-50">
        {/* botonera */}
        <div className="hidden w-full h-1/2  md:flex flex-col justify-evenly items-center">
          <a href="#home" onClick={handlepositionHome}>
            <div className="w-full flex items-center justify-center ">
              <span
                className={`md:text-lg lg:text-xl xl:text-2xl font-semibold ${
                  positionHome === true ? "text-sky-500" : "text-white"
                }  hover:text-sky-500 flex items-center`}
              >
                <ImHome className="mr-2" /> Inicio
              </span>
            </div>
          </a>
          <a href="#about" onClick={handlepositionAbout}>
            <div className="w-full flex items-center justify-center ">
              <span
                className={`md:text-lg lg:text-xl xl:text-2xl font-semibold ${
                  positionAbout === true ? "text-sky-500" : "text-white"
                } hover:text-sky-500 flex items-center`}
              >
                <BsFillPersonVcardFill className="mr-2" /> Sobre Mi
              </span>
            </div>
          </a>
          <a href="#project" onClick={handlepositionProject}>
            <div className="w-full flex items-center justify-center ">
              <span
                className={`md:text-lg lg:text-xl xl:text-2xl font-semibold ${
                  positionProject === true ? "text-sky-500" : "text-white"
                } hover:text-sky-500 flex items-center`}
              >
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
        <Redes />
        <BurgerMenu />
      </div>
    </>
  );
};
