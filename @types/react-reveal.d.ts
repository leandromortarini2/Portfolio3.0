/* eslint-disable @typescript-eslint/no-explicit-any */
declare module "react-reveal" {
  import { ReactNode } from "react";

  export const Slide: React.FC<{ children?: ReactNode; [key: string]: any }>;
  export const Flip: React.FC<{ children?: ReactNode; [key: string]: any }>;
  export const Bounce: React.FC<{ children?: ReactNode; [key: string]: any }>;
  // Agrega otros componentes de react-reveal aquí, si los necesitas
}
