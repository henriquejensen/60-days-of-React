import React, { Component } from "react";

export default class Card extends Component {
    state = {
        choosen: "",
        required: false
    }

    onChoose(opt) {
        this.setState({
            choosen: opt
        })
    }

    sendAnswer() {
        if(this.state.choosen) {
            this.props.onAnswered(this.props.pos, this.state.choosen);
            this.setState({
                required: false
            })
        } else {
            this.setState({
                required: true
            })
        }
    }

    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
                <ol>
                    {this.props.options.map((opt,index) => {
                        return (
                            <li key={index} onClick={() => this.onChoose(index+1)}>{opt}</li>
                        )
                    })}
                </ol>
                {this.state.required ? <div>Você deve escolher uma questão</div> : ""}
                <button onClick={this.sendAnswer.bind(this)}>Responder</button>
            </div>
        )
    }
}