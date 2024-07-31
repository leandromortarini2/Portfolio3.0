import { proyectos } from "../../Helpers/proyectos";

export const Project = () => {
  return (
    <>
      <div
        id="project"
        className="hidden w-full min-h-screen  bg-gray-900 md:flex flex-col  flex-wrap justify-evenly items-center"
      >
        {proyectos.length > 0 &&
          proyectos.map((e, i) => {
            return (
              <div
                key={i}
                className="w-full h-[320px] flex justify-center items-center  bg-slate-400    overflow-hidden"
              >
                <div className="w-1/3   h-[300px] ">
                  <img
                    className="w-full h-full imgEffectRigth"
                    src={e.img}
                    alt=""
                  />
                </div>
                <div className="w-3/4   h-[300px] bg-gray-800 ">
                  <h2 className="text-white text-3xl p-2">{e.title}</h2>
                  <p className="text-white text-xl p-2">{e.tec}</p>
                  <p className="text-white text-lg p-2">{e.description}</p>
                  <p className="text-white text-lg p-2">{e.github}</p>
                  <p className="text-white text-lg p-2">{e.vercel}</p>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};
