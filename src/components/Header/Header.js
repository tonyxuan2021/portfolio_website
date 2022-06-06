import "./Header.scss";

import React, { Component } from "react";
import { Link } from "react-router-dom";

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
        <Link to="/" className="header__address">
          xuanye.ca
        </Link>
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

          <div
            className={`${
              isActive ? "header__link header__link--show" : "header__link"
            }`}
          >
            <ul className="header__link__tablet">
              <li>
                <a href="/#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="/#contact">Contact me</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
