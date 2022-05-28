
import React, { Component } from 'react'
import Hero from '../components/Hero/Hero';
import Portfolio from '../components/Portfolio/Portfolio';

class HomePage extends Component {
  render() {
    return (
      <div>
          <Hero />
          <Portfolio />
      </div>
    )
  }
}


export default HomePage;