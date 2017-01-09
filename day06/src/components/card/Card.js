import React, { Component } from "react";

export default class Card extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
                <ul>
                    {this.props.options.map((opt,index) => {
                        return (
                            <li key={index}>{(index+1) + ": " + opt}</li>
                        )
                    })}
                </ul>
                <button onClick={() => this.props.onAnswered(this.props.pos)}>Responder</button>
            </div>
        )
    }
}