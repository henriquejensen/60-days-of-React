import React, { Component } from "react";
import superagent from "superagent";
import { Col, Panel, Row } from "react-bootstrap";

import Modal from "../components/Modal";

import { URL_GET_PHOTOS } from "../constants";

export default class Photos extends Component {
    state = {
        photos: [],
        isModalOpened: false,
        image: ""
    }

    closeModal = () => {
        this.setState({
            isModalOpened: false
        })
    }

    openImage = (image) => {
        this.setState({
            isModalOpened: true,
            image: image
        })
    }

    componentWillMount() {
        superagent.get(URL_GET_PHOTOS)
            .end((error, response) => {
                if (response) {
                    if (response.status === 200) {
                        this.setState({
                            photos: response.body
                        })
                    }
                }
            })
    }

    render() {
        console.log("PHTONS", this.state.photos)
        return (
            <Row>
                <Col md={12}>
                    {this.state.photos.slice(0,20).map((photo) => {
                        return (
                            <Col md={4} style={{paddingBottom:15}}>
                                <Panel header={photo.title}>
                                    <Col md={12}>
                                        Imagem: <a onClick={() => this.openImage(photo.url)}>{photo.url} </a>
                                    </Col>
                                    <Col md={12}>
                                        Thumbnail: <a onClick={() => this.openImage(photo.thumbnailUrl)}>{photo.url} </a>
                                    </Col>
                                </Panel>
                            </Col>
                        )
                    })}

                </Col>

                <Modal
                    IsModalOpen={this.state.isModalOpened}
                    closeModal={this.closeModal}
                    title="FOTO"
                >
                    <img src={this.state.image} style={{width:"100%", height:"100%"}} />
                </Modal>
            </Row>
        )
    }
}