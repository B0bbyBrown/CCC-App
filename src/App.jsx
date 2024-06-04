import "/src/App.css";

import {
  Header,
  Hero,
  About,
  Services,
  CaseStudies,
  Contact,
  Footer,
} from "/src/components/MainExport";

function App() {
  return (
    <section className="app">
      <Header />
      <Hero />
      <About />
      <Services />
      <CaseStudies />
      <Contact />
      <Footer />
    </section>
  );
}

export { App };
