import React from "react";
import coding from "../../assets/coding.svg";
import calculator from "../../assets/calculator.svg";
import pet from "../../assets/pet.svg";
import "./HeroCard.scss";
import { AiOutlineCode } from "react-icons/ai";
import { AiFillCalculator } from "react-icons/ai";
import { MdPets } from "react-icons/md";



const HeroCard = () => {
  return (
    <div>
      <div className="hero__card__wrapper">
        <AiOutlineCode className="hero__card__img"/>
        <h3 className="hero__card__title">Full Stack Web Developer</h3>
        <p className="hero__card__text">
          I enjoy building front-end web applications from scratch, I also like
          working with database.
        </p>
        <div className="hero__card__tools">
          <p className="hero__card__kit">Dev tools in my tool kit</p>
          <ul className="hero__card__list">
            <li>React</li>
            <li>JavaScript</li>
            <li>Node.js</li>
            <li>CSS</li>
            <li>Sass</li>
            <li>MySQL</li>
            <li>Git/Github</li>
            <li>Web APIs</li>
            <li>User Authentication</li>
            <li>OAuth</li>
            <li>Heroku</li>
            <li>HTML</li>
          </ul>
        </div>
      </div>
      <div className="hero__card__wrapper">
        <AiFillCalculator className="hero__card__img"/>
        <h3 className="hero__card__title">Accountant</h3>
        <p className="hero__card__text">
          I can read financial statements, and I understand Canadian taxation
          system.
        </p>
        <div className="hero__card__tools">
          <p className="hero__card__kit">Financial knowledge in my tool kit</p>
          <ul className="hero__card__list">
            <li>Bookkeeping</li>
            <li>Canadian taxation</li>
            <li>Financial accounting</li>
          </ul>
        </div>
      </div>
      <div className="hero__card__wrapper">
        <MdPets className="hero__card__img"/>
        <h3 className="hero__card__title">Pet Owner</h3>
        <p className="hero__card__text">
          I am a owner of a dog and a cat, and I enjoy playing with them.
        </p>
        <div className="hero__card__tools">
          <p className="hero__card__kit">Pet supplies in my inventory</p>
          <ul className="hero__card__list">
            <li>INSTINCT&reg; RAW BOOST MEAL&reg;</li>
            <li>Inaba Churu Creamy Puree Cat Treat - Chicken/Tuna</li>
            <li>Arm & Hammer AbsorbX Cat Litter</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
