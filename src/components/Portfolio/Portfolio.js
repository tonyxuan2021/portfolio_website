import "./Portfolio.scss";
import React, { useState } from "react";
import portfolioData from "../../data/portfolioData";
import uniqid from "uniqid";


const Portfolio = () => {
  return (
    <div className="portfolio">
      <h3 className="portfolio__header" id="portfolio">
        My Recent Work
      </h3>
      <div >
        {portfolioData && portfolioData.map((dataObj) => {
          return (
            <div className="portfolio__img__individual" key={uniqid()}>
              <h3 className="portfolio__title">{dataObj.title}</h3>
              <img className="portfolio__img" src={dataObj.image}></img>
              <div className="portfolio__overlay portfolio__overlay--background">
                <p className="portfolio__overlay__text">
                  {dataObj.desc}
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
