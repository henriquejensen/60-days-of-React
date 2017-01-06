import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import promise from "redux-promise";
import reducers from "./reducers"

import App from "./components/App";

const store = createStore(reducers,
  {},
  applyMiddleware(promise)
);

//Todo o componente criado em React é introduzido no template na forma de tags(estilo do JSX)
render(
	<Provider store={store} >
		<App />
	</Provider>,
	document.getElementById("app")
)