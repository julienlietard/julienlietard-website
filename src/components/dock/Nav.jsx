import './nav.css';

import React, {useEffect} from 'react';
import {AiOutlineUser} from 'react-icons/ai'
import {FaRegEnvelope} from "react-icons/fa";
import {BsBook} from "react-icons/bs";
import {useState} from "react";
import {TiHomeOutline, TiThLargeOutline} from "react-icons/ti";

const Nav = () => {
        const [activeNav, setActiveNav] = useState('#')

        const handleScroll = () => {
                const scrollPosition = window.scrollY;
                const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
                const scrollPercentage = (scrollPosition / totalHeight) * 100;
                switch (true) {
                        case scrollPercentage < 25:
                                setActiveNav('#');
                                break;
                        case scrollPercentage < 45:
                                setActiveNav('#about-me');
                                break;
                        case scrollPercentage < 68:
                                setActiveNav('#my-skills');
                                break;
                        case scrollPercentage < 90:
                                setActiveNav('#my-projects');
                                break;
                        default:
                                setActiveNav('#contact-card');
                                break;
                }
        };
        useEffect(() => {
                window.addEventListener('scroll', handleScroll);
                return () => {
                        window.removeEventListener('scroll', handleScroll);
                };
        }, []);

        return (
            <nav>
                <a href="/#" onClick={() => setActiveNav("#")} className={activeNav === '#' ? 'active' : ''}><TiHomeOutline /></a>
                <a href="/#about" onClick={() => setActiveNav("#about-me")} className={activeNav === '#about-me' ? 'active' : ''}><AiOutlineUser /></a>
                <a href="/#skills" onClick={() => setActiveNav("#my-skills")} className={activeNav === '#my-skills' ? 'active' : ''}><BsBook /></a>
                <a href="/#projects" onClick={() => setActiveNav("#my-projects")} className={activeNav === '#my-projects' ? 'active' : ''}><TiThLargeOutline /></a>
                <a href="/#contact" onClick={() => setActiveNav("#contact-card")} className={activeNav === '#contact-card' ? 'active' : ''}><FaRegEnvelope /></a>
            </nav>
        );
}

export default Nav;