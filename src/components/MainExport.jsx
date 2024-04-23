import { Header } from "/src/components/Header/Header";
import { Hero } from "/src/components/Hero/Hero";
import { About } from "/src/components/About/About";
import { Projects } from "/src/components/Projects/Projects";
import { Services } from "/src/components/Our-Services/Services";
import { Contact } from "/src/components/Contact/Contact";
import { Footer } from "/src/components/Footer/Footer";

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
