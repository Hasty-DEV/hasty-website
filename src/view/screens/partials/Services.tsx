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
  return (
    <section
      className="w-full flex flex-col justify-end items-end px-4 lg:px-24"
      id="services"
    >
      <span className="text-xl text-indigo-500 font-bold">
        Soluções Abrangentes Para Fortalecer Seu Negócio
      </span>
      <h2 className="text-3xl mb-6 font-bold">
        Oferecemos soluções completas para seu negócio
      </h2>
      <div className="w-full flex flex-wrap justify-center">
        <Card
          icon={<TbWorldCode />}
          title="Desenvolvimento de Websites Personalizados"
          description="Criação de websites personalizados para atender às suas necessidades únicas."
        />
        <Card
          icon={<IoRocket />}
          title="Otimização de Performance de Websites"
          description="Aprimoramento do desempenho e velocidade do seu site para uma experiência aprimorada do usuário."
        />
        <Card
          icon={<CiSettings />}
          title="Personalizações Avançadas"
          description="Personalizações avançadas para atender às suas necessidades específicas."
        />
        <Card
          icon={<MdSupportAgent />}
          title="Suporte Técnico Especializado"
          description="Suporte técnico especializado para manter seu site funcionando perfeitamente."
        />
        <Card
          icon={<FaSearch />}
          title="Estratégias de SEO Personalizadas"
          description="Estratégias de SEO adaptadas para melhorar a visibilidade e classificação do seu site."
        />
        <Card
          icon={<FaCog />}
          title="Criação de Sistemas Empresariais"
          description="Criação de um sistema com gerenciamento, autenticação e tudo o que seu negócio precisa."
        />
        <Card
          icon={<FaCode />}
          title="Criação de APIs"
          description="Desenvolvimento e implementação de APIs personalizadas para integração de sistemas e serviços."
        />
        <Card
          icon={<FaDesktop />}
          title="Criação de Softwares"
          description="Desenvolvimento de softwares personalizados para atender às necessidades específicas do seu negócio."
        />
        <Card
          icon={<FaMobileAlt />}
          title="Criação de Aplicativos"
          description="Desenvolvimento de aplicativos móveis para iOS e Android, desde ideias simples até projetos complexos."
        />
        <Card
          icon={<FaTools />}
          title="Manutenção de Sites Existentes"
          description="Atualização, correção de bugs e melhorias contínuas para manter seu site funcionando de forma eficiente e segura."
        />
      </div>
    </section>
  );
};

export default Services;
