import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from "react-router";
import { Provider } from "react-redux";
import { createStore } from "redux";

import reducers from "./reducers";
import routes from "./routes";
import './index.css';

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store} >
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('root')
);
