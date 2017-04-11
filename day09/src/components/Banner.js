import React, { Component } from "react";

class Banner extends Component {
    state = {}

    onSubmitForm = (evt) => {
        evt.preventDefault();

        this.props.onSubmitNewFrase(this.state.frase);

        this.setState({
            frase: ""
        })
    }

    onChange = (evt) => {
        this.setState({
            frase: evt.target.value
        })
    }

    render() {
        return (
            <div className="jumbotron text-center">
                <h1>Frases marcantes</h1> 
                <p>Escreva uma frase marcante</p> 
                <form className="form-inline" onSubmit={this.onSubmitForm} >
                    <div className="input-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Digite sua frase"
                        value={this.state.frase}
                        onChange={this.onChange}
                        required />
                    <div className="input-group-btn">
                        <button
                            type="button"
                            className="btn btn-danger">Enviar</button>
                    </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Banner;