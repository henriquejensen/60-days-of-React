import React, { Component } from "react";
import superagent from "superagent";
import { Col, Panel, Row } from "react-bootstrap";

import Bar from "../components/Bar";

import { URL_GET_USERS, URL_GET_PHOTOS } from "../constants";

export default class Welcome extends Component {
    state = {
        usuarios: [],
        fotos: [],
        isModalOpened: false,
        user: ""
    }

    api = (url, name) => {
        superagent.get(url)
            .end((error, response) => {
                if (response) {
                    if (response.status === 200) {
                        this.setState({
                            [name]: response.body
                        })
                    }
                }
            })
    }

    componentWillMount() {
        this.api(URL_GET_USERS, "usuarios");
        this.api(URL_GET_PHOTOS, "fotos");
    }

    render() {
        return (
            <div>
                <h2>Bem vindo ao Dashboard</h2>

                <Col md={6}>
                    <Panel header="Quantidade de usuários">
                        <Col md={12} className="text-center">
                            <strong>Usuários: </strong> {this.state.usuarios.length}
                        </Col>
                    </Panel>
                </Col>
                <Col md={6}>
                    <Panel header="Quantidade de fotos">
                        <Col md={12} className="text-center">
                            <strong>Fotos: </strong> {this.state.fotos.length}
                        </Col>
                    </Panel>
                </Col>

                <Col md={4}>
                    <Bar title="Usuarios" />
                </Col>
                <Col md={4}>
                    <Bar title="Fotos" />
                </Col>
                <Col md={4} >
                    <Bar title="Consumo" />
                </Col>
            </div>
        )
    }
}