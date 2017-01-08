import React, { Component } from 'react';

import Sidebar from "../sidebar/Sidebar";
import './App.css';

class App extends Component {
  state = {
    isSidebarOpened: false
  }

  menuHambuguerClick() {
    this.setState({
      isSidebarOpened: !this.state.isSidebarOpened
    })
  }

  render() {
    const items = [
        {label: "Home", link: "/", icon: "fa fa-home mysidebar-icon", submenu: []},
        {label: "Teste Menu 2", link: "", submenu: [
            {label: "item 1", link: "/item-1"},
            {label: "item 2", link: "item-2"}
        ]},
        {label: "About me", link: "", submenu: [
            {label: "GitHub", link:"https://github.com/henriquejensen"},
            {label: "Facebook", link: "https://facebook.com"}
        ]}
    ]
    return (
      <div className="App">
        <div className={this.state.isSidebarOpened ? "App-header" : "App-header margin-left-app-header"}>
          <h2>Welcome to my house <i className="fa fa-home" /> </h2>
        </div>

        <Sidebar
          items = {items}
          isSidebarOpened={this.state.isSidebarOpened}
          menuHambuguerClick={this.menuHambuguerClick.bind(this)}
        />

        <div className={this.state.isSidebarOpened ? "app-content" : "app-content margin-left-app-header"}>
          {this.props.children}
        </div>

      </div>
    );
  }
}

export default App;
