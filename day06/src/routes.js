import React from "react";
import { Route, IndexRoute } from "react-router";

import App from './components/app/App';
import Dashboard from "./components/dashboard/Dashboard";
import Question from "./containers/Question";

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Dashboard} />
        <Route path="/questions" component={Question} />
    </Route>
)
