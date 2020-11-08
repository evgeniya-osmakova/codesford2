import React from 'react';
import './Carousel.scss';
import {Carousel} from 'react-bootstrap';
import {useTranslation} from 'react-i18next';

function Carousel1() {
  const { t, i18n } = useTranslation();

  return (

      <Carousel className="carouselBlock">
          <Carousel.Item>
            <div className="d-block w-100 carousel-item-img slide1"/>
            <Carousel.Caption>
              <div className="carousel-caption">
                <h1 className="carousel-caption__title">{t('carousel.slide1')}</h1>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

        <Carousel.Item>
          <div className="d-block w-100 carousel-item-img slide2"/>
          <Carousel.Caption>
            <div className="carousel-caption">
              <h1 className="carousel-caption__title">{t('carousel.slide2')}</h1>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <div className="d-block w-100 carousel-item-img slide3"/>
          <Carousel.Caption>
            <div className="carousel-caption">
              <h1 className="carousel-caption__title">{t('carousel.slide3')}</h1>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <div className="d-block w-100 carousel-item-img slide4"/>
          <Carousel.Caption>
            <div className="carousel-caption">
              <h1 className="carousel-caption__title">{t('carousel.slide4')}</h1>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <div className="d-block w-100 carousel-item-img slide5"/>
          <Carousel.Caption>
            <div className="carousel-caption">
              <h1 className="carousel-caption__title">{t('carousel.slide5')}</h1>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <div className="d-block w-100 carousel-item-img slide6"/>
          <Carousel.Caption>
            <div className="carousel-caption">
              <h1 className="carousel-caption__title">{t('carousel.slide6')}</h1>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
  );
}

export default Carousel1;
