
import React from 'react'
import "./Hero.scss";

const Hero = () => {
  return (
    <div className='hero__wrapper'>
        <h1 className='hero__title'>Full Stack Developer</h1>
        <p className='hero__text'>Welcome! My name is Tony Ye, I am a Web Development Bootcamp graduate loacted in Vancouver, Canada, and I am currently making a career transition from an accountant to a full stack web developer. Beside coding, I enjoy gardening and playing with my pets. If you are a business looking to hire, contact me <a href='#contact'>here</a>.</p>
        <a className='hero__btn'>HIRE ME</a>
    </div>
  )
}

export default Hero