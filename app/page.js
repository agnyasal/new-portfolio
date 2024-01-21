import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import HeaderPorto from "./components/Header";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Used from "./components/Used";

export default function Home() {
  return (
    <section>
      <Navbar />
      <HeaderPorto />
      <Project />
      <Used />
      <AboutMe />
      <Contact />
      <Footer />
    </section>
  );
}
