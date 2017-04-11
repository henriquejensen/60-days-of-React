import React, { Component } from "react";

import Banner from "../components/Banner";
import Content from "../components/Content";

export default class App extends Component {
    state = {
        frases: []
    }

    onSubmitNewFrase = (newFrase) => {
        this.setState({
            frases: this.state.frases.concat(newFrase)
        })
    }

    render() {
        return (
            <section>
                <Banner onSubmitNewFrase={this.onSubmitNewFrase} />
                <Content frases={this.state.frases} />
            </section>
        )
    }
}
