import { Header } from "/src/components/Header";
import { Hero } from "/src/components/Hero";
import { About } from "/src/components/About";
import { Projects } from "/src/components/Projects";
import { Services } from "/src/components/Services";
import { Contact } from "/src/components/Contact";
import { Footer } from "/src/components/Footer";

function MainExport() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}

export { MainExport, Header, Hero, About, Projects, Services, Contact, Footer };
