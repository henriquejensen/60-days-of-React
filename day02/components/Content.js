import React, { Component } from "react";

export default class Content extends Component {
    render() {
        return (
            <section>
                <ol>
                    {this.props.items.map((item,index) => {
                        return <li key={index}>
                            <a href={item.link} target="_blank">
                                {item.text}
                            </a>
                        </li>
                    })}
                </ol>
            </section>
        )
    }
}