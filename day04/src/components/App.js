import React, { Component } from "react";

import Menu from "./Menu";
import Content from "../containers/Content";
import Footer from "./Footer";

export default class App extends Component {
    render() {
        return (
            <div>
                {/*Renderizando o component menu e passando para ele uma array de nome items com dois objetos que serão mostrados como o menu*/}
                <Menu items={[
                    {label: "Home", link:"/"},
                    {label:"Project Source", link:"https://github.com/henriquejensen/60-days-of-React"}
                ]}/>

                <Content />

                <Footer 
                    link="https://github.com/henriquejensen"
                    name="Henrique Jensen" />
            </div>
        )
    }
}