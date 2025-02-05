import { useTranslation } from "react-i18next";
import { TbWorldCode } from "react-icons/tb";
import { IoRocket } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";
import { MdSupportAgent } from "react-icons/md";
import {
  FaSearch,
  FaCog,
  FaCode,
  FaDesktop,
  FaMobileAlt,
  FaTools,
} from "react-icons/fa";
import Card from "../../../components/Card";

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
          icon={<FaCode />}
          title={t("services.cards.6.title")}
          description={t("services.cards.6.description")}
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

      <div className="mb-6 pb-4 shadow-bottom">
        <h1 className="font-bold text-4xl text-left">
          DESENVOLVIMENTO DE SITE E APLICATIVOS
        </h1>
        <h4 className="text-left text-sm">
          Criamos sites e aplicativos do zero. Implementação, ajustes e
          manutenções.
        </h4>
        <p className="text-left">Leia mais (seta diagonal)</p>
      </div>

      <div className="mb-6 pb-4 shadow-bottom">
        <h1 className="font-bold text-4xl text-left">
          DESENVOLVIMENTO PERSONALIZADO
        </h1>
        <h4 className="text-left text-sm">
          Somos especialistas em desenvolvimento personalizado para startups.
        </h4>
        <p className="text-left">Leia mais (seta diagonal)</p>
      </div>

      <div className="mb-6 pb-4 shadow-bottom">
        <h1 className="font-bold text-4xl text-left">
          IDENTIDADE VISUAL COMPLETA
        </h1>
        <h4 className="text-left text-sm">
          Seja marcante memorável e cative a atenção do público.
        </h4>
        <p className="text-left">Leia mais (seta diagonal)</p>
      </div>

      <div className="mb-6 pb-4 shadow-bottom">
        <h1 className="font-bold text-4xl text-left">
          CRIAMOS PRODUTOS DIGITAIS E SUA ESTRATÉGIAS DE MARKETING
        </h1>
        <h4 className="text-left whitespace-pre-line text-sm">
          Com nosso processo de desenvolvimento ágil, criamos sites, landing
          pages, blogs, hotsites e portais gerenciáveis com tempo e custo
          reduzidos e que vão fazer suas estratégias de marketing decolar!
        </h4>
        <p className="text-left">Leia mais (seta diagonal)</p>
      </div>
    </section>
  );
};

export default Services;
