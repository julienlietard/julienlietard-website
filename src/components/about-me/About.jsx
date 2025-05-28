import './about.css';
import ME from "../../assets/meabout.png";
import {MdSmartToy} from "react-icons/md";
import {RiRocket2Fill} from "react-icons/ri";
import {FaUserAstronaut} from "react-icons/fa";
import {GiMaterialsScience} from "react-icons/gi";
import Cta from '../header/CTA';
import {TiArrowRightThick} from "react-icons/ti";

const About = () => {
        return (
            <section id="about">
                <h5>En savoir plus</h5>
                <h2>À propos de moi</h2>

                <div className="container about__container">
                    <div className="about__me">
                        <div className="about__me-image">
                            <img src={ME} alt="me" className="meirl"/>
                        </div>
                    </div>
                    <div className="about__content">
                        <div className="about__cards">
                            <article className="about__card">
                                <p>Hello ! Julien, 24 ans, je suis diplômé d'un Master MIAGE et je suis actuellement Ingénieur d'études et développement chez Sopra Steria. Je suis passionné par les nouvelles technologies, ainsi que l'aérospatial, l'astronomie et l'astrophysique.</p>
                            </article>
                        </div>
                            <div className="passions">
                                <div className="passion" id="technologies"><MdSmartToy className="passion_icon"/>Technologies</div>
                                <div className="passion" id="aerospace"><RiRocket2Fill className="passion_icon"/>Aérospatial</div>
                                <div className="passion" id="astronomie"><FaUserAstronaut className="passion_icon"/>Astronomie</div>
                                <div className="passion" id="recherche"><GiMaterialsScience className="passion_icon"/>Recherche</div>
                            </div>
                    </div>
                </div>
                <Cta />
            </section>
        );
}

export default About;