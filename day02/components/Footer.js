import React, { Component } from "react";

export default class Footer extends Component {
    render() {
        return (
            <footer>
                Powered by : <a href={this.props.link} target="_blank">{this.props.name}</a>
            </footer>
        )
    }
}