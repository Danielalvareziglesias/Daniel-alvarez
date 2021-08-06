import React from 'react';
import { Link } from 'react-router-dom';

import { Footer } from '../components/Footer';
import { NavBar } from '../components/NavBar';

//import knowme from './../../images/conoceme.jpg';

export const Home = () => 
{
    return (
        <div className="body">
            <NavBar />

            <div className="animate__animated animate__fadeIn mt-4 container d-flex flex-column justify-content-between">
                <div className="d-flex flex-column mt-4 mt-md-0">
                    <h2 className="mt-4 text-center">MIS SERVICIOS</h2>

                    <div className="mt-3 row">
                        <div className="col text-center">
                            <i className="bi bi-person-fill icon-services"></i>
                            <h3>Entrenamiento personal</h3>
                            <p className="descrp">
                                Entrenamiento individual personalizado y adaptado a cada cliente.
                            </p>
                        </div>

                        <div className="col text-center">
                            <i className="bi bi-droplet-half icon-services"></i>
                            <h3>Plan de alimentación</h3>
                            <p className="descrp">
                                Realizo planes de alimentación para que alcances tus metas.
                            </p>
                        </div>

                        <div className="col text-center">
                            <i className="bi bi-book icon-services"></i>
                            <h3>Oposiciones y preparaciones físicas</h3>
                            <p className="descrp">
                                Te ayudo para que tu condición física no sea un inconveniente a la hora de elegir tu futuro.
                            </p>
                        </div>

                        <div className="col text-center">
                            <i className="bi bi-display icon-services"></i>
                            <h3>Planificación online</h3>
                            <p className="descrp">
                                Elaboro los planes de entrenamiento y alimentación de manera totalmente online.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="d-flex flex-column justify-content-center align-items-center mt-5">
                    <h2>CONTACTA CONMIGO</h2>

                    <p className="mt-2">
                        Ponte en contacto conmigo a través de mis redes sociales o correo electrónico.
                    </p>

                    <div className="w-50 mt-4 d-flex flex-column flex-xl-row justify-content-around">
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <i className="bi bi-instagram icon"></i>
                            <a 
                                className="d-flex align-items-center justify-content-center email pointer"
                                href="https://www.instagram.com/danielalvarezigle1/"
                                target="_blank" rel="noreferrer noopener"
                            >@danielalvarezigle1</a>
                        </div>
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <i className="bi bi-envelope-fill icon"></i>
                            <a 
                                className="d-flex align-items-center justify-content-center email pointer"
                                href="mailto:danielalvareziglesias@gmail.com"
                                target="_blank" rel="noreferrer noopener"
                            >danielalvareziglesias@gmail.com</a>
                        </div>
                        
                    </div>
                </div>
            </div>

            <div className="animate__animated animate__fadeIn knowme">
                <img src="https://raw.githubusercontent.com/RubenFern/proyecto-web-dani/main/src/images/conoceme.jpg" alt="conoceme.jpg" />
                <div className="knowme-text">
                    <Link className="knowme-link" to="/sobre-mi">Conóceme</Link> 
                </div>
            </div>

            <Footer />
        </div>
    )
}
