import { proyectos } from "../../Helpers/proyectos";
import "./Project.css";
import { IoLogoVercel } from "react-icons/io5";
import { FaGithub } from "react-icons/fa6";

export const Project = () => {
  return (
    <>
      <div
        id="project"
        className="w-full min-h-screen bg-gray-900 flex  flex-wrap justify-evenly items-center"
      >
        <h1 className="text-gray-50 text-3xl md:text-4xl lg:text-[40px] xl:text-[60px] font-bold mt-24 md:m-10 ">
          Mis Proyectos
        </h1>
        <div className="w-full  flex  flex-wrap justify-evenly items-center">
          {proyectos.length > 0 &&
            proyectos.map((e, i) => {
              return (
                <div
                  key={i}
                  className="card w-full h-[250px] md:w-[310px] md:h-[250px] lg:w-[350px] lg:h-[270px] xl:w-[450px]   mb-2 mt-2 "
                >
                  <div className="card-inner ">
                    <div className="card-front">
                      <img src={e.img} alt="" className="ShadowEffect" />
                    </div>
                    <div className="card-back border-sky-500 md:border-2 text-center">
                      <h2 className=" text-lg lg:text-xl font-bold">
                        {e.title}
                      </h2>
                      <p className="text-base lg:text-lg text-sky-500 font-semibold">
                        {e.tec}
                      </p>
                      <p className="text-sm lg:text-base p-2">
                        {e.description}
                      </p>
                      <div className="w-full  flex justify-evenly items-center mb-2">
                        {e.github === "" ? null : (
                          <a href={e.github}>
                            <FaGithub className="hover:text-sky-500 hover:scale-125 duration-1000 text-3xl" />
                          </a>
                        )}

                        {e.vercel === "" ? null : (
                          <a href={e.vercel}>
                            <IoLogoVercel className="hover:text-sky-500 hover:scale-125 duration-1000 text-3xl" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};
