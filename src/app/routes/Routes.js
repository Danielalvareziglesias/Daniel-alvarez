import React from 'react';
import { HashRouter as Router, Redirect, Route, Switch } from "react-router-dom";

import { routes } from './index';

// Componentes de las páginas
const 
{
    Home,
    AboutMe,
    Method,
    Contacto
} = routes;

export const Routes = () => 
{
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={ Home } />
                <Route exact path="/sobre-mi" component={ AboutMe } />
                <Route exact path="/planes" component={ Method } />
                <Route exact path="/contacto" component={ Contacto } />

                <Redirect to="/" />
            </Switch>
        </Router>
    )
}
