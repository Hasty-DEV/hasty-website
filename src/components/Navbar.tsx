import { useState } from "react";
import ListItem from "./ListItem";
import { LanguageSwitcher } from "./LanguageSwitcher/LanguageSwitcher";
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation(); // Hook para tradução

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
        className={`${
          open && "navbarTogglerActive"
        } absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden`}
      >
        <span className="relative my-[6px] block h-[2px] w-[30px] bg-slate-700"></span>
        <span className="relative my-[6px] block h-[2px] w-[30px] bg-slate-700"></span>
        <span className="relative my-[6px] block h-[2px] w-[30px] bg-slate-700"></span>
      </button>
      <nav
        id="navbarCollapse"
        className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white px-6 py-5 lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:shadow-none shadow-lg ${
          !open && "hidden"
        }`}
      >
        <div className="block lg:flex w-full">
          <ListItem NavLink="#hero" onClick={() => handleNavLinkClick()}>
            {t('navbar.home')}
          </ListItem>
          <ListItem NavLink="#about" onClick={() => handleNavLinkClick()}>
            {t('navbar.about')}
          </ListItem>
          <ListItem NavLink="#services" onClick={() => handleNavLinkClick()}>
            {t('navbar.services')}
          </ListItem>
          <ListItem NavLink="#projects" onClick={() => handleNavLinkClick()}>
            {t('navbar.projects')}
          </ListItem>
          <ListItem>
            <LanguageSwitcher className="hidden lg:block text-gray-900 dark:text-white" />
          </ListItem>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
