import React, { Component } from "react";

export default class User extends Component {
    render() {
        return (
            <div className="col-md-3">
                <div className="card">

                    <img className="img-fluid" src={this.props.user.avatar_url} alt="Github user image" width="100%" />

                    <div className="card-block">
                        <h4 className="card-title">{this.props.user.name}</h4>
                        <p className="card-text">
                            ID: {this.props.user.id}
                        </p>
                        <p className="card-text">
                            GihubRepo: <a href={this.props.user.html_url} target="_blank">repository</a>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}