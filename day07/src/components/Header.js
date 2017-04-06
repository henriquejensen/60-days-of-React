import React, { Component } from "react";
import { MenuItem, Nav, Navbar, NavDropdown, NavItem, FormControl, FormGroup, Button } from "react-bootstrap";
import { browserHistory } from 'react-router';

export default class Header extends Component {
    state = {

    }
    
    changeRoute(route){
		if(route == "/login") {
			this.props.logOut();
		}
		browserHistory.push(route);
	}

  mudarTitulo = (evento) => {
    this.setState({
      title: evento.target.value
    })
  }
    
    render() {
        console.log("aproo")
        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <span onClick={() => this.changeRoute("/")}> {this.props.titulo}</span>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>

                <Navbar.Collapse>

                    <Nav pullRight>
                        <NavItem eventKey={1} onClick={() => this.changeRoute("/usuarios")} >Usuários</NavItem>
                        <NavItem eventKey={2} onClick={() => this.changeRoute("/fotos")} >Fotos</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}