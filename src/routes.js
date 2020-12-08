import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import About from './components/pages/About'
import List from "./components/pages/Lista/";
import Cadastro from "./components/pages/Cadastro/";
import NavBar from './components/NavBar';

import './components/pages/About/styleAbout.css';
import './components/pages/Lista/styleLista.css';

function Routes(){

    return(
        <BrowserRouter>
        
            <Switch>
                <Route path="/" exact component={List} />
                <Route path="/cadastro" component={Cadastro} />
                <Route path="/about" component={About} />
            </Switch>
            <NavBar/>
        </BrowserRouter>
    );
}

export default Routes;