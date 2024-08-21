import React from "react";
import "react-vertical-timeline-component/style.min.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdComputer } from "react-icons/md";
import { GiPoliceBadge } from "react-icons/gi";

const Experience: React.FC = () => {
  return (
    <div
      id="experience"
      className="w-full min-h-screen bg-gray-900 flex flex-col justify-center items-center"
    >
      <h1 className="text-gray-50 text-3xl md:text-4xl lg:text-[40px] xl:text-[60px] font-bold mt-14 md:mt-0  lg:mb-5 xl:mb-10">
        Experiencia Laboral
      </h1>
      <VerticalTimeline lineColor="#0c94ca">
        <VerticalTimelineElement
          className="vertical-timeline-element--education text-white"
          iconStyle={{ background: "#0ea5e9", color: "#fff" }}
          icon={<MdComputer />}
          date="Julio 2024 - Actualidad"
        >
          <h3 className="text-black">Desarrollador Front-End en Inflatrack</h3>
          <p className="text-black">
            En Inflatrack, formó parte del equipo encargado de crear y mantener
            interfaces de usuario modernas y eficientes para nuestras soluciones
            Avanzadas de gestión. Mi trabajo se centra en: Diseño e
            implementación de interfaces, optimización de rendimiento,
            colaboración con equipos multidisciplinarios y atención al detalle.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education text-white"
          iconStyle={{ background: "#0ea5e9", color: "#fff" }}
          icon={<MdComputer />}
          date="Junio 2024 - Julio 2024"
        >
          <h3 className="text-black"> Freelance Front-End</h3>
          <p className="text-black">
            Desarrollo de Landing Page para empresas como SteticGlam y IceCream.
            Me enfoqué en el desarrollo de interfaces intuitivas y atractivas
            Que aseguran una experiencia de usuario fluida y agradable. Además,
            trabajé meticulosamente en el diseño de estilos visuales.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education text-white"
          iconStyle={{ background: "#0ea5e9", color: "#fff" }}
          icon={<GiPoliceBadge />}
          date="Diciembre 2016 - Diciembre 2023"
        >
          <h3 className="text-black">Oficial de Policia</h3>
          <p className="text-black">
            Desempeñé el rol de Jefe de Unidad en un grupo antitumulto y
            allanamientos. También realicé patrullaje urbano y resolución de
            Conflictos.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};
export default Experience;
