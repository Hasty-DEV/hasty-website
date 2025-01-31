import { useTranslation } from "react-i18next";
import Card from "../../../components/Card";
import AboutImg from "../../assets/aboutimg.webp";

const About = () => {
  const { t } = useTranslation();

  return (
    <section
      className="w-full flex flex-col items-center justify-center pb-36 gap-y-4"
      id="about"
    >
      <article className="px-8 flex flex-col items-center justify-center">
        <span className="text-2xl text-indigo-500 font-bold">
          {t("about.solutionsTitle")}
        </span>
        <h2 className="text-4xl mb-6 text-center">
          {t("about.digitalPresence")}
        </h2>
      </article>
      <article className="w-full flex flex-wrap justify-center">
        <Card
          quantity="6"
          title={t("about.card1.title")}
          description={t("about.card1.description")}
        />
        <Card
          quantity="6"
          title={t("about.card2.title")}
          description={t("about.card2.description")}
        />
        <Card
          quantity="4"
          title={t("about.card3.title")}
          description={t("about.card3.description")}
        />
      </article>
      <article className="flex flex-col lg:flex-row items-center justify-center px-4 lg:px-64">
        <div className="flex flex-col gap-y-2 lg:w-1/2">
          <h2 className="font-bold text-2xl">HastyDev - Software House</h2>
          <ul>
            <li>→ Soluções de T.I</li>
            <li>→ Criação de Websites</li>
            <li>→ Soluções de API’s</li>
            <li>→ Sistemas e Integrações</li>
            <li>→ Softwares Personalizados</li>
          </ul>
          <h3 className="font-semibold text-xl">Quem Somos?</h3>
          <p className="text-sm text-justify">
            Surgida de dentro do curso de Análise e Desenvolvimento de Sistemas,
            em um grupo de amigo que se uniram para fazer o TCC em 2023/24, ao
            qual se sagrou o melhor projeto daquela avaliação. Dessa Junção
            iniciou-se a HastyDEV, em que em pouco tempo de vida, já construiu
            páginas web, e-commerces, integrações com pagamentos completas,
            soluções personalizadas para o mercado de trabalho.
          </p>
          <h3 className="font-semibold text-xl">Missão:</h3>
          <p className="text-sm text-justify">
            Nossa Missão é democratizar o acesso à tecnologias as empresas,
            trazendo qualidade, custo-benefício e soluções completas a todos
            nossos clientes.
          </p>
          <h3 className="font-semibold text-xl">Visão:</h3>
          <p className="text-sm text-justify">
            Acreditamos que, por meio da tecnologia, da comunicação e de um
            relacionamento próximo com nossos clientes, é possível construir um
            futuro onde as empresas possam focar inteiramente no campo
            estratégico, deixando os desafios operacionais para soluções
            tecnológicas.
          </p>
          <h3 className="font-semibold text-xl">Valores:</h3>
          <ul className="list-disc pl-4">
            <li>Compromisso com a qualidade</li>
            <li>Inovação constante</li>
            <li>Foco no cliente</li>
            <li>Ética e transparência</li>
          </ul>
        </div>
        <img src={AboutImg} className="w-full h-auto lg:w-1/2 mt-4 lg:mt-0 min-w-[200px] max-w-[500px]" alt="About" />
      </article>
    </section>
  );
};

export default About;
