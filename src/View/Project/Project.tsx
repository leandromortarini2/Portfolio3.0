import { proyectos } from "../../Helpers/proyectos";
import "./Project.css";

import "react-vertical-timeline-component/style.min.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { BsRocketTakeoff } from "react-icons/bs";

export const Project = () => {
  return (
    <>
      <div
        id="project"
        className="w-full min-h-screen bg-white  to-sky-200 flex flex-col justify-center items-center"
      >
        <h1 className="text-azul text-3xl md:text-4xl lg:text-[40px] xl:text-[50px] font-bold mt-14 md:mt-10  lg:mb-5 xl:mb-10">
          Proyectos
        </h1>
        <div className="m-0 p-0">
          <VerticalTimeline lineColor="#0c94ca">
            {proyectos.map((e, i) => {
              return (
                <VerticalTimelineElement
                  key={i}
                  className="vertical-timeline-element--education text-azul font-bold"
                  iconStyle={{ background: "#0ea5e9", color: "#fff" }}
                  icon={<BsRocketTakeoff />}
                >
                  <h3 className="text-sky-700 uppercase">{e.title}</h3>
                  <p className="text-sky-500">{e.tec}</p>
                  <img src={e.img} alt="" className="rounded-2xl opacity-90" />

                  <p className="text-azul ">{e.description}</p>
                  <div className="w-full h-14 flex flex-col  items-start mt-2">
                    {" "}
                    {e.vercel === "" ? null : (
                      <a
                        href={e.vercel}
                        className="btn text-lg"
                        data-text="Awesome"
                      >
                        <span className="actual-text">&nbsp;web&nbsp;</span>
                        <span aria-hidden="true" className="hover-text">
                          &nbsp;web&nbsp;
                        </span>
                      </a>
                    )}
                    {e.github === "" ? null : (
                      <a
                        href={e.github}
                        className="btn text-lg mt-2"
                        data-text="Awesome"
                      >
                        <span className="actual-text">&nbsp;github&nbsp;</span>
                        <span aria-hidden="true" className="hover-text">
                          &nbsp;github&nbsp;
                        </span>
                      </a>
                    )}
                  </div>
                </VerticalTimelineElement>
              );
            })}
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};
