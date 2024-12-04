import { useState } from "react";
import ListItem from "./ListItem";
// import Button from "../Button";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleNavLinkClick = () => {
    setOpen(false);
  };

  return (
    <div>
      <button
        type="button"
        title="toggle menu"
        onClick={() => setOpen(!open)}
        id="navbarToggler"
        className={` ${
          open && "navbarTogglerActive"
        } absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden`}
      >
        <span className="relative my-[6px] block h-[2px] w-[30px] bg-slate-700"></span>
        <span className="relative my-[6px] block h-[2px] w-[30px] bg-slate-700"></span>
        <span className="relative my-[6px] block h-[2px] w-[30px] bg-slate-700"></span>
      </button>
      <nav
        id="navbarCollapse"
        className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white px-6 py-5  lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:shadow-none shadow-lg ${
          !open && "hidden"
        } `}
      >
        <div className="block lg:flex w-full">
          <ListItem NavLink="#hero" onClick={() => handleNavLinkClick()}>
            Início
          </ListItem>
          <ListItem NavLink="#about" onClick={() => handleNavLinkClick()}>
            Sobre
          </ListItem>
          <ListItem NavLink="#services" onClick={() => handleNavLinkClick()}>
            Serviços
          </ListItem>
          <ListItem NavLink="#projects" onClick={() => handleNavLinkClick()}>
            Projetos
          </ListItem>
          {/* <ListItem NavLink="/#">Profissional</ListItem>
          <ListItem NavLink="/#">Depoimentos</ListItem>
          <ListItem NavLink="/#">Blog</ListItem> */}
          {/* <div className="block lg:hidden w-full">
            <Button ButtonText="Contate-nos" />
          </div> */}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
