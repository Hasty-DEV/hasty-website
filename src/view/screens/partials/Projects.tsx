import ProjectCard from "../../../components/ProjectCard";

export function Projects() {
  return (
    <section
      className="w-full flex flex-col items-center justify-center pb-12 pt-12 lg:pb-24 lg:pt-24"
      id="projects"
    >
      <div className="px-4 sm:px-8 lg:px-16 xl:px-20 mb-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl text-center text-indigo-500 font-bold mb-4">
          Projetos Reais
        </h2>
        <p className="text-lg text-gray-700 text-center mb-8">
          Descubra a inovação autêntica em soluções de problemas
        </p>
      </div>
      <div className="grid gap-6 lg:grid-cols-2 px-4 sm:px-8 lg:px-16 xl:px-20 w-full">
        <ProjectCard
          type="Feito do Zero"
          title="Loucura Amor - O Seu Site de Telemensagens"
          stacks={["ReactJS", "Typescript", "Bootstrap", "Styled Components"]}
          description="Demonstre todo seu amor através de palavras que tocam o coração, dedicamos-nos a expressar sentimentos profundos. Nossas mensagens capturam a essência do amor. Surpreenda e encante aqueles que você ama, trazendo o amor das palavras à vida. O site do Loucura Amor foi desenvolvido como forma de divulgação dos milhares de áudios."
          link="https://www.loucuraamor.com.br/"
        />
        <ProjectCard
          type="Feito do Zero"
          title="DIY Crypto - Proteção de Bitcoin Offline com Segurança Web3"
          stacks={[
            "ReactJS",
            "Typescript",
            "Tailwindcss",
            "Nodejs",
            "Clean Arch",
            "Clean Code",
          ]}
          description="O DIY Crypto é uma plataforma inovadora que oferece uma abordagem prática para proteger seus bitcoins offline, utilizando conceitos avançados de segurança em Web3. Este projeto combina a simplicidade do ReactJS e a robustez do Node.js para criar uma experiência de usuário fluida e segura. Utilizando TypeScript e Tailwind CSS, o aplicativo não apenas garante uma interface visual atraente, mas também uma arquitetura limpa e código bem estruturado, promovendo a manutenibilidade e a escalabilidade. Descubra como manter seus ativos digitais seguros e explore as melhores práticas de autocustódia neste ambiente de aprendizado dinâmico."
          link="https://diy-crypto.vercel.app/"
        />
        <ProjectCard
          type="Feito do Zero"
          title="HastyDEV - Uma plataforma de Desenvolvedores para Desenvolvedores"
          stacks={[
            "ReactJS",
            "Typescript",
            "Bootstrap",
            "Styled Components",
            "NodeJS",
            "Express",
            "MySQL",
            "MongoDB",
          ]}
          description="A HastyDEV é uma plataforma projetada com o propósito de simplificar e facilitar a colaboração entre desenvolvedores, Microempreendedores Individuais (MEIs) e Organizações Não Governamentais (ONGs) no mercado de desenvolvimento de software. Esta plataforma oferece oportunidades únicas para todos os envolvidos, tornando-se um centro de convergência para criar soluções tecnológicas, promover o crescimento de portfólios e incentivar a participação através de um sistema gamificado."
          link="https://hasty-dev.vercel.app/"
        />

        <ProjectCard
          type="Edição no Layout"
          title="Ong Superar - O Seu Site de Telemensagens"
          stacks={["WIX"]}
          description="Projeto Voluntário, na qual foi feito a edição e o redesenho do layout da página de maneira voluntária."
          link="https://www.ongsuperar.org.br/"
        />
      </div>
    </section>
  );
}

export default Projects;
