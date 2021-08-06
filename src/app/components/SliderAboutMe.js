import React from 'react';

//import pool from './../../images/piscina.png';
//import triatlon from './../../images/triatlon.png';
//import sociodeportiva from './../../images/sociodeportiva.png';
//import acondfisico from './../../images/acondfisico.jpg'

export const SliderAboutMe = () => 
{

  return (
    <div className="animate__animated animate__fadeIn">
      <h2 className="text-center mb-4">Mis titulaciones</h2>
      <div id="carouselExampleIndicators" className="carousel slide pad-slider" data-bs-ride="carousel">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://raw.githubusercontent.com/RubenFern/proyecto-web-dani/main/src/images/sociodeportiva.png" className="d-block w-100 img-slider slider-height" alt="sociodeportiva.png" />
            <div className="carousel-caption">
              <h3 className="titulaciones">Técnico Superior en Enseñanza y Animación Sociodeportiva</h3>
            </div>
          </div>

          <div className="carousel-item">
            <img src="https://raw.githubusercontent.com/RubenFern/proyecto-web-dani/main/src/images/triatlon.png" className="d-block w-100 img-slider slider-height" alt="triatlon.png" />
            <div className="carousel-caption">
              <h3 className="titulaciones">Entrenador de Nivel 1 de Triatlón</h3>
            </div>
          </div>

          <div className="carousel-item">
            <img src="https://raw.githubusercontent.com/RubenFern/proyecto-web-dani/main/src/images/piscina2.png" className="d-block w-100 img-slider slider-height" alt="condicionamiento.png" />
            <div className="carousel-caption">
              <h3 className="titulaciones">Técnico Especialista en Hidrocinésia y Fitness Acuático</h3>
            </div>
          </div>

          <div className="carousel-item">
            <img src="https://raw.githubusercontent.com/RubenFern/proyecto-web-dani/main/src/images/acondfisico.jpg" className="d-block w-100 img-slider slider-height" alt="acondfisico.png" />
            <div className="carousel-caption">
              <h3 className="titulaciones">Cursando un Grado Superior en Acondicionamiento Físico Deportivo</h3>
            </div>
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon prev" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon next" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
    </div>
  )
}
