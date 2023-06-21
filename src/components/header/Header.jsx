import './header.css';

import React from 'react';
import CTA from "./CTA";
import ME from "../../assets/ban.png"
import HeaderSocial from "./HeaderSocial";
import {TiArrowRightThick} from "react-icons/ti";
import {BsCursorText} from "react-icons/bs"

const Header = () => {
        return (
            <div className="App">
                <header>
                    <div className="container header__container">
                        <h5>Hello world <span className="cursor">|</span></h5>
                        <h1>Julien</h1>
                        <h5 className="text-light">Ingénieur Logiciel</h5>
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