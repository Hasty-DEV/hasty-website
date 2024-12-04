const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow  m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
              JeffLds DEV
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0">
            <li>
              <a href="#hero" className="hover:underline me-4 md:me-6">
                Inicio
              </a>
            </li>
            <li>
              <a href="#about" className="hover:underline me-4 md:me-6">
                Sobre Nós
              </a>
            </li>
            <li>
              <a href="#services" className="hover:underline me-4 md:me-6">
                Serviços
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:underline">
                Projetos
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 sm:mx-auto border-gray-700 lg:my-8" />
        <span className="block text-sm sm:text-center">
          © 2024
          <a href="https://github.com/Jefflds" className="hover:underline">
            {" "}
            JeffLds™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
