import React, { useEffect } from 'react';
import './projects.css';
import Swiper from 'swiper';
import LABO from '../../assets/labo.png';
import PORTFOLIO from '../../assets/portfolio.png';
import UDESMA from '../../assets/udesma45.png';
import JUDESIGN from '../../assets/ju-design.png';

const Projects = () => {
    useEffect(() => {
        const swiper = new Swiper('.slide-content', {
            slidesPerView: 4,
            spaceBetween: 25,
            loop: true,
            centerSlide: true,
            fade: true,
            grabCursor: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                dynamicBullets: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                0: {
                    slidesPerView: 1,
                },
                520: {
                    slidesPerView: 2,
                },
                950: {
                    slidesPerView: 3,
                },
            },
        });
        return () => {
            swiper.destroy();
        };
    }, []);

    return (
        <section id="projects">
            <h5>Découvrez mon</h5>
            <h2>Workspace</h2>
            <h2>En Construction !</h2>
            <div className="slide-container swiper">
                <div className="slide-content">
                    <div className="card-wrapper swiper-wrapper">
                    <div className="card swiper-slide">
                            <div className="image-content">
                                <img src={PORTFOLIO} alt="Mon labo"/>
                                <span className="overlay"></span>
                            </div>
                            <div className="card-content">
                                <h2 className="name">Mon Portfolio</h2>
                                <p className="description">
                                    Découvrez mon portfolio développé en React et déployé via Azure.
                                </p>
                                <a href="https://www.julienlietard.fr/">Vous êtes ici</a>
                            </div>
                        </div>
                        <div className="card swiper-slide">
                            <div className="image-content">
                                <img src={LABO} alt="Mon labo"/>
                                <span className="overlay"></span>
                            </div>
                            <div className="card-content">
                                <h2 className="name">Mes articles</h2>
                                <p className="description">
                                    Découvrez mes différents articles sur divers sujets à travers mon blog.
                                </p>
                                <a href="https://blog.julienlietard.fr/">Voir plus</a>
                            </div>
                        </div>
                        <div className="card swiper-slide">
                            <div className="image-content">
                            <img src={JUDESIGN} alt="Mon labo"/>
                                <span className="overlay"></span>
                            </div>
                            <div className="card-content">
                                <h2 className="name">Ma librairie React</h2>
                                <p className="description">
                                    Découvrez ma librairie React avec mon Storybook et déployé via Azure.
                                </p>
                                <a href="https://happy-mushroom-009b83303.5.azurestaticapps.net/">Voir plus</a>
                            </div>
                        </div>
                        <div className="card swiper-slide">
                            <div className="image-content">
                                <img src={UDESMA} alt="Mon labo"/>
                                <span className="overlay"></span>
                            </div>
                            <div className="card-content">
                                <h2 className="name">Udesma45</h2>
                                <p className="description">
                                    Site web de l'association UDESMA45 développé lors de mon stage de L3 MIAGE.
                                </p>
                                <a href="https://udesma45.fr/">Voir plus</a>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="swiper-button-next swiper-navBtn"></div>
                <div className="swiper-button-prev swiper-navBtn"></div>
                <div className="swiper-pagination"></div>
            </div>
        </section>
    );
};

export default Projects;