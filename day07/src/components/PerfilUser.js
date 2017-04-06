import React, { Component } from "react";
import { Col } from "react-bootstrap";

export default class PerfilUser extends Component {
    render() {
        return (
            <Col md={12}>
                <Col md={12}>
                    <h4>Dados básicos</h4>
                </Col>
                <Col md={4}>
                    <strong>Nome: </strong>{this.props.user.name}
                </Col>
                <Col md={4}>
                    <strong>Email: </strong>{this.props.user.username}
                </Col>
                <Col md={4}>
                    <strong>Telefone: </strong>{this.props.user.phone}
                </Col>

                <Col md={12}>
                    <h4>Endereço</h4>
                </Col>
                <Col md={4}>
                    <strong>Rua: </strong>{this.props.user.address.street}
                </Col>
                <Col md={4}>
                    <strong>Cidade: </strong>{this.props.user.address.city}
                </Col>
                <Col md={4}>
                    <strong>Zip Code: </strong>{this.props.user.address.zipcode}
                </Col>

                <Col md={12}>
                    <h4>Empresa</h4>
                </Col>
                <Col md={4}>
                    <strong>Empresa: </strong>{this.props.user.company.name}
                </Col>
                <Col md={4}>
                    <strong>Ramo: </strong>{this.props.user.company.catchPhrase}
                </Col>
                <Col md={4}>
                    <strong>Trabalho: </strong>{this.props.user.company.bs}
                </Col>

                <form>
                    <input type="text" />
                    <button className="btn btn-sm btn-info" type="submit">Enviar</button>
                </form>
            </Col>
        )
    }
}