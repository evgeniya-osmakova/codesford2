import React, {Suspense} from 'react';
import './Main.scss';
import reasons from './img/Reasons.png';
import service from './img/service.png';
import money from './img/Img_money.svg';
import Carousel from './Carousel.js';
import Map from './Map.js';
import Problems from './Problems.js';
import About from './About.js';
import Solution from './Solution.js';
import Business_model from './Business_model.js';
import Team_short from './Team_short.js';
import {useTranslation} from 'react-i18next';

function Main() {

  const { t, i18n } = useTranslation();

  return (
    <main>
      <div className="scroll-indicator" id="section01" data-scroll-indicator-title="Main"/>
      <Carousel />

      <About />
      <div className="scroll-indicator" id="section02" data-scroll-indicator-title="About"/>
      <Problems />
      <div className="scroll-indicator" id="section03" data-scroll-indicator-title="Solution"/>
      <Solution />
      <div className="scroll-indicator" id="section04" data-scroll-indicator-title="Price"/>

      <section className="price">
        <div className="container">
          <div className="text-center">
            <h3 className="price__subheader">{t('price.title')}</h3>
          </div>
          <div className="row align-items-center">
            <div className="col-md-6">
              <p className="price__description"><span className="text-primary">CodesFord</span> {t('price.text1')}</p>
              <p className="price__description font-weight-bold">{t('price.text2')}</p>
            </div>
            <div className="col-md-6">
              <img className="price__image" src={money} alt="money"/>
            </div>
          </div>
        </div>
      </section>


      <div className="scroll-indicator" id="section05" data-scroll-indicator-title="Codesford"/>

      <Business_model />


      <div className="scroll-indicator" id="section06" data-scroll-indicator-title="Reasons"/>


      <section className="reasons">
        <div className="container">
          <div className="text-center">
            <h3 className="reasons__subheader">{t('reasons.title')}</h3>
          </div>
          <div className="row align-items-center">
            <div className="col-md-6">
              <img className="reasons__image" src={reasons} alt="reasons"/>
            </div>
            <div className="col-md-6">
              <p className="reasons__description">{t('reasons.text')}</p>
            </div>
          </div>
        </div>
      </section>


      <div className="scroll-indicator" id="section07" data-scroll-indicator-title="Where you can use our service"/>


      <section className="where-use">
        <div className="container">
          <div className="text-center">
            <h3 className="where-use__subheader">{t('use.title')}</h3>
          </div>
          <div className="row align-items-center">
            <div className="col-md-6">
              <p className="where-use__description">{t('use.text1')}</p>
              <p className="where-use__description">{t('use.text2')}</p>
              <p className="where-use__description">{t('use.text3')}</p>
            </div>
            <div className="col-md-6">
              <img className="where-use__image" src={service} alt="service"/>
            </div>
          </div>
        </div>
      </section>


      <div className="scroll-indicator" id="section08" data-scroll-indicator-title="Refund Guaranteed"/>

      <section className="refund">
        <div className="container">
          <div className="text-center">
            <h3 className="refund__subheader">{t('refund.title')}</h3>
          </div>
          <div className="row align-items-center text-center">
            <div className="col-md-12">
              <p className="refund__description">{t('refund.text')}</p>
            </div>
          </div>
        </div>
      </section>

      <div className="scroll-indicator" id="section09" data-scroll-indicator-title="Team"/>

      <Team_short />

      <div className="scroll-indicator" id="section10" data-scroll-indicator-title="Contacts"/>

      <Map />
    </main>
  );
}

export default Main;
