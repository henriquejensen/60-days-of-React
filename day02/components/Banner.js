import React, { Component } from "react";

export default class Banner extends Component {
    render() {
        return (
            <header>
                {this.props.title}
            
            </header>
        )
    }
}