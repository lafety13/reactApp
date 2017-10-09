import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom'

import registerServiceWorker from './registerServiceWorker';
import {Product} from "./components/products/Product";

ReactDOM.render(
    <BrowserRouter>
        <div>
            <ul>
                <li><NavLink to="/products" activeClassName="active">Home</NavLink></li>
            </ul>

            <Switch>
                <Route path="/products" component={App}  >
                </Route>
            </Switch>
        </div>
    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();

