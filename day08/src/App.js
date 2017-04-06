import React, { Component } from 'react';
import { MyInput, MyTextArea } from "./components/Input";
import './App.css';

class App extends Component {
  state = {
    isFormFilled: false
  }

  onChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  onFormSubmit = (evt) => {
    evt.preventDefault();

    if(this.state.usuario) {
      alert("Informações do formulário"
            +"\nUSUARIO"+this.state.usuario
            +"\nEMAIL"+this.state.email
            +"\nTELEFONE"+this.state.telefone
            +"\nOBS"+this.state.obs);
      this.setState({
        isFormFilled: false,
        usuario: ""
      })
    }
    else
      this.setState({
        isFormFilled: true
      })
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.onFormSubmit}>
          <MyInput
            label="Usuário"
            type="text"
            name="usuario"
            value={this.state.usuario}
            onChange={this.onChange}
            error={this.state.isFormFilled}
            message="Campo obrigatório"
          />
          <MyInput
            label="Email"
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.onChange}
            error={this.state.isFormFilled}
            message="Campo obrigatório"
          />
          <MyInput
            label="Telefone"
            type="number"
            name="telefone"
            value={this.state.telefone}
            onChange={this.onChange}
            error={this.state.isFormFilled}
            message="Campo obrigatório"
          />
          <MyTextArea
            label="Obs"
            name="obs"
            value={this.state.obs}
            onChange={this.onChange}
            message="Campo obrigatório"
          />
          <button type="submit">Enviar</button>
        </form>
      </div>
    );
  }
}

export default App;
