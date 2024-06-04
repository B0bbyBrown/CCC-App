import { Header } from "../components/Header/Header";
import { Hero } from "/src/components/Hero/Hero";
import { About } from "/src/components/About/About";
import { CaseStudies } from "./Case-Studies/Case-Studies";
import { Services } from "/src/components/Our-Services/Services";
import { Contact } from "./Contact/Contact";
import { Footer } from "/src/components/Footer/Footer";

function MainExport() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <CaseStudies />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}

export {
  MainExport,
  Header,
  Hero,
  About,
  CaseStudies,
  Services,
  Contact,
  Footer,
};
