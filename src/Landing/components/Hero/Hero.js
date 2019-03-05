import React, { Component } from 'react';
import { Carousel } from "react-responsive-carousel";
import './Hero.css'
import SanFrancisco from './san_francisco.jpg';
import NewYork from './new_york.jpg'
import Fuji from './fuji.jpg'
import Toronto from './toronto.jpg'
import Paris from './paris.jpg'

class Hero extends Component {
  render() {
      return (
          <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
              <div>
                  <img src={SanFrancisco} />
              </div>
              <div>
                  <img src={NewYork} />
              </div>
              <div>
                  <img src={Fuji} />
              </div>
              <div>
                  <img src={Toronto} />
              </div>
              <div>
                  <img src={Paris} />
              </div>
          </Carousel>
          
      );
  }
};

export default Hero;

