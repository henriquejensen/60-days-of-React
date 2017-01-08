import React, { Component } from 'react';

import Sidebar from "../sidebar/Sidebar";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to </h2>
        </div>
        <Sidebar />
      </div>
    );
  }
}

export default App;
