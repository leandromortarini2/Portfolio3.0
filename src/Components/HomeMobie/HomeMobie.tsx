import { motion } from "framer-motion";
import imgPortada from "../../assets/perfil1.png";
import { arrayTech } from "../../Helpers/ArrayTech";

export const HomeMobie = () => {
  return (
    <div
      id="homeMobie"
      className="w-full min-h-screen bg-gray-900 flex flex-col justify-center items-center md:hidden"
    >
      <motion.h3
        className="text-gray-300 text-lg font-semibold mt-24"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Bienvenido/a
      </motion.h3>
      <motion.div
        className="w-full flex justify-center items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <img
          src={imgPortada}
          alt=""
          className="w-1/2 ShadowEffect2 imgEffectLow"
        />
      </motion.div>
      <motion.div
        className="w-full flex flex-col justify-evenly items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <motion.h3
          className="text-gray-300 text-lg font-semibold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          soy
        </motion.h3>
        <motion.h1
          className="text-sky-700 text-3xl font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Leandro Mortarini
        </motion.h1>
        <motion.h2
          className="text-sky-500 text-lg font-semibold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Desarrollador Frontend
        </motion.h2>
        <motion.h3
          className="text-gray-300 md:text-xl lg:text-2xl xl:text-3xl font-semibold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          leandromortarini2@gmail.com
        </motion.h3>
      </motion.div>
      <motion.div
        className="w-full h-250px flex justify-center items-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <div className="w-3/4 h-250px flex items-center overflow-hidden">
          <div className="slideTrack">
            {arrayTech.map((tec, index) => (
              <div key={index} className="slide">
                <motion.img
                  src={tec}
                  alt={`Tecnología ${index + 1}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};
