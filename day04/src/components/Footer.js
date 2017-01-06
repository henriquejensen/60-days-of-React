import React, { Component } from "react";

export default class Footer extends Component {
    render() {
        return (
            <footer className="page-footer blue center-on-small-only">
                <div className="footer-copyright">
                    <div className="container-fluid">
                        © 2017 Copyright: <a href={this.props.link}> {this.props.name} </a>

                    </div>
                </div>
            </footer>
        )
    }
}