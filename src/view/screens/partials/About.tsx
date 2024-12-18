import { useTranslation } from 'react-i18next';
import Card from "../../../components/Card";
import AboutImg from "../../assets/aboutimg.webp";

const About = () => {
  const { t } = useTranslation();

  return (
    <section
      className="w-full flex flex-col items-center justify-center pb-36"
      id="about"
    >
      <div className="px-8 flex flex-col items-center justify-center">
        <span className="text-2xl text-indigo-500 font-bold">
          {t('about.solutionsTitle')}
        </span>
        <h2 className="text-4xl mb-6 text-center">
          {t('about.digitalPresence')}
        </h2>
      </div>
      <div className="w-full flex flex-wrap justify-center">
        <Card
          quantity="6"
          title={t('about.card1.title')}
          description={t('about.card1.description')}
        />
        <Card
          quantity="6"
          title={t('about.card2.title')}
          description={t('about.card2.description')}
        />
        <Card
          quantity="4"
          title={t('about.card3.title')}
          description={t('about.card3.description')}
        />
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between px-8">
        <div className="max-w-xl lg:w-full lg:mr-16 mb-8 lg:mb-0">
          <h2 className="text-3xl font-bold mb-4">
            {t('about.customizingTomorrow')}
          </h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            {t('about.description')}
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4">
            {t('about.ctaButton')}
          </button>
        </div>
        <div className="max-w-xl lg:w-1/3">
          <img src={AboutImg} alt={t('about.imageAlt')} className="w-full h-auto" />
        </div>
      </div>
    </section>
  );
};

export default About;