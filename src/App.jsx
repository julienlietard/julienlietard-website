import './index.css';
import Header from './components/header/Header';
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Skills from "./components/skills/Skills";
import Footer from "./components/footer/Footer";
import Experiences from "./components/experiences/Experiences";

const App = () => {
  return (
      <>
          <Header />
          <Nav />
          <About />
          <Experiences />
          <Skills />
          <Contact />
          <Footer />
      </>
  );
}

export default App;
