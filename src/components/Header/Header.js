import "./Header.scss";

import React, { Component } from "react";

class Header extends Component {
  state = {
    isActive: false,
  };

  handleToggle = (e) => {
    e.preventDefault();
    this.setState({
      isActive: !this.state.isActive,
    });
  };

  render() {
    const isActive = this.state.isActive;

    return (
      <div className="header__wrapper">
        <p>tony.me</p>
        <div className="header__nav">
          <a
            href="/#"
            className="header__toggle__btn"
            onClick={this.handleToggle}
          >
            <span className="header__bar"></span>
            <span className="header__bar"></span>
            <span className="header__bar"></span>
          </a>

          {isActive && <ul>
            <li>
              <a href="/#">Portfolio</a>
            </li>
            <li>
              <a href="/#">About me</a>
            </li>
            <li>
              <a href="/#">Contact me</a>
            </li>
          </ul>}
        </div>
      </div>
    );
  }
}

export default Header;
