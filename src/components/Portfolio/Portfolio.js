import "./Portfolio.scss";
import React, { useState } from "react";
import book from "../../assets/booktown.jpg";
import portfolioData from "../../data/portfolioData";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <h3 className="portfolio__header" id="portfolio">
        My Recent Work
      </h3>
      <div className="portfolio__img__individual">
        {portfolioData && portfolioData.map((dataObj) => {
          return (
            <div>
              <h3 className="portfolio__title">The Booktown</h3>
              <img className="portfolio__img" src={dataObj.image}></img>
              <div className="portfolio__overlay portfolio__overlay--background">
                <p className="portfolio__overlay__text">
                  A web application to buy and sell books
                </p>
                <a
                  className="portfolio__overlay__link"
                  href="https://www.google.com/"
                >
                  Visit Website
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
