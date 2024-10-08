import rocket from "../../assets/rocket.svg";

export const Footer = () => {
  return (
    <footer className="bg-white  shadow dark:bg-gray-900 ">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="#"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img src={rocket} className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Desarrollador Frontend
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#about" className="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/leandro-mortarini/"
                className="hover:underline me-4 md:me-6"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/leandromortarini2"
                className="hover:underline me-4 md:me-6"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://docs.google.com/document/d/e/2PACX-1vSaMUsNK5DUQArFCfDuOtO-Ys_wuCUZafXnD-Q6goJMAI2jzVeCBXrek6MVa4Z2mL-3OSb5CgYE3UjI/pub"
                className="hover:underline"
              >
                CV
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-xl text-gray-500 sm:text-center dark:text-gray-400">
          <a
            href="mailto:leadromortarini2@gmail.com"
            className="hover:underline"
          >
            Leadromortarini2@gmail.com
          </a>
        </span>
      </div>
    </footer>
  );
};
