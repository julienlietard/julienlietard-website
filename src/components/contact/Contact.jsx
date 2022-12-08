import React from 'react';
import './contact.css';
import {MdOutlineEmail} from "react-icons/md";
import {BsWhatsapp} from "react-icons/bs";

const Contact = () => {
        return (
            <section id="contact">
                <h5>Un renseignement ?</h5>
                <h2>Contacte moi</h2>

                <div className="container contact__container">
                    <div className="contact__options">
                        <article className="contact__option">
                            <MdOutlineEmail className="contact__option-icon"/>
                            <h4>Email</h4>
                            <h5>contact.julienlietard@gmail.com</h5>
                            <a href="mailto:contact.julienlietard@gmail.com" rel="noreferrer" target="_blank">Envoyer un message</a>
                        </article>
                        <article className="contact__option">
                            <BsWhatsapp className="contact__option-icon"/>
                            <h4>WhatsApp</h4>
                            <h5>Z3ZO4MV6R8</h5>
                            <a href="https://api.whatsapp.com/send?phone+33627018294" rel="noreferrer" target="_blank">Envoyer un message</a>
                        </article>
                    </div>
                    <form action="">
                        <input type="text" name="Nom" placeholder="Nom" required/>
                        <input type="email" name="email" placeholder="Email" required/>
                        <textarea name="message" rows="7" placeholder="Votre message" required></textarea>
                        <button type="submit" className="btn sendmsg">Envoyer un message</button>

                    </form>
                </div>
            </section>
        );
}

export default Contact;