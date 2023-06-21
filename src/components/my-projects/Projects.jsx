import React, { useEffect } from 'react';
import './projects.css';
import Swiper from 'swiper';

const Projects = () => {
    useEffect(() => {
        const swiper = new Swiper('.slide-content', {
            slidesPerView: 3,
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
                                <span className="overlay"></span>
                            </div>
                            <div className="card-content">
                                <h2 className="name">En construction</h2>
                                <p className="description">
                                    The lorem text the section that contains header with having open functionality.
                                    Lorem dolor sit amet consectetur adipisicing elit.
                                </p>
                                <a>Voir plus</a>
                            </div>
                        </div>
                        <div className="card swiper-slide">
                            <div className="image-content">
                                <span className="overlay"></span>
                            </div>
                            <div className="card-content">
                                <h2 className="name">En construction</h2>
                                <p className="description">
                                    The lorem text the section that contains header with having open functionality.
                                    Lorem dolor sit amet consectetur adipisicing elit.
                                </p>
                                <a>Voir plus</a>
                            </div>
                        </div>
                        <div className="card swiper-slide">
                            <div className="image-content">
                                <span className="overlay"></span>
                            </div>
                            <div className="card-content">
                                <h2 className="name">En construction</h2>
                                <p className="description">
                                    The lorem text the section that contains header with having open functionality.
                                    Lorem dolor sit amet consectetur adipisicing elit.
                                </p>
                                <a>Voir plus</a>
                            </div>
                        </div>
                        <div className="card swiper-slide">
                            <div className="image-content">
                                <span className="overlay"></span>
                            </div>
                            <div className="card-content">
                                <h2 className="name">En construction</h2>
                                <p className="description">
                                    The lorem text the section that contains header with having open functionality.
                                    Lorem dolor sit amet consectetur adipisicing elit.
                                </p>
                                <a>Voir plus</a>
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