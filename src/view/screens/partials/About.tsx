import Card from "../../../components/Card";
import AboutImg from "../../assets/aboutimg.webp";

const About = () => {
  return (
    <section
      className="w-full flex flex-col items-center justify-center pb-36"
      id="about"
    >
      <div className="px-8 flex flex-col items-center justify-center">
        <span className="text-2xl text-indigo-500 font-bold">
          Soluções digitais sob medida
        </span>
        <h2 className="text-4xl mb-6 text-center">
          Defina sua presença digital conosco
        </h2>
      </div>
      <div className="w-full flex flex-wrap justify-center">
        <Card
          quantity="6"
          title="Sites criados do ZERO"
          description="Soluções web feitas sob medida, cada uma delas uma vitrine digital do seu negócio."
        />
        <Card
          quantity="6"
          title="Projetos Concluídos"
          description="Executados com maestria em diversas tecnologias e plataformas."
        />
        <Card
          quantity="4"
          title="Clientes Satisfeitos"
          description="Pelo mundo com suas expectativas superadas e suas marcasFortalecidas."
        />
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between px-8">
        <div className="max-w-xl lg:w-full lg:mr-16 mb-8 lg:mb-0">
          <h2 className="text-3xl font-bold mb-4">
            Personalizando o amanhã digital
          </h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            Em 2023, a JeffLds DEV surgiu com uma missão singular: impulsionar
            empresas em todo o Brasil para o cenário digital, oferecendo não
            apenas sites, mas plataformas que se destacam e geram resultados
            tangíveis. Especializados em desenvolvimento de websites
            corporativos e landing pages, nós da JeffLds DEV nos destacamos não
            apenas por atrair visitantes, mas por converter leads em clientes
            fiéis. Somos a força motriz por trás de soluções web que capturam a
            essência e as aspirações individuais de cada marca, empresa ou
            profissional. Aqui, cada projeto transcende a mera entrega; é a
            concretização da visão digital de nossos clientes, moldada com
            habilidade técnica e uma abordagem estética inovadora.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4">
            Vamos Criar o Seu?
          </button>
        </div>
        <div className="max-w-xl lg:w-1/3">
          <img src={AboutImg} alt="Imagem" className="w-full h-auto" />
        </div>
      </div>
    </section>
  );
};

export default About;
