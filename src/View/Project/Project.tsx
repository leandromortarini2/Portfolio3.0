import { proyectos } from "../../Helpers/proyectos";
import "./Project.css";
import gitHub from "../../assets/tecnologias/Github_dark.svg";
import vercel from "../../assets/tecnologias/Vercel_dark.svg";

export const Project = () => {
  return (
    <>
      <div
        id="project"
        className="w-full min-h-screen bg-gray-200 flex  flex-wrap justify-evenly items-center"
      >
        {proyectos.length > 0 &&
          proyectos.map((e, i) => {
            return (
              <div
                key={i}
                className="card w-full h-[250px] md:w-[310px] md:h-[250px] lg:w-[350px] lg:h-[290px] xl:w-[450px] xl:h-[300px]  mb-2 "
              >
                <div className="card-inner ">
                  <div className="card-front">
                    <img src={e.img} alt="" className="ShadowEffect" />
                  </div>
                  <div className="card-back border-sky-500 md:border-2 text-center">
                    <h2 className=" text-lg lg:text-xl">{e.title}</h2>
                    <p className="text-base lg:text-lg text-sky-500">{e.tec}</p>
                    <p className="text-sm lg:text-base p-2">{e.description}</p>
                    <div className="w-full  flex justify-evenly items-center mb-2">
                      <a href={e.github}>
                        <img
                          src={gitHub}
                          alt=""
                          className="w-7 md:w-8 hover:scale-125 duration-1000 "
                        />
                      </a>
                      <a href={e.vercel}>
                        <img
                          src={vercel}
                          alt=""
                          className="w-8 hover:scale-125 duration-1000"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};
