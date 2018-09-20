import React from "react";
import { Menu } from "semantic-ui-react";
import "./Header.css";

class Header extends React.Component {
  state = {
    currentTab: "Home"
  };

  changeTab(e, { name }) {
    this.setState({ currentTab: name });
  }

  render() {
    return (
      <header>
        <Menu>
          <Menu.Item
            name="Home"
            active={this.state.currentTab === "Home"}
            onClick={this.changeTab.bind(this)}
          >
            Home
          </Menu.Item>
          <Menu.Item
            name="Nosotros"
            active={this.state.currentTab === "Nosotros"}
            onClick={this.changeTab.bind(this)}
          >
            Nosotros
          </Menu.Item>
          <Menu.Item
            name="FAQ"
            active={this.state.currentTab === "FAQ"}
            onClick={this.changeTab.bind(this)}
          >
            FAQ
          </Menu.Item>
        </Menu>
      </header>
    );
  }
}

export default Header;
