import { TbWorldCode } from "react-icons/tb";
import { IoRocket } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";
import { MdSupportAgent } from "react-icons/md";
import {
  FaSearch,
  FaCog,
  FaMobileAlt,
  FaTools,
  FaDesktop,
  FaArrowRight,
} from "react-icons/fa";
import Card from "../../../components/Card";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();

  return (
    <section
      className="w-full flex flex-col justify-end items-end px-4 lg:px-24"
      id="services"
    >
      <span className="text-xl text-indigo-500 font-bold">
        {t("services.subtitle")}
      </span>
      <h2 className="text-3xl mb-6 font-bold">{t("services.title")}</h2>
      <div className="w-full flex flex-wrap justify-center">
        <Card
          icon={<TbWorldCode />}
          title={t("services.cards.0.title")}
          description={t("services.cards.0.description")}
        />
        <Card
          icon={<IoRocket />}
          title={t("services.cards.1.title")}
          description={t("services.cards.1.description")}
        />
        <Card
          icon={<CiSettings />}
          title={t("services.cards.2.title")}
          description={t("services.cards.2.description")}
        />
        <Card
          icon={<MdSupportAgent />}
          title={t("services.cards.3.title")}
          description={t("services.cards.3.description")}
        />
        <Card
          icon={<FaSearch />}
          title={t("services.cards.4.title")}
          description={t("services.cards.4.description")}
        />
        <Card
          icon={<FaCog />}
          title={t("services.cards.5.title")}
          description={t("services.cards.5.description")}
        />
        <Card
          icon={<FaDesktop />}
          title={t("services.cards.7.title")}
          description={t("services.cards.7.description")}
        />
        <Card
          icon={<FaMobileAlt />}
          title={t("services.cards.8.title")}
          description={t("services.cards.8.description")}
        />
        <Card
          icon={<FaTools />}
          title={t("services.cards.9.title")}
          description={t("services.cards.9.description")}
        />
      </div>

      <section className="relative flex flex-col justify-start items-start text-left px-4 lg:px-24">
        <div className="mb-6 shadow-lg p-14 max-w-xl">
          <h1 className="font-bold text-4xl text-left pb-8">
            DESENVOLVIMENTO DE SITE E APLICATIVOS
          </h1>
          <h4 className="text-left text-md">
            Criamos sites e aplicativos do zero. Implementação, ajustes e
            manutenções.
          </h4>
          <p className="text-sm flex justify-end items-center mt-8 cursor-pointer">
            Leia mais <FaArrowRight className="ml-2" />
          </p>
        </div>

        <div className="mb-6 shadow-lg p-14 max-w-xl">
          <h1 className="font-bold text-4xl text-left pb-8">
            DESENVOLVIMENTO PERSONALIZADO
          </h1>
          <h4 className="text-left text-md">
            Somos especialistas em desenvolvimento personalizado para startups.
          </h4>
          <p className="text-sm flex justify-end items-center mt-8 cursor-pointer">
            Leia mais <FaArrowRight className="ml-2" />
          </p>
        </div>

        <div className="mb-6 shadow-lg p-14 max-w-xl">
          <h1 className="font-bold text-4xl text-left pb-8">
            IDENTIDADE VISUAL COMPLETA
          </h1>
          <h4 className="text-left text-md">
            Seja marcante memorável e cative a atenção do público.
          </h4>
          <p className="text-sm flex justify-end items-center mt-8 cursor-pointer">
            Leia mais <FaArrowRight className="ml-2" />
          </p>
        </div>

        <div className="mb-6 shadow-lg p-14 max-w-xl">
          <h1 className="font-bold text-4xl text-left pb-8">
            CRIAMOS PRODUTOS DIGITAIS E SUA ESTRATÉGIAS DE MARKETING
          </h1>
          <h4 className="text-left text-md">
            Com nosso processo de desenvolvimento ágil, criamos sites, landing
            pages, blogs, hotsites e portais gerenciáveis com tempo e custo
            reduzidos e que vão fazer suas estratégias de marketing decolar!
          </h4>
          <p className="text-sm flex justify-end items-center mt-8 cursor-pointer">
            Leia mais <FaArrowRight className="ml-2" />
          </p>
        </div>
      </section>
    </section>
  );
};

export default Services;
