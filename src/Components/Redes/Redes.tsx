import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";

export const Redes = () => {
  return (
    <div className="hidden w-full h-1/2  md:flex flex-col justify-evenly items-center">
      {" "}
      <a href="https://www.linkedin.com/in/leandro-mortarini/">
        <div className="w-full flex items-center justify-center ">
          <span className="md:text-lg lg:text-xl xl:text-2xl font-semibold text-white hover:text-sky-500 flex items-center">
            <IoLogoLinkedin className="mr-2" /> LinkedIn
          </span>
        </div>
      </a>
      <a href="https://github.com/leandromortarini2">
        <div className="w-full flex items-center justify-center ">
          <span className="md:text-lg lg:text-xl xl:text-2xl font-semibold text-white hover:text-sky-500 flex items-center">
            <FaGithub className="mr-2" /> GitHub
          </span>
        </div>
      </a>
      <a href="https://wa.me/541126034427?text=Hola%20Leandro%2C%20estuve%20viendo%20tu%20portfolio%20y%20me%20interesa%20hablar%20contigo">
        <div className="w-full flex items-center justify-center ">
          <span className="md:text-lg lg:text-xl xl:text-2xl font-semibold text-white hover:text-sky-500 flex items-center">
            <FaWhatsapp className="mr-2" /> Whatsapp
          </span>
        </div>
      </a>
      <a href="https://www.instagram.com/mortajunior/">
        <div className="w-full flex items-center justify-center ">
          <span className="md:text-lg lg:text-xl xl:text-2xl font-semibold text-white hover:text-sky-500 flex items-center">
            <FaInstagram className="mr-2" /> Instagram
          </span>
        </div>
      </a>
    </div>
  );
};
