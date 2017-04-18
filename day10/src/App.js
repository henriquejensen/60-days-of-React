import React from 'react'
import {
  Switch,
  Route
} from 'react-router-dom'

import Home from "./Home";
import User from "./User";

class App extends React.Component {
  render() {
    return (
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/img/:id' component={User}/>
        </Switch>
    )
  }
}

export default App;