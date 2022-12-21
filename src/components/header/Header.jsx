import './header.css';

import React from 'react';
import CTA from "./CTA";
import ME from "../../assets/astro.gif"
import HeaderSocial from "./HeaderSocial";
import {TiArrowRightThick} from "react-icons/ti";

const Header = () => {
        return (
            <div className="App">
                <header>
                    <div className="container header__container">
                        <h5>Bienvenue sur mon</h5>
                        <h1>Portfolio !</h1>
                        <h5 className="text-light">Développeur Fullstack</h5>
                        <CTA />
                        <HeaderSocial />
                        <div className="me">
                            <img src={ME} alt="me"/>
                        </div>

                        <a href="/#contact" className='scroll__down'><TiArrowRightThick /></a>

                    </div>
                </header>
            </div>
        );
}

export default Header;