import React, { Component } from 'react';
import { Col } from "react-bootstrap";

import Header from "./components/Header";
import './App.css';

import { URL_GET_USERS, URL_GET_PHOTOS } from "./constants";

class App extends Component {

  state = {

  }

  mudarTitulo = (evt, title) => {
    evt.preventDefault();
    this.setState({
      titulo: title
    })
  }

  render() {
    let title = this.state.titulo;
    return (
      <div className="App">
        <Header titulo={title ? title : "inicio" } mudarTitulo={this.mudarTitulo}/>
          <div style={{padding: "0 15px"}}>
            {this.props.children}
          </div>
      </div>
    )
  }
}

export default App;
