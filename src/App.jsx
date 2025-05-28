import './index.css';
import Header from './components/header/Header';
import Nav from "./components/dock/Nav";
import About from "./components/about-me/About";
import Footer from "./components/footer/Footer";
import Projects from "./components/my-projects/Projects";
import PresentationSection from './components/presentation/PresentationSection';
import ExperienceSection from './components/experience/ExperienceSection';
import Skills from './components/my-skills/Skills';

const App = () => {
    return (
      <>
          <Nav />
          <Header />
          <section className="dashed-wrapper">
            <div className="dashed-content">
              <About />
              <PresentationSection />
            </div>
          </section>


              <Skills />
              

              <section className="dashed-wrapper">
            <div className="dashed-content">
              <ExperienceSection />
            </div>
          </section>
          <Projects />
          {/* <section className="dashed-wrapper">
            <div className="dashed-content">
              <Contact />
            </div>
          </section> */}
          <Footer />
      </>
  );
}

export default App;
