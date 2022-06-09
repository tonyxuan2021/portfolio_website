import React, { useState } from "react";
import "./Testimonials.scss";
import people from "../../data/reviewData";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const { name, role, text, image } = people[index];
  const [readMore, setReadMore] = useState(false);

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  return (
    <div className="test__wrapper">
      <div>
        <h2 className="test__title">Testimonials</h2>
        <div className="underline"></div>
      </div>
      <img className="test__friend" src={image}></img>
      <blockquote className="test__quote">
        {readMore ? text : `${text.substring(0, 150)}...`}
        <button className="test__btn" onClick={() => setReadMore(!readMore)}>
          {readMore ? `show less` : `read more`}
        </button>
      </blockquote>
      <h3 className="test__name">{name}</h3>
      <p className="test__role">{role}</p>
      <div className="test__btn__container">
        <button className="test__prev-btn" onClick={prevPerson}>
          <FaChevronCircleLeft />
        </button>
        <button className="test__next-btn" onClick={nextPerson}>
          <FaChevronCircleRight />
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
