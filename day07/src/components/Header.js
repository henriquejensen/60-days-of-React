import React, { Component } from "react";
import { MenuItem, Nav, Navbar, NavDropdown, NavItem } from "react-bootstrap";
import { browserHistory } from 'react-router';

export default class Header extends Component {
    changeRoute(route){
		if(route == "/login") {
			this.props.logOut();
		}
		browserHistory.push(route);
	}
    
    render() {
        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <span onClick={() => this.changeRoute("/")}> Home</span>
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