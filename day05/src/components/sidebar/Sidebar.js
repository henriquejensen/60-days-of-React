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
            {label: "Home", link: "/", icon: "fa fa-home", submenu: []},
            {label: "About me", link: "", submenu: [
                {label: "GitHub", link:"https://github.com/henriquejensen"},
                {label: "Facebook", link: "https://facebook.com"}
            ]},
            {label: "Teste Menu 2", link: "", submenu: [
                {label: "subitem 1", link: "#"},
                {label: "subitem 2", link: "#"}
            ]},
        ]

        return (
            <ul className="mysidebar">
            
                <img src="http://www.expovaleab.com.br/images/facebook.png" width="100%" />

                {items.map((item, index) => {
                    return (
                        <li key={index}>

                            {item.submenu.length > 0 ?
                                this.state.menusOpened.includes(index) ?
                                    <i className="fa fa-arrow-up"/>
                                : <i className="fa fa-arrow-down"/>
                            : <i className={item.icon}/>}

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