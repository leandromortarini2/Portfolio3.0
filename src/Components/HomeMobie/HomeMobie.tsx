import imgPortada from "../../assets/perfil1.png";
import { arrayTech } from "../../Helpers/ArrayTech";

export const HomeMobie = () => {
  return (
    <>
      {/* celu */}
      {/* celu */}
      {/* celu */}
      <div
        id="homeMobie"
        className="w-full min-h-screen  bg-gray-900 flex flex-col justify-center items-center md:hidden"
      >
        <h3 className="text-gray-300 text-lg font-semibold mt-24">
          Bienvenido/a
        </h3>
        <div className="w-full  flex justify-center items-center ">
          <img
            src={imgPortada}
            alt=""
            className="w-1/2   ShadowEffect2 imgEffectLow"
          />
        </div>
        <div className="w-full  flex flex-col justify-evenly items-center  ">
          <h3 className="text-gray-300 text-lg   font-semibold">soy</h3>
          <h1 className="text-sky-700 text-3xl font-bold">Leandro Mortarini</h1>
          <h2 className="text-sky-500 text-lg  font-semibold">
            Desarrollador Frontend
          </h2>
          <h3 className="text-gray-300 md:text-xl lg:text-2xl  xl:text-3xl font-semibold">
            leandromortarini2@gmail.com
          </h3>
        </div>
        <div className=" w-full h-250px flex justify-center items-center overflow-hidden">
          <div className=" w-3/4 h-250px flex items-center overflow-hidden">
            <div className="slideTrack">
              {arrayTech.map((tec, index) => (
                <div key={index} className="slide">
                  <img src={tec} alt={`Tecnología ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
