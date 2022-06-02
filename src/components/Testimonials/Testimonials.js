import React, { useState } from "react";
import "./Testimonials.scss";
import people from "../../data/data";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const { name, role, text, image } = people[index];

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
      <h3 className="test__title">Testimonials</h3>
      <img className="test__friend" src={image}></img>
      <blockquote className="test__quote">{text}</blockquote>
      <p className="test__name">{name}</p>
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
