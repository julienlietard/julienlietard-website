import React, {useState} from 'react';
import CV from '../../assets/cv.pdf'
import './cta.css';
import {TiTick} from "react-icons/ti";

const Cta = () => {
    const [isActive, setIsActive] = useState(false);
    const [isDownloaded, setIsDownloaded] = useState(false);

    const handleClick = () => {
        setIsActive(true);
        setTimeout(() => {
            setIsActive(false);
            setIsDownloaded(true);

            const link = document.createElement('a');
            link.href = CV;
            link.download = 'CV-julienlietard.pdf';
            link.click();
        }, 3000);
    };

    return (
        <div className="cta">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="" download target="_self" onClick={ !isDownloaded ? handleClick : null}>
                <div className={`button ${isActive ? "active" : ""}`}>
                    <div className="content">
                        <i className={`bx ${isDownloaded ? "bx-check-circle" : "bx-cloud-download"}`} />
                        {
                            isDownloaded ?
                                <span className="btn-success">
                                    <TiTick/>
                                </span> :
                                <span className="btn btn-primary">
                                    Mon CV
                                </span>
                        }
                    </div>
                </div>
            </a>
            <a href={"#contact"} className="btn btn-primary">Me contacter</a>
        </div>
    );
}

export default Cta;