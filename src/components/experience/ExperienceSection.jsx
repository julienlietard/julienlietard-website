import './experienceSection.css';
import { useState } from 'react';
import sopraLogo from '../../assets/soprasteria.png';
import edfLogo from '../../assets/edf.png';

const experiences = [
  {
    date: '2023 – Présent',
    title: 'Développeur React & Spring',
    company: 'Sopra Steria',
    logo: sopraLogo,
    product: 'client Société Générale',
    missions: [
      'Développement de micro front-end en React et de "back for front" en Spring',
      'Architecture DevOps via Kubernetes, Docker et Jenkins',
      'Préparation, animation d’ateliers & cérémonies agiles',
    ],
  },
  {
    date: '2021 – 2023',
    title: 'Alternance Dév Full Stack',
    company: 'Sopra Steria',
    logo: sopraLogo,
    product: 'clients CNP & SG',
    missions: [
      'Développement Spring et React en équipe SCRUM',
      'Déploiement continu via le Cloud (Kubernetes)',
      'Développement .NET et Angular pour CNP Assurances',
    ],
  },
  {
    date: '2020',
    title: 'Stagiaire Développeur',
    company: 'EDF',
    logo: edfLogo,
    product: 'Service Logistique',
    missions: [
      'Conception d’applications métier web',
      'Rédaction de documentation & cahier des charges',
      'Méthodes agiles & collaboration avec l’équipe dev',
    ],
  },
];

const ExperienceSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="experience-expandable">
      <h2>Work Experience</h2>
      <ul className="experience-list">
        {experiences.map((exp, i) => (
          <li key={i} className="experience-item">
            <div className="experience-header">
              <span className="experience-date">{exp.date}</span>
              <div className="experience-summary">
                <span className="experience-title">{exp.title} chez</span>
                <span
                  className={`experience-badge ${openIndex === i ? 'open' : ''}`}
                  onClick={() => toggle(i)}
                >
                  <div className="experience-badge-header">
                    <img src={exp.logo} alt={exp.company} />
                    <span className="experience-company">{exp.company}</span>
                    <span className="experience-product">{exp.product}</span>
                  </div>
                  <div className={`experience-details ${openIndex === i ? 'open' : ''}`}>
                    <ul>
                      {exp.missions.map((m, j) => (
                        <li key={j}>{m}</li>
                      ))}
                    </ul>
                  </div>
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ExperienceSection;
