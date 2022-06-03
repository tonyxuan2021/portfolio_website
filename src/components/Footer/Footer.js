import React from "react";
import "./Footer.scss";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiTwotoneMail } from "react-icons/ai";

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
          <AiFillGithub className="footer__github"/>
        </a>
        <a href="https://www.linkedin.com/in/xuan-ye/">
          <AiFillLinkedin className="footer__linkedin"/>
        </a>
        <a href="mailto:tonyyexuan@gmail.com?Subject=Greetings!">
          <AiTwotoneMail className="footer__email"/>
        </a>
      </div>
    </div>
  );
};

export default Footer;
