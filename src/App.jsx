import './index.css';
import Header from './components/header/Header';
import Nav from "./components/dock/Nav";
import About from "./components/about-me/About";
import Contact from "./components/contact-card/Contact";
import Skills from "./components/my-skills/Skills";
import Footer from "./components/footer/Footer";

const App = () => {
    return (
      <>
          <Header />
          <Nav />
          <About />
          <Skills />
          <Contact />
          <Footer />
      </>
  );
}

export default App;
