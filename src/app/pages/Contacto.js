import React from 'react';

import { Footer } from '../components/Footer';
import { NavBar } from '../components/NavBar';
import { Form } from './Form';

export const Contacto = () => 
{
    return (
        <div className="body">
            <NavBar />
            
            <Form />
            
            <Footer />
        </div>
    )
}
