import React from 'react';
import "./Footer.scss";
import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";
import email from "../../assets/email.svg";

const Footer = () => {
  return (
    <div className='footer__wrapper'>
        <ul>
           <li>
               HOME
           </li> 
           <li>
               PORTFOLIO
           </li> 
           <li>
               CONTACT ME
           </li> 
        </ul>
        <div className='footer__icon'>
            <img src={github}></img>
            <img src={email}></img>
            <img src={linkedin}></img>
        </div>
    </div>
  )
}

export default Footer