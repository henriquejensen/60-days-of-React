import React, { Component } from "react";
import superagent from "superagent";
import { Col, Row, Table } from "react-bootstrap";

import Modal from "../components/Modal";
import PerfilUser from "../components/PerfilUser";

import { URL_GET_USERS } from "../constants";

export default class Users extends Component {
    state = {
        usuarios: [],
        isModalOpened: false,
        user: ""
    }

    componentWillMount() {
        superagent.get(URL_GET_USERS)
            .end((error, response) => {
                if (response) {
                    if (response.status === 200) {
                        this.setState({
                            usuarios: response.body
                        })
                    }
                }
            })
    }

    closeModal = () => {
        this.setState({
            isModalOpened: false
        })
    }

    openUser = (user) => {
        this.setState({
            isModalOpened: true,
            user: user
        })
    }

    render() {
        return (
            <Row>
                <Col md={12}>
                    <table>
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Username</th>
                        </tr>
                        </thead>
                        <tbody>
                            {this.state.usuarios.map((user) => {
                                return (
                                    <tr key={user.id} onClick={() => this.openUser(user)}>
                                        <td>{user.id}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.username}</td>
                                    </tr>
                                )
                            })}

                        </tbody>
                    </table>
                </Col>

                <Modal
                    IsModalOpen={this.state.isModalOpened}
                    closeModal={this.closeModal}
                    title={"Perfil do usuario " + this.state.user.name}
                >
                    <PerfilUser user={this.state.user} />
                </Modal>
            </Row>
        )
    }
}