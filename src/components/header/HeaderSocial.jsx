import React from 'react';
import {BsLinkedin} from "react-icons/bs";
import {BsGithub} from "react-icons/bs";
import {BsInstagram} from "react-icons/bs";
import {BsTwitter} from "react-icons/bs";

const HeaderSocial = () => {
    return (
        <div className="header__socials">
            <a href="https://www.linkedin.com/in/julien-lietard/" rel="noreferrer" target="_blank"><BsLinkedin /></a>
            <a href="https://github.com/julienlietard" rel="noreferrer" target="_blank"><BsGithub /></a>
            <a href="https://www.instagram.com/se0lki" rel="noreferrer" target="_blank"><BsInstagram /></a>
            <a href="https://twitter.com/ju1ien_" rel="noreferrer" target="_blank"><BsTwitter /></a>
        </div>
    );
};

export default HeaderSocial;