import './nav.css';
import React, { useEffect, useState, useCallback } from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { FaRegEnvelope } from "react-icons/fa";
import { BsBookmarkDash } from "react-icons/bs";
import { BiMessageMinus } from 'react-icons/bi';
import { TiThLargeOutline } from "react-icons/ti";
import { RiHomeSmile2Line } from 'react-icons/ri';

const Nav = () => {
    const [activeNav, setActiveNav] = useState(window.location.hash || '#');

    const handleScroll = useCallback(() => {
        const scrollPosition = window.scrollY;
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercentage = (scrollPosition / totalHeight) * 100;

        if (scrollPercentage < 25) setActiveNav('#');
        else if (scrollPercentage < 45) setActiveNav('#about');
        else if (scrollPercentage < 68) setActiveNav('#skills');
        else if (scrollPercentage < 90) setActiveNav('#projects');
        else setActiveNav('#contact');
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    return (
        <nav>
            <a href="#home" onClick={() => setActiveNav("#")} className={activeNav === '#' ? 'active' : ''}><RiHomeSmile2Line /></a>
            <a href="#about" onClick={() => setActiveNav("#about")} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
            <a href="#skills" onClick={() => setActiveNav("#skills")} className={activeNav === '#skills' ? 'active' : ''}><BsBookmarkDash /></a>
            <a href="#projects" onClick={() => setActiveNav("#projects")} className={activeNav === '#projects' ? 'active' : ''}><TiThLargeOutline /></a>
            <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === '#contact' ? 'active' : ''}><BiMessageMinus /></a>
        </nav>
    );
};

export default Nav;
