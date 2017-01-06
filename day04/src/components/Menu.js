import React, { Component } from "react";

export default class Menu extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-primary">

                <button className="navbar-toggler hidden-sm-up" type="button" data-toggle="collapse" data-target="#collapseEx2">
                    <i className="fa fa-bars"></i>
                </button>

                <div className="container">
                    <div className="collapse navbar-toggleable-xs" id="collapseEx2">
                        <a className="navbar-brand">GitHub Profiles Example</a>
                        <ul className="nav navbar-nav">
                            {this.props.items.map((item, index) => {
                                return <li className="nav-item">
                                        <a className="nav-link" href={item.link} key={index}>{item.label}</a>
                                    </li>
                            })}
                        </ul>
                    </div>

                </div>

            </nav>
        )
    }
}