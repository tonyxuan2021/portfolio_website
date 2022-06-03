
import React, { Component } from 'react'
import Contact from '../components/Contact/Contact';
import Hero from '../components/Hero/Hero';
import HeroCard from '../components/Hero/HeroCard';
import Portfolio from '../components/Portfolio/Portfolio';
import Testimonials from '../components/Testimonials/Testimonials';

class HomePage extends Component {
  render() {
    return (
      <div>
          <Hero />
          <HeroCard />
          <Portfolio />
          <Testimonials />
          <Contact />
      </div>
    )
  }
}


export default HomePage;