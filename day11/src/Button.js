import React, { Component } from 'react';

class Button extends Component {
    render() {
        let index = this.props.index;
        let text = this.props.text;
        return (
            <button onClick={() => this.props.handleShowAlert(index)}> {text}</button>
        );
    }
}

export default Button;