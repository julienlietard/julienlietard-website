import {useState} from 'react';
import CV from '../../assets/cv.pdf';
import './cta.css';

import dribbbleIcon from '../../assets/dribbble.svg';
import githubIcon from '../../assets/github.svg';
import xIcon from '../../assets/x.svg';
import cvIcon from '../../assets/cv.svg';
import behanceIcon from '../../assets/behance.svg';
import instagramIcon from '../../assets/Instagram.svg.png';

const Cta = () => {
  const [isClicked, setIsClicked] = useState(false);

  const downloadCV = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 1500);
    const link = document.createElement('a');
    link.href = CV;
    link.download = 'CV-JulienLietard.pdf';
    link.click();
  };

  return (
    <div className="cta">
      <div className="cta__socials">
        <button onClick={downloadCV} title="Télécharger mon CV">
          <img src={cvIcon} alt="Télécharger CV" />
        </button>
        <a href="#" id="github"><img src={githubIcon} alt="GitHub" /></a>
        <a href="#" id="x"><img src={xIcon} alt="X" /></a>
        <a href="#" id="dribbble"><img src={dribbbleIcon} alt="Dribbble" /></a>
        <a href="#" id="behance"><img src={behanceIcon} alt="Behance" /></a>
        <a href="#" id="instagram"><img src={instagramIcon} alt="Instagram" /></a>
      </div>
    </div>
  );
};

export default Cta;
