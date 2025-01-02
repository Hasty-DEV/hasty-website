import Button from "../../components/Button";
import Logo from "../../components/Logo";
import Navbar from "../../components/Navbar";
import { useHeader } from "./useHeader";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();
  const { scrolling } = useHeader();

  return (
    <header
      className={`fixed left-0 top-0 z-20 flex w-full transition-all ease ${
        scrolling ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="w-screen px-4 py-2">
        <div className="flex items-center justify-between">
          <Logo />
          <div className="flex w-full items-center justify-end px-4">
            <Navbar />
            <div className="hidden lg:flex items-center gap-4">
              <Button
                ButtonLink="https://api.whatsapp.com/send?phone=5511977328121"
                ButtonText={t("hero.ctaButton")}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
