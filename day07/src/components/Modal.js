import React, { Component } from "react";
import { Modal, Row } from "react-bootstrap";

class MyModal extends Component {
    render() {
        return (
          <Modal
            show={this.props.IsModalOpen}
            onHide={this.props.closeModal}
            bsSize={this.props.size ? this.props.size : undefined } >
            <Modal.Header closeButton>
              <Modal.Title>{this.props.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Row>{this.props.children}</Row>
            </Modal.Body>
            {this.props.footer ?
              <Modal.Footer>
                  {this.props.footer}
              </Modal.Footer>
            : ""}
          </Modal>
        )
    }
}

export default MyModal;