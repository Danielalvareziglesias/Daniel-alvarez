import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';

//import logo from './../../images/logo.png';

import './NavBar.css';

export const NavBar = () => 
{
    const { location: { pathname } } = useHistory();

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-nav">
            <div className="container-fluid">
                <NavLink exact className="navbar-brand" to="/">
                    <img src="https://raw.githubusercontent.com/Danielalvareziglesias/Daniel-lvarez/main/src/images/logo.png" alt="logo.png" className="logo" />
                    Daniel Álvarez
                </NavLink>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav" 
                    aria-controls="navbarNav" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto fs-5 fw-bold margin-nb w-100 d-flex justify-content-around">
                        <NavLink exact className="nav-item nav-link" activeClassName="active" to="/">
                        { (pathname === "/") && <i className="bi bi-house"></i> } Inicio
                        </NavLink>
                    
                        <NavLink exact className="nav-item nav-link" activeClassName="active" to="/sobre-mi">
                        { (pathname === "/sobre-mi") && <i className="bi bi-award"></i> } Sobre mí
                        </NavLink>
                        
                        <NavLink exact className="nav-item nav-link" activeClassName="active" to="/planes">
                        { (pathname === "/planes") && <i className="bi bi-briefcase"></i> } Mi método
                        </NavLink>

                        <NavLink exact className="nav-item nav-link" activeClassName="active" to="/contacto">
                        { (pathname === "/contacto") && <i className="bi bi-person"></i> } Contacto
                        </NavLink>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
