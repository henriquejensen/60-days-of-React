import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router, Route } from "react-router";
import './index.css';

import App from "./App";
import Welcome from "./containers/Welcome";
import Users from "./containers/Users";
import Photos from "./containers/Photos";

ReactDOM.render(
    <Router history={browserHistory}>
        <Route component={App}>
            <Route name="Home" path="/" component={Welcome} />
            <Route name="Usuarios" path="/usuarios" component={Users} />
            <Route name="Fotos" path="/fotos" component={Photos} />
        </Route>
    </Router>,
  document.getElementById('root')
);
