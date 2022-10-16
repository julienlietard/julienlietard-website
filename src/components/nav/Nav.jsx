import './nav.css';

import React from 'react';
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from "react-icons/ai";
import {SlGraduation} from "react-icons/sl";
import {MdWorkOutline} from "react-icons/md";
import {BiMessageDetail} from "react-icons/bi";
import {BsBook} from "react-icons/bs";
import {useState} from "react";

const Nav = () => {
        const [activeNav, setActiveNav] = useState('#')
        return (
            <nav>
                <a href="#" onClick={() => setActiveNav("#")} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
                <a href="#about" onClick={() => setActiveNav("#about")} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
                <a href="#formation" onClick={() => setActiveNav("#formation")} className={activeNav === '#formation' ? 'active' : ''}><SlGraduation /></a>
                <a href="#experiences" onClick={() => setActiveNav("#experiences")} className={activeNav === '#experiences' ? 'active' : ''}><MdWorkOutline /></a>
                <a href="#skills" onClick={() => setActiveNav("#skills")} className={activeNav === '#skills' ? 'active' : ''}><BsBook /></a>
                <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === '#contact' ? 'active' : ''}><BiMessageDetail /></a>
            </nav>
        );
}

export default Nav;