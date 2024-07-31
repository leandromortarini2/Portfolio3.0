import { proyectos } from "../../Helpers/proyectos";
import "./Project.css";

export const Project = () => {
  return (
    <>
      <div
        id="project"
        className="hidden w-full min-h-screen bg-gray-900 md:flex  flex-wrap justify-evenly items-center"
      >
        {proyectos.length > 0 &&
          proyectos.map((e, i) => {
            return (
              <div className="card">
                <div className="card-inner">
                  <div className="card-front">
                    <img src={e.img} alt="" />
                  </div>
                  <div className="card-back">
                    <h2>{e.title}</h2>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};
