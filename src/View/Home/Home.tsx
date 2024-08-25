import React from "react";
import { motion } from "framer-motion";
import imgPortada from "../../assets/perfil1.png";
import { arrayTech } from "../../Helpers/ArrayTech";
import { FaLocationArrow } from "react-icons/fa6";
import { HomeMobie } from "../../Components/HomeMobie/HomeMobie";

export const Home: React.FC = () => {
  return (
    <>
      <div
        id="home"
        className="hidden w-full h-screen bg-gray-900 md:flex justify-center items-center"
      >
        <div className="w-1/2 h-screen flex flex-col justify-center items-center">
          <div className="md:w-[300px] lg:w-[600px] xl:w-[800px] xl:h-72 flex flex-col justify-evenly md:ml-10 lg:ml-52 xl:ml-64">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <h3 className="text-gray-200 md:text-xl lg:text-2xl xl:text-3xl font-semibold">
                Bienvenido/a
              </h3>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <h3 className="text-gray-200 md:text-xl lg:text-2xl xl:text-3xl font-semibold">
                soy
              </h3>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 3 }}
            >
              <h1 className="text-sky-700 md:text-4xl lg:text-[50px] xl:text-[80px] font-bold">
                Leandro Mortarini
              </h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2, delay: 1 }}
            >
              <h2 className="text-sky-500 md:text-2xl lg:text-3xl xl:text-4xl font-semibold">
                Desarrollador Frontend
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2, delay: 2 }}
            >
              <h3 className="text-gray-200 md:text-xl lg:text-2xl xl:text-3xl font-semibold">
                Leandromortarini2@gmail.com
              </h3>
            </motion.div>
          </div>
          <motion.div
            className="w-full h-250px flex justify-center items-center overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 2.5 }}
          >
            <div className="w-3/4 h-250px flex items-center overflow-hidden">
              <div className="slideTrack">
                {arrayTech.map((tec, index) => (
                  <div key={index} className="slide">
                    <img src={tec} alt={`Tecnología ${index + 1}`} />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 2 }}
          >
            <a href="https://docs.google.com/document/d/e/2PACX-1vSaMUsNK5DUQArFCfDuOtO-Ys_wuCUZafXnD-Q6goJMAI2jzVeCBXrek6MVa4Z2mL-3OSb5CgYE3UjI/pub">
              <button className="w-40 h-14 flex justify-center items-center bg-gray-700 mt-10 rounded-3xl hover:text-sky-500 hover:bg-gray-800">
                <span className="text-white text-xl flex items-center">
                  Curriculum
                  <FaLocationArrow className="" />
                </span>
              </button>
            </a>
          </motion.div>
        </div>
        <motion.div
          className="w-1/2 h-screen flex justify-center items-end"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 2 }}
        >
          <img
            src={imgPortada}
            alt=""
            className="md:w-[230px] lg:w-[300px] xl:w-[400px] ShadowEffect2 imgEffectLow"
          />
        </motion.div>
      </div>
      <HomeMobie />
    </>
  );
};
