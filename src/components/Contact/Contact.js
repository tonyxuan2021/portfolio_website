import React from "react";
import emailjs from "@emailjs/browser";
import "./Contact.scss";

const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY


const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_zczp6la",
        "template_kwcpqsd",
        e.target,
        publicKey
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="contact__wrapper">
      <h2 className="contact__title" id="contact">Get in touch</h2>
      <form className="contact__form" onSubmit={sendEmail}>
        <div className="contact__input__wrapper--top">
          <div className="contact__input__wrapper">
            <label htmlFor="name">NAME</label>
            <input id="name" name="name" className="contact__input"></input>
          </div>
          <div className="contact__input__wrapper">
            <label htmlFor="email">EMAIL</label>
            <input id="email" name="email" className="contact__input"></input>
          </div>
        </div>
        <div className="contact__input__wrapper">
          <label htmlFor="message">MESSAGE</label>
          <textarea
            id="message"
            name="message"
            className="contact__input"
          ></textarea>
        </div>
        <button className="contact__btn">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
