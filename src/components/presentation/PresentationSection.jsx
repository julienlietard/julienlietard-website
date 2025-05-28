import './presentationSection.css';
import { useState } from 'react';

const PresentationSection = () => {
  const [contactVisible, setContactVisible] = useState(false);

  const toggleContact = () => {
    setContactVisible((prev) => !prev);
  };

  return (
    <section className="presentation">
      <div className="presentation__grid-bg" />
      
      <p className="presentation__tag">
        <span className="ping-dot" /> Disponible pour de nouveaux projets
      </p>
      
      <h2 className="presentation__title">
        <span>Ingénieur Web Passionné</span><br />
        <span className="highlight">basé en France</span>
      </h2>
      
      <p className="presentation__text">
        Je conçois des interfaces modernes, élégantes et maintenables.<br />
        Je code avec rigueur et design avec plaisir.
      </p>

      {!contactVisible ? (
        <button
          className="presentation__cta animated-toggle"
          onClick={toggleContact}
        >
          Me contacter
        </button>
      ) : (
        <div
          className="presentation__contact-status animated-toggle"
          onClick={toggleContact}
          title="Clique pour refermer"
        >
          contact.julienlietard@gmail.com
        </div>
    )}

    </section>
  );
};

export default PresentationSection;
