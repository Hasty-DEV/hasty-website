import Button from "../../components/Button";
import Logo from "../../components/Logo";
import Navbar from "../../components/Navbar";
import { useHeader } from "./useHeader";

const Header = () => {
  const { scrolling } = useHeader();

  return (
    <header
      className={`fixed left-0 top-0 z-20 flex w-full transition-all ease ${
        scrolling ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="relative -mx-4 flex items-center justify-between">
          <Logo />
          <div className="flex w-full items-center justify-between px-4">
            <Navbar />
            <div className="hidden lg:block">
              <Button
                ButtonLink="https://api.whatsapp.com/send?phone=5511981817497"
                ButtonText="Contate-nos"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
