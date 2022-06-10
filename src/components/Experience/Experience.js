import "./Experience.scss";
import React, { useState, useEffect } from "react";
import jobData from "../../data/jobData";
import { ImCheckmark2 } from "react-icons/im";

const Experience = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [experience, setExperience] = useState([jobData]);
  const [value, setValue] = useState(0);

  //   console.log(experience)
  useEffect(() => {
    if (experience) {
      setIsLoading(false);
    }
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const { title, dates, duties, compnay, id } = experience[0][value];
  //   console.log(title)

  return (
    <div className="exp">
      <div>
        <h2 className="exp__title">Exprience</h2>
        <div className="underline"></div>
      </div>
      <div className="exp__btn__wrapper">
        {experience[0].map((exp, index) => {
          return (
            <button
              className={`exp__btn ${index === value && "exp__btn__click"}`}
              onClick={() => setValue(index)}
            >
              {exp.company}
            </button>
          );
        })}
      </div>
      <div className="exp__job">
        <h3 className="exp__role">{title}</h3>
        <h4>{compnay}</h4>
        <p className="exp__date">{dates}</p>
        <div className="exp__duty__wrapper">
          {duties.map((duty) => {
            return (
              <div className="exp__duty">
                {/* <ImCheckmark2 className="exp__icon" /> */}
                <p className="exp__text">{duty}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Experience;
