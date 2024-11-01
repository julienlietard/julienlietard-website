import React from 'react';
import JUCarousel from './JUCarousel';
import ProjectCard from './ProjectCard';
import LABO from '../../assets/labo.png';
import PORTFOLIO from '../../assets/portfolio.png';
import UDESMA from '../../assets/udesma45.png';
import JUDESIGN from '../../assets/ju-design.png';

const projectData = [
    {
        image: PORTFOLIO,
        alt: "Mon Portfolio",
        name: "Mon Portfolio",
        description: "Découvrez mon portfolio développé en React et déployé via Azure.",
        link: "https://www.julienlietard.fr/",
    },
    {
        image: LABO,
        alt: "Mon labo",
        name: "Mes articles",
        description: "Découvrez mes différents articles sur divers sujets à travers mon blog.",
        link: "https://blog.julienlietard.fr/",
    },
    {
        image: JUDESIGN,
        alt: "Ma librairie React",
        name: "Ma librairie React",
        description: "Découvrez ma librairie React avec mon Storybook et déployé via Azure.",
        link: "https://happy-mushroom-009b83303.5.azurestaticapps.net/",
    },
    {
        image: UDESMA,
        alt: "Udesma45",
        name: "Udesma45",
        description: "Site web de l'association UDESMA45 développé lors de mon stage de L3 MIAGE.",
        link: "https://udesma45.fr/",
    },
];

const Projects = () => {
    return (
        <section id="projects">
            <h5>Découvrez mon</h5>
            <h2>Workspace</h2>
            <JUCarousel>
                {projectData.map((project, index) => (
                    <ProjectCard
                        key={index}
                        image={project.image}
                        alt={project.alt}
                        name={project.name}
                        description={project.description}
                        link={project.link}
                    />
                ))}
            </JUCarousel>
        </section>
    );
};

export default Projects;
