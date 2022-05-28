import "./Portfolio.scss";
import React from 'react';
import landingPage from "../../assets/landing_page.png";

const Portfolio = () => {
  return (
    <div className="portfolio">
        <h3 className="portfolio__header">My Recent Work</h3>
        <div className="portfolio__wrapper">
            <div className="portfolio__individual">
                <div className="portfolio__img__wrapper">
                    <img src={landingPage} className="portfolio__img"></img>
                </div>
                <div className="portfolio__text__wrapper">
                    <h4>The Booktown</h4>
                    <p>This is a book app</p>
                    <p>Author</p>
                    <div>
                        <a>Visit site</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Portfolio