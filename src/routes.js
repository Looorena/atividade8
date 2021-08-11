import React from 'react';
import { Home } from './Views/Home';
import { About } from './Views/About';
import { Contador } from './Views/Contador';
import { NavBar } from './Componentes/NavBar';
import { Route, Switch, Redirect } from 'react-router-dom';

export const Routes = () => {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route exact path="/Home" component={Home} />
                <Route exact path="/">
                    <Redirect to="/Home" />
                </Route>
                <Route exact path="/About" component={About} />
                <Route exact path="/">

                </Route>

                <Route exact path="/Contador" component={Contador} />
                <Route exact path="/"></Route>

            </Switch>
        </div >
    );
};