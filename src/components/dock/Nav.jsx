import './nav.css';

import React from 'react';
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from "react-icons/ai";
import {FaRegEnvelope} from "react-icons/fa";
import {BsBook} from "react-icons/bs";
import {useState} from "react";

const Nav = () => {
        const [activeNav, setActiveNav] = useState('#')
        return (
            <nav>
                <a href="/#" onClick={() => setActiveNav("#")} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
                <a href="/#about" onClick={() => setActiveNav("#about-me")} className={activeNav === '#about-me' ? 'active' : ''}><AiOutlineUser /></a>
                <a href="/#skills" onClick={() => setActiveNav("#my-skills")} className={activeNav === '#my-skills' ? 'active' : ''}><BsBook /></a>
                <a href="/#contact" onClick={() => setActiveNav("#contact-card")} className={activeNav === '#contact-card' ? 'active' : ''}><FaRegEnvelope /></a>
            </nav>
        );
}

export default Nav;