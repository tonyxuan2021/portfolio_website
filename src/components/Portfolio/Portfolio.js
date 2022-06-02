import "./Portfolio.scss";
import React from "react";
import book from "../../assets/booktown.jpg";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <h3 className="portfolio__header">My Recent Work</h3>
      <div className="portfolio__img__wrapper">
        <div className="portfolio__img__individual">
        <h3 className="portfolio__title">The Booktown</h3>
          <img className="portfolio__img" src={book}></img>
          <div className="portfolio__overlay portfolio__overlay--background">
            <p className="portfolio__overlay__text">
              A web application to buy and sell books
            </p>
            <a className="portfolio__overlay__link" href="https://www.google.com/">Visit Website</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
