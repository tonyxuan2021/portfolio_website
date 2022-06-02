import React from "react";
import "./Footer.scss";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";
import email from "../../assets/email.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer__wrapper">
      <ul className="footer__list">
        <li>HOME</li>
        <li>PORTFOLIO</li>
        <li>CONTACT ME</li>
      </ul>
      <div className="footer__icon">
        <a href="https://github.com/tonyxuan2021">
          <img src={github}></img>
        </a>
        <a href="https://www.linkedin.com/in/xuan-ye/">
          <img src={linkedin}></img>
        </a>
        <a href="mailto:tonyyexuan@gmail.com?Subject=Greetings!">
          <img src={email}></img>
        </a>
      </div>
    </div>
  );
};

export default Footer;
