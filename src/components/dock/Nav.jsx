import './nav.css';
import { useEffect, useState, useCallback } from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { BsBookmarkDash } from "react-icons/bs";
import { RiHomeSmile2Line } from 'react-icons/ri';
import { MdOutlineWorkOutline } from "react-icons/md";
import { TiThLargeOutline } from "react-icons/ti";

const Nav = () => {
    const [activeNav, setActiveNav] = useState(window.location.hash || '#');

    const handleScroll = useCallback(() => {
        const scrollPosition = window.scrollY;
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercentage = (scrollPosition / totalHeight) * 100;

        if (scrollPercentage < 20) setActiveNav('#');
        else if (scrollPercentage < 51) setActiveNav('#about');
        else if (scrollPercentage < 68) setActiveNav('#skills');
        else if (scrollPercentage < 80) setActiveNav('#experience');
        else setActiveNav('#projects');
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    return (
        <nav>
            <a href="#" onClick={() => setActiveNav("#")} className={activeNav === '#' ? 'active' : ''}><RiHomeSmile2Line /></a>
            <a href="#about" onClick={() => setActiveNav("#about")} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
            <a href="#skills" onClick={() => setActiveNav("#skills")} className={activeNav === '#skills' ? 'active' : ''}><BsBookmarkDash /></a>
            <a href="#experience" onClick={() => setActiveNav("#experience")} className={activeNav === '#experience' ? 'active' : ''}><MdOutlineWorkOutline /></a>
            <a href="#projects" onClick={() => setActiveNav("#projects")} className={activeNav === '#projects' ? 'active' : ''}><TiThLargeOutline /></a>
        </nav>
    );
};

export default Nav;
