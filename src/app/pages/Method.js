import React from 'react';

import { NavBar } from '../components/NavBar';
import { Footer } from '../components/Footer';

export const Method = () => 
{
    return (
        <div className="body">
            <NavBar />

            <div className="animate__animated animate__fadeIn container-fluid row gap-3 mt-3 m-0">
                <h1 className="text-center">Mi método de trabajo</h1>

                <div id="text-1" className="col step">
                    <h3>Prueba inicial de Condición Física</h3>
                    <div className="justify lh-base text-step">
                        <hr />
                        <p>
                            Se realizará una prueba física previa para conocer el nivel de condición física actual del cliente y poder establecer unas bases para comenzar 
                            el programa de entrenamiento especializado para él.
                        </p>
                        <p>
                            El cliente determinará los días y el tiempo a desarrollo del entrenamiento que desea realizar para poder adaptarlo a su estilo 
                            de vida a la perfección.
                        </p>
                        <p>
                            Además, se establecerá el objetivo a alcanzar según sus exigencias, para ello se realizarán revisiones del progreso cada 2 semanas y una 
                            evaluación final cada 30 días.
                        </p>
                    </div>
                    
                </div>

                <div id="text-2" className="col step">
                    <h3>Cuestionario inicial (PAR - Q)</h3>
                    <div className="justify lh-lg text-step">
                        <hr />
                        <p>
                            Además de la evaluación física se realizará un cuestionario previo para conocer la condición física actual del cliente atendiendo a criterios de articulaciones, 
                            patologías, enfermedades y demás problemas que puedan afectar al desarrollo de la sesión.
                        </p>
                    </div>
                    
                </div>

                <div id="text-3" className="col step">
                    <h3>Aclaración</h3>
                    <div className="justify lh-lg text-step">
                        <hr />
                        <p>
                            La metodología descrita anteriormente se realizará únicamente en caso de desear realizar un entrenamiento, 
                            en caso de desear un plan de alimentación se desarrollará una metodología diferente.
                        </p>
                    </div>
                    
                </div>
            </div>
            

            <Footer />
        </div>
    )
}
