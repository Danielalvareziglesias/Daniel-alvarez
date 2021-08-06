import React from "react";
import { Link } from "react-router-dom";

//import fotoDani from "./../../images/fotoDani.jpg";

import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import { SliderAboutMe } from "../components/SliderAboutMe";

export const AboutMe = () => 
{
  return (
    <div className="body">
      <NavBar />

      <div className="animate__animated animate__fadeIn container-fluid container-aboutme p-lg-5 d-flex justify-content-between align-items-center flex-column-reverse flex-xl-row">
        <div className="lh-lg justify mx-4 w-100 aboutme">
          <h2 className="mt-4 preguntaAboutMe">¿Quién soy?</h2>
          <h1 className="tituloAboutMe">Daniel Álvarez Iglesias</h1>

          <p className="lh-base parrafoAboutMe">
          Soy entrenador deportivo. Desde siempre he sido un apasionado del mundo deportivo y del entrenamiento físico. 
          A día de hoy cuento con más de 5 años de formación académica especializada y una década ejerciendo como entrenador en entidades deportivas.
          </p>

          <p className="lh-base parrafoAboutMe">
          Aquí puedes ver mi currículum completo y actualizado, aunque cambiante; pues me caracterizo por ser una persona en constante evolución y aprendizaje.
          </p>

          <p className="lh-base parrafoAboutMe">
          Actualmente curso un grado Superior en Acondicionamiento Físico. Para cualquier duda o consulta te invito a usar mis métodos de <Link className="text-dark" to="/contacto">contacto</Link> y te responderé a la mayor brevedad posible.
          A modo de resumen esta es mi principal formación relacionada con la actividad física y deportiva:
          </p>

        </div>
        <div className="d-flex justify-content-center">
          <img
            className="rounded-3 img" 
            src="https://raw.githubusercontent.com/RubenFern/proyecto-web-dani/main/src/images/fotoDani.jpg"
            alt="Daniel">
          </img>
        </div>  
      </div>

      <SliderAboutMe />
      
      <Footer />
    </div>
  );
};
