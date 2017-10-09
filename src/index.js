import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

ReactDOM.render(
    <BrowserRouter>
        {/*<div>*/}
            {/*<ul>*/}
                {/*<li><NavLink to="/products" activeClassName="active">Home</NavLink></li>*/}
            {/*</ul>*/}

            {/*<Switch>*/}
                {/*<Route path="/products" component={App} > </Route>*/}
            {/*</Switch>*/}
        {/*</div>*/}
        <App/>
    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();
