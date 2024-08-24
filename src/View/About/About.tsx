import "react-vertical-timeline-component/style.min.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { FaCode } from "react-icons/fa";
import { IoPersonCircle } from "react-icons/io5";

import { VscDebugBreakpointLogUnverified } from "react-icons/vsc";

export const About = () => {
  return (
    <div
      id="about"
      className="w-full min-h-screen bg-white flex flex-col justify-center items-center"
    >
      <h1 className="text-azul text-3xl md:text-4xl lg:text-[40px] xl:text-[50px] font-bold mt-14 md:mt-5 lg:mb-5 xl:mb-5">
        Sobre Mí
      </h1>

      <VerticalTimeline lineColor="#0c94ca">
        <VerticalTimelineElement
          className="vertical-timeline-element--education text-azul font-bold"
          iconStyle={{ background: "#0ea5e9", color: "#fff" }}
          icon={<IoPersonCircle />}
        >
          <p className="text-gray-800 ">
            <span className="text-sky-600 ">Desarrollador Frontend</span>{" "}
            enfocado en la construcción de aplicaciones web dinámicas y
            visualmente atractivas. Me especializo en el uso de tecnologías
            clave como{" "}
            <span className="text-sky-600 ">
              JavaScript, TypeScript y React{" "}
            </span>
            , con experiencia en la implementación de{" "}
            <span className="text-sky-600 ">Redux </span>
            para una gestión de estado eficiente y escalable. Actualmente, estoy
            colaborando con la empresa Inflatrack en el desarrollo de un{" "}
            software de gestión de comercio Además, realizó desarrollos de
            aplicaciones web de manera freelance para clientes reales.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education text-azul font-bold "
          iconStyle={{ background: "#0ea5e9", color: "#fff" }}
          icon={<FaCode />}
        >
          <h3 className="text-sky-500 ">Lenguajes </h3>
          <span className="w-full text-azul flex  ">
            <VscDebugBreakpointLogUnverified className="mr-2 text-sky-500" />
            Javascript - Typescript
          </span>
          <h3 className="text-sky-500 ">Desarrollo Frontend </h3>
          <span className="w-1/2 text-azul flex ">
            <VscDebugBreakpointLogUnverified className=" mr-2 text-sky-500" />
            React - Redux
          </span>
          <h3 className="text-sky-500  ">Framework </h3>
          <span className="w-1/2 text-azul flex ">
            <VscDebugBreakpointLogUnverified className="mr-2 text-sky-500" />
            Next.js
          </span>
          <h3 className="text-sky-500 ">Estilos </h3>
          <span className="w-full text-azul flex">
            <VscDebugBreakpointLogUnverified className=" mr-2 text-sky-500" />
            TailwindCSS - Material UI
          </span>
          <h3 className="text-sky-500  ">Librerías </h3>
          <span className="w-1/2 text-azul flex   ">
            <VscDebugBreakpointLogUnverified className="mr-2 text-sky-500" />
            Axios - Formik
          </span>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};
