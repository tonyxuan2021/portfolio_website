
import React, { Component } from 'react'
import Hero from '../components/Hero/Hero';
import HeroCard from '../components/Hero/HeroCard';
import Portfolio from '../components/Portfolio/Portfolio';

class HomePage extends Component {
  render() {
    return (
      <div>
          <Hero />
          <HeroCard />
          <Portfolio />
      </div>
    )
  }
}


export default HomePage;