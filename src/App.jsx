import './index.css';
import Header from './components/header/Header';
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Skills from "./components/skills/Skills";
import Footer from "./components/footer/Footer";
import {useCookies} from "react-cookie";

const App = () => {
    const [, setCookie] = useCookies(['access_token', 'refresh_token'])
    setCookie("token","HQUJY0R41S")
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
