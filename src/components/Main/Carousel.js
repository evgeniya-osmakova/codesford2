import React from 'react';
import './Carousel.scss';
import slide1 from './img/s1.jpg';
import slide2 from './img/s2.jpg';
import slide3 from './img/s3.jpg';
import slide4 from './img/s4.jpg';
import slide5 from './img/s5.jpg';
import slide6 from './img/s6.jpg';
import {Carousel} from 'react-bootstrap';

function Carousel1() {
  return (
    <Carousel className="carousel">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide1}
          alt="First slide"
        />
        <Carousel.Caption>
          <div className="carousel-caption">
            <h1 className="carousel-caption__title"> It is the best time to learn coding from scratch!</h1>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide2}
          alt="Third slide"
        />
        <Carousel.Caption>
          <div className="carousel-caption">
            <h1 className="carousel-item__title">On our website you can teach or learn</h1>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <div className="carousel-caption">
            <h1 className="carousel-caption__title">On our website you can set the price for the desired course</h1>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide4}
          alt="First slide"
        />
        <Carousel.Caption>
          <div className="carousel-caption">
            <h1 className="carousel-caption__title">On our website you can play educational games</h1>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide5}
          alt="First slide"
        />
        <Carousel.Caption>
          <div className="carousel-caption">
            <h1 className="carousel-caption__title">On our website you can find a job or give a job</h1>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide6}
          alt="First slide"
        />
        <Carousel.Caption>
          <div className="carousel-caption">
            <h1 className="carousel-caption__title">Ability to work and get educated</h1>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousel1;
