import React, { Component } from "react";

export default class Menu extends Component {
    render() {
        return (
            <nav>
                {this.props.items.map((item, index) => {
                    return <a href={item.link} key={index}>{item.label} | </a>
                })}
                    
            </nav>
        )
    }
}