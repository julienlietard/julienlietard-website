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
        name: "Exactement\n😉",
        description: "Découvrez mon portfolio développé en React et déployé via Azure.",
        message: "Mais je suis déjà dessus non ?",
        link: "https://julienlietard.fr/",
    },
    {
        image: LABO,
        alt: "Mon labo",
        name: "Va lire le tout dernier article il était passionnant à écrire.",
        description: "Découvrez ma toute nouvelle application qui est actuellement en développement, permettant de lire des articles sur divers sujets à travers mon blog.",
        message: "J'aimerai bien suivre l'actu tech",
        link: "https://blog.julienlietard.fr/",
    },
    {
        image: JUDESIGN,
        alt: "Ma librairie React",
        name: "Ma librairie React",
        description: "Découvrez ma librairie React avec mon Storybook et déployé via Azure.",
        message: "Il est stylé le bouton 😲",
        link: "https://happy-mushroom-009b83303.5.azurestaticapps.net/",
    },
    {
        image: UDESMA,
        alt: "Udesma45",
        name: "Voici le lien du site, hésite pas à t'inscrire à l'asso !",
        description: "Site web de l'association UDESMA45 développé lors de mon stage de L3 MIAGE.",
        message: "Elle a l'air super cette association !",
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
                        message={project.message}
                    />
                ))}
            </JUCarousel>
        </section>
    );
};

export default Projects;
