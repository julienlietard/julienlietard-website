import React from 'react';
import './projectCard.css';

const ProjectCard = ({ image, alt, name, description, link, message }) => {
    return (
        <div className="card">
            <div className="image-content">
                <img src={image} alt={alt} className="card-image" />
            </div>
            <div className="card-content">
                <div className="message">
                    <p className="description">{description}</p>
                    <p className="user">Julien</p>
                </div>
                <div className="response">
                    <p>{message}</p>
                    <p className="user">Moi</p>
                </div>
                <div className="name">
                <p>{name} :</p>
                <a href={link} target="_blank" rel="noopener noreferrer" className="namemsg">{link}</a>
                <p className="user">Julien</p>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
