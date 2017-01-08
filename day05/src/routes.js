import React from "react";
import { Route, IndexRoute } from "react-router";

import App from './components/app/App';
import Welcome from "./components/Welcome";
import Item1 from "./components/items/Item1";
import Item2 from "./components/items/Item2";

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Welcome} />
        <Route path="item-1" component={Item1} />
        <Route path="item-2" component={Item2} />
    </Route>
)