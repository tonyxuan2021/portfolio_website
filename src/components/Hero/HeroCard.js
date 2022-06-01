import React from "react";
import coding from "../../assets/coding.svg";
import calculator from "../../assets/calculator.svg";
import pet from "../../assets/pet.svg";
import "./HeroCard.scss";

const HeroCard = () => {
  return (
    <div>
      <div className="hero__card__wrapper">
        <img className="hero__card__img" src={coding} alt="coding icon"></img>
        <h3>Full Stack Web Developer</h3>
        <p>
          I enjoy building front-end web applications from scratch, I also like
          working with database.
        </p>
        <div className="hero__card__tools">
          <p>Dev tools in my tool kit:</p>
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
        <img className="hero__card__img" src={calculator} alt="calculator icon"></img>
        <h3>Accountant</h3>
        <p>
          I can read financial statements, and I understand Canadian taxation system.
        </p>
        <div className="hero__card__tools">
          <p>Financial knowledge in my tool kit:</p>
          <ul className="hero__card__list">
            <li>Financial accounting</li>
            <li>Canadian taxation</li>
            <li>Bookkeeping</li>
          </ul>
        </div>
      </div>
      <div className="hero__card__wrapper">
        <img className="hero__card__img" src={pet} alt="pets icon"></img>
        <h3>Pet Owner</h3>
        <p>
          I am a owner of a dog and a cat, and I enjoy playing with them.
        </p>
        <div className="hero__card__tools">
          <p>Pet supplies in my inventory:</p>
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
