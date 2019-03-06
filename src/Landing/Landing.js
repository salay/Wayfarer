import React, { Component } from 'react';
import Nav from './components/Nav/Nav'
import About from './components/About/About'
import Hero from './components/Hero/Hero'
import Footer from './components/Footer/Footer'
import "react-responsive-carousel/lib/styles/carousel.min.css";


class Landing extends Component {
    render() {
      return (
        <div>
            <Nav />
            <Hero />
            <About />
            <Footer />
        </div>
      );
    }
  }
  
  export default Landing;
  