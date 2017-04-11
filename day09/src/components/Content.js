import React, { Component } from "react";

class Content extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.props.frases.map((frase, index) => {
                        return (
                            <div className="col-sm-4 text-center">
                                <h3>Frase {index+1}</h3>
                                <p>{frase}</p>
                            </div>
                        )
                    })}

                </div>
            </div>
        )
    }
}

export default Content;