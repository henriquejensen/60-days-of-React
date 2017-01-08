import React, { Component } from "react";

import './sidebar.css';

export default class Sidebar extends Component {
    state = {
        isMenuOpen: false
    }

    render() {
        return (
            <ul className="mysidebar">
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a onClick={() => this.setState({isMenuOpen: !this.state.isMenuOpen})}>About me</a>
                    {this.state.isMenuOpen ?
                        <ul className="mysidebar-body">
                            <li><a href="/">Gihub</a>
                            </li>
                            <li><a href="/">Facebook</a>
                            </li>
                        </ul>
                    : ""}
                </li>
                <li>
                    <a onClick={() => this.setState({isMenuOpen: !this.state.isMenuOpen})}>About me</a>
                    {this.state.isMenuOpen ?
                        <ul className="mysidebar-body">
                            <li><a href="/">Gihub</a>
                            </li>
                            <li><a href="/">Facebook</a>
                            </li>
                        </ul>
                    : ""}
                </li>
            </ul>
        )
    }
}