import React, { Component } from "react";

import './sidebar.css';

export default class Sidebar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            menusOpened: []
        }

        this.onClickMenu = this.onClickMenu.bind(this);
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

    render() {
        const items = [
            {label: "Home", link: "/", submenu: []},
            {label: "About me", link: "", submenu: [
                {label: "GitHub", link:"https://github.com/henriquejensen"},
                {label: "Facebook", link: "https://facebook.com"}
            ]},
            {label: "Teste Menu", link: "", submenu: [
                {label: "subitem 1", link: "#"},
                {label: "subitem 2", link: "#"}
            ]},
        ]

        return (
            <ul className="mysidebar">
                {items.map((item, index) => {
                    return (
                        <li key={index}>
                            {!item.link ? 
                                <a onClick={() => this.onClickMenu(index)}> {item.label} </a>
                            : <a href={item.link}> {item.label} </a>}

                            {this.state.menusOpened.includes(index) ? 
                                <ul className="mysidebar-body">
                                    {item.submenu.map((subitem,j) => {
                                        return (
                                            <li key={j}>
                                                <a href={subitem.link} >{subitem.label} </a>
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