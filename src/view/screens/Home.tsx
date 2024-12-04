import About from "./partials/About";
import Hero from "./partials/Hero";
import Projects from "./partials/Projects";
import Services from "./partials/Services";

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Projects />
    </main>
  );
};

export default Home;
