import Button from "../../../components/Button";
import { Circles } from "../../../components/Circles";
import SingleImage from "../../../components/SingleImage";

export function Hero() {
  return (
    <section className="relative pb-28 pt-32 lg:pt-40" id="hero">
      <div className="container mx-auto px-4 flex flex-wrap">
        <div className="w-full px-4 lg:w-5/12">
          <div className="hero-content">
            <h1 className="mb-5 text-4xl font-bold !leading-[1.208] text-dark sm:text-[42px] lg:text-[40px] xl:text-5xl">
              Transforme suas Ideias.
            </h1>
            <p className="mb-8 max-w-[480px] text-base text-body-color dark:text-dark-6">
              Starte seu sucesso digital com a JeffLds Company. Aqui, seu site
              ou sistema ganha vida, destacando melhor e sanando a necessidade
              de seu negócio, ajudando a crescer como empresa e na internet.
            </p>
            <div className="flex flex-wrap items-center">
              <Button
                ButtonText="Venha Transformar Seu Negocio"
                ButtonLink="https://api.whatsapp.com/send?phone=5511981817497"
              />
            </div>
            <div className="clients pt-16">
              <h6 className="mb-6 flex items-center text-xs font-normal text-body-color dark:text-dark-6">
                Alguns de Nossos Clientes
                <span className="ml-3 inline-block h-px w-8 bg-body-color"></span>
              </h6>

              <div className="flex items-center space-x-4">
                <SingleImage
                  href="https://hasty-dev.vercel.app/"
                  imgSrc="https://hasty-dev.vercel.app/assets/LogoLight-b61ed2ee.svg"
                />
                <SingleImage
                  href="https://www.loucuraamor.com.br/"
                  imgSrc="https://www.loucuraamor.com.br/assets/Loucura%20de%20amor-Rt8ii_0U.png"
                />
                <SingleImage
                  href="https://diy-crypto.vercel.app/"
                  imgSrc="https://diy-crypto.vercel.app/assets/logo-C3AqhoME.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="hidden px-4 lg:block lg:w-1/12"></div>
        <div className="w-full px-4 lg:w-6/12">
          <div className="lg:ml-auto lg:text-right">
            <div className="relative z-10 inline-block pt-11 lg:pt-0">
              <img
                src="https://img.freepik.com/vetores-gratis/ilustracao-do-conceito-de-digitacao-de-codigo_114360-3581.jpg?t=st=1708901868~exp=1708905468~hmac=fa9a45bb2a2e8851e1edd57c8c768838c8abe3a2060d42f87452bb51e3218b8a&w=826"
                alt="hero"
                className="max-w-full lg:ml-auto"
              />
              <span className="absolute -bottom-8 -left-8 z-[-1]">
                <Circles />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
