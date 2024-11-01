import './island.css';
import React, { useEffect, useState } from 'react';

const Island = () => {
    const [activeSection, setActiveSection] = useState('#');
    const [scrollPercentage, setScrollPercentage] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const [hovered, setHovered] = useState(false);
    const [isVisible, setIsVisible] = useState(true);

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const newScrollPercentage = (scrollPosition / totalHeight) * 100;
        setScrollPercentage(newScrollPercentage);

        switch (true) {
            case newScrollPercentage < 25:
                setActiveSection('#');
                break;
            case newScrollPercentage < 45:
                setActiveSection('#about');
                break;
            case newScrollPercentage < 68:
                setActiveSection('#skills');
                break;
            case newScrollPercentage < 90:
                setActiveSection('#projects');
                break;
            default:
                setActiveSection('#contact');
                break;
        }
    };

    const sectionMapper = (section) => {
        switch (section) {
            case "#":
                return 'Accueil';
            case "#about":
                return 'Sur moi';
            case "#skills":
                return 'Compétences';
            case "#projects":
                return 'Workspace';
            default:
                return 'Me contacter';
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setIsVisible(window.innerWidth >= 800);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleClickOutside = (event) => {
        const dockElement = document.getElementById('island');
        if (dockElement && !dockElement.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        window.addEventListener('mousedown', handleClickOutside);
        return () => {
            window.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const radius = 12;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (scrollPercentage / 100 * circumference);

    const toggleIsland = () => {
        setIsOpen((prev) => !prev);
    };

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
        setTimeout(() => {
            if (isOpen && !hovered) {
                setIsOpen(false);
            }
        }, 2000);
    };

    useEffect(() => {
        if (isOpen && !hovered) {
            const timer = setTimeout(() => setIsOpen(false), 2000);
            return () => clearTimeout(timer);
        }
    }, [isOpen, hovered]);

    return (
        isVisible && (
            <div
                id="island"
                className={`island ${isOpen ? 'open' : ''}`}
                onClick={toggleIsland}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <svg width="30" height="30" className="progress-icon">
                    <circle
                        cx="15"
                        cy="15"
                        r={radius}
                        stroke="#888"
                        strokeWidth="4"
                        fill="transparent"
                    />
                    <circle
                        cx="15"
                        cy="15"
                        r={radius}
                        stroke="#1b82ff"
                        strokeWidth="4"
                        fill="transparent"
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                        style={{ transition: 'stroke-dashoffset 0.5s ease-in-out' }}
                    />
                </svg>
                <div className="section-name">
                    <div className="index">{sectionMapper(activeSection)}</div>
                </div>
                <div className="progress-container">
                    <div className="progress">
                        {Math.round(scrollPercentage)}%
                    </div>
                </div>
                {isOpen && (
                    <div className="sections">
                        <a className="section-link" href="#about">About Me</a>
                        <a className="section-link" href="#skills">My Skills</a>
                        <a className="section-link" href="#projects">My Projects</a>
                        <a className="section-link" href="#contact">Contact</a>
                    </div>
                )}
            </div>
        )
    );
}

export default Island;
