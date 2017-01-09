import React, { Component } from "react";
import { Link } from "react-router";

export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <h2>Dashboard</h2>

                <Link to="/questions">Começar</Link>
            </div>
        )
    }
}