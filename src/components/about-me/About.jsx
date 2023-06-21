import React from 'react';
import './about.css';
import ME from "../../assets/meabout.png";
import {SlGraduation} from "react-icons/sl";
import {MdSmartToy, MdWorkOutline} from "react-icons/md";
import {GoLocation} from "react-icons/go";
import {HiCode} from "react-icons/hi";
import {HiOutlineUserGroup} from "react-icons/hi";
import {RiRocket2Fill} from "react-icons/ri";
import {FaUserAstronaut} from "react-icons/fa";
import {GiMaterialsScience} from "react-icons/gi";

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
                                <SlGraduation className="about__icon"/>
                                <h5>Master</h5>
                                <small>MIAGE</small><br />
                                <small><GoLocation /> Univ' d'Orléans</small><br />
                                <small>2023</small>
                            </article>
                            <article className="about__card">
                                <MdWorkOutline className="about__icon"/>
                                <h5>Sopra Steria</h5>
                                <small>Ingénieur d'études</small><br />
                                <small><GoLocation /> Orléans</small><br />
                                <small>Sept 2021 - Now</small>
                            </article>
                            <article className="about__card">
                                <HiCode className="about__icon"/>
                                <h5>Freelance</h5>
                                <small>Dev Fullstack</small><br />
                                <small><HiOutlineUserGroup /> Udesma45</small><br />
                                <small>4 mois</small>
                            </article>
                        </div>
                        <p>
                            Hello ! Julien, 23 ans, je suis diplômé d'un Master MIAGE et je suis actuellement Ingénieur d'études et développement chez Sopra Steria. Je suis passionné par les nouvelles technologies, ainsi que l'aérospatial, l'astronomie et l'astrophysique.
                            <div className="passions">
                                <div className="passion" id="technologies"><MdSmartToy className="passion_icon"/>Technologies</div>
                                <div className="passion" id="aerospace"><RiRocket2Fill className="passion_icon"/>Aérospatial</div>
                                <div className="passion" id="astronomie"><FaUserAstronaut className="passion_icon"/>Astronomie</div>
                                <div className="passion" id="recherche"><GiMaterialsScience className="passion_icon"/>Recherche</div>
                            </div>
                        </p>
                        <a href="#contact" className="btn btn-primary">Contacte moi !</a>
                    </div>
                </div>

            </section>
        );
}

export default About;