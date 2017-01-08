import React, { Component } from "react";
import { Link } from "react-router";

import './sidebar.css';

export default class Sidebar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            menusOpened: []
        }

        this.onClickMenu = this.onClickMenu.bind(this);
        this.menuHambuguerClick = this.menuHambuguerClick.bind(this);
    }

    onClickMenu(key) {
        if(this.state.menusOpened.includes(key)) {
            let newMenu = this.state.menusOpened.concat();
            newMenu.pop(key);

            return this.setState({
                menusOpened: newMenu
            })
        }

        this.setState({
            menusOpened: this.state.menusOpened.concat(key)
        })
    }

    menuHambuguerClick() {
        if(this.state.menusOpened.length > 0 ) {
            this.setState({
                menusOpened: []
            })
        }

        this.props.menuHambuguerClick();
    }

    render() {
        return (
            <ul className={this.props.isSidebarOpened ? "mysidebar" : "mysidebar margin-left-sidebar"}>

                <i className="fa fa-bars" aria-hidden="true" onClick={this.menuHambuguerClick}></i>
                
                <img src="http://www.expovaleab.com.br/images/facebook.png" width="100%" />

                {this.props.items.map((item, index) => {
                    return (
                        <li key={index}>

                            {item.submenu.length > 0 ?
                                this.state.menusOpened.includes(index) ?
                                    <i className="fa fa-arrow-up mysidebar-icon"/>
                                : <i className="fa fa-arrow-down mysidebar-icon"/>
                            : <i className={item.icon}/>}

                            {!item.link ? 
                                <a onClick={() => this.onClickMenu(index)}> {item.label} </a>
                            : <Link to={item.link}> {item.label} </Link>}

                            {this.state.menusOpened.includes(index) ? 
                                <ul className="mysidebar-body">
                                    {item.submenu.map((subitem,j) => {
                                        return (
                                            <li key={j}>
                                                <Link to={subitem.link} >{subitem.label} </Link>
                                            </li>
                                        )
                                    })}                                  
                                </ul>
                            : ""}
                        </li>
                    )
                })}
            </ul>
        )
    }
}