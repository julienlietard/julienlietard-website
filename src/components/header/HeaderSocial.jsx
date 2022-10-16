import React from 'react';
import {BsLinkedin} from "react-icons/bs";
import {BsGithub} from "react-icons/bs";
import {BsInstagram} from "react-icons/bs";
import {BsTwitter} from "react-icons/bs";

const HeaderSocial = () => {
    return (
        <div className="header__socials">
            <a href="https://www.linkedin.com/in/julien-lietard/" target="_blank"><BsLinkedin /></a>
            <a href="https://github.com/julienlietard" target="_blank"><BsGithub /></a>
            <a href="https://www.instagram.com/se0lki" target="_blank"><BsInstagram /></a>
            <a href="https://twitter.com/ju1ien_" target="_blank"><BsTwitter /></a>
        </div>
    );
};

export default HeaderSocial;