import React, {Component} from 'react';
import './about.css';
import {FaAward} from "react-icons/fa";
import ME from "../../assets/meirl.png";
import {SlGraduation} from "react-icons/sl";
import {MdWorkOutline} from "react-icons/md";
import {GoLocation} from "react-icons/go";
import {HiCode} from "react-icons/hi";
import {HiOutlineUserGroup} from "react-icons/hi";

const About = () => {
        return (
            <section id="about">
                <h5>En savoir plus</h5>
                <h2>À propos de moi</h2>

                <div className="container about__container">
                    <div className="about__me">
                        <div className="about__me-image">
                            <img src={ME} alt="About Image" className="meirl"/>
                        </div>
                    </div>
                    <div className="about__content">
                        <div className="about__cards">
                            <article className="about__card">
                                <SlGraduation className="about__icon"/>
                                <h5>Licence</h5>
                                <small>MIAGE</small><br />
                                <small><GoLocation /> Université Orléans</small><br />
                                <small>2021</small>
                            </article>
                            <article className="about__card">
                                <MdWorkOutline className="about__icon"/>
                                <h5>Sopra Steria</h5>
                                <small>Ingénieur d'études</small><br />
                                <small><GoLocation /> Orléans Emile Zola</small><br />
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
                            Hello ! Julien, 22 ans, étudiant à l'Université d'Orléans en deuxième année de Master MIAGE : Méthodes Informatiques Appliquées à la Gestion des Entreprises option Systèmes d'information répartis en alternance à Sopra Steria.                        </p>
                        <a href="#contact" className="btn btn-primary">Contacte moi !</a>
                    </div>
                </div>

            </section>
        );
}

export default About;