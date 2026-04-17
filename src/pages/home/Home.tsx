import Hero from "../../components/hero/Hero";
import Services from "../../components/page-sections/home/services/Services";
import Formacion from "../../components/page-sections/home/formacion/Formacion";
import FAQ from "../../components/page-sections/home/faq/FAQ";
import Testimonials from "../../components/page-sections/home/testimonials/Testimonials";
import Contact from "../../components/page-sections/home/contact/Contact";
import About from "../about/About";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Formacion />
      <FAQ />
      <Testimonials />
      <Contact />
    </>
  );
};

export default Home;
