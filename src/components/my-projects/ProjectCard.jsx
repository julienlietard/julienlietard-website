import React from 'react';
import './projectCard.css';

const ProjectCard = ({ image, alt, name, description, link }) => {
    return (
        <div className="card">
            <div className="image-content">
                <img src={image} alt={alt} className="card-image" />
            </div>
            <div className="card-content">
                <h3 className="name">{name}</h3>
                <p className="description">{description}</p>
                <a href={link} target="_blank" rel="noopener noreferrer">Voir plus</a>
            </div>
        </div>
    );
};

export default ProjectCard;
