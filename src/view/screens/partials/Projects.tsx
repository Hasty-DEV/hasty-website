import { useTranslation } from 'react-i18next';
import ProjectCard from "../../../components/ProjectCard";

export function Projects() {
  const { t } = useTranslation();

  return (
    <section
      className="w-full flex flex-col items-center justify-center pb-12 pt-12 lg:pb-24 lg:pt-24"
      id="projects"
    >
      <div className="px-4 sm:px-8 lg:px-16 xl:px-20 mb-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl text-center text-indigo-500 font-bold mb-4">
          {t('projects.title')}
        </h2>
        <p className="text-lg text-gray-700 text-center mb-8">
          {t('projects.subtitle')}
        </p>
      </div>
      <div className="grid gap-6 lg:grid-cols-2 px-4 sm:px-8 lg:px-16 xl:px-20 w-full">
        <ProjectCard
          type={t('projects.card1.type')}
          title={t('projects.card1.title')}
          stacks={t('projects.card1.stacks', { returnObjects: true }) as string[]}
          description={t('projects.card1.description')}
          link="https://www.loucuraamor.com.br/"
        />
        <ProjectCard
          type={t('projects.card2.type')}
          title={t('projects.card2.title')}
          stacks={t('projects.card2.stacks', { returnObjects: true }) as string[]}
          description={t('projects.card2.description')}
          link="https://diy-crypto.vercel.app/"
        />
        <ProjectCard
          type={t('projects.card3.type')}
          title={t('projects.card3.title')}
          stacks={t('projects.card3.stacks', { returnObjects: true }) as string[]}
          description={t('projects.card3.description')}
          link="https://hasty-dev.vercel.app/"
        />
        <ProjectCard
          type={t('projects.card4.type')}
          title={t('projects.card4.title')}
          stacks={t('projects.card4.stacks', { returnObjects: true }) as string[]}
          description={t('projects.card4.description')}
          link="https://www.ongsuperar.org.br/"
        />
      </div>
    </section>
  );
}

export default Projects;
