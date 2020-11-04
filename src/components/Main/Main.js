import React from 'react';
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


function Main() {

  return (
    <body>
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
            <h3 className="price__subheader">You can set the desired price</h3>
          </div>
          <div className="row align-items-center">
            <div className="col-md-6">
              <p className="price__description"><span className="text-primary">CodesFord</span> is an educational and
                gaming project where you can study technology to find a developer's job. Have you long dreamed of
                getting an education at Oxford level?!</p>
              <p className="price__description font-weight-bold">If you want not to learn, but to teach other people,
                then we can place your course on our marketplace.</p>
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
            <h3 className="reasons__subheader">The Reasons to choose Our Expert Services</h3>
          </div>
          <div className="row align-items-center">
            <div className="col-md-6">
              <img className="reasons__image" src={reasons} alt="reasons"/>
            </div>
            <div className="col-md-6">
              <p className="reasons__description">Our team understands that we have competitors. There are other sites
                where you can study programming.
                But there you cannot ask for your tuition price. They tell you the price. There are many IT enthusiasts
                who would like to start some IT trainings, demanding their price.
                At the same time, there are also many experienced developers and teachers who would like to earn extra
                money, but do not know how much their IT development course can cost.
                Our marketplace helps junior developers to set the desired price for studying in programming courses</p>
            </div>
          </div>
        </div>
      </section>


      <div className="scroll-indicator" id="section07" data-scroll-indicator-title="Where you can use our service"/>


      <section className="where-use">
        <div className="container">
          <div className="text-center">
            <h3 className="where-use__subheader">Where you can use our service</h3>
          </div>
          <div className="row align-items-center">
            <div className="col-md-6">
              <p className="where-use__description">If you want to study Computer Science at Oxford, then it is long and
                expensive.
                But in the modern world there are projects that allow you to get knowledge at a decent level. Surely, at
                a sufficient level for your employment in a sustainable company, where you will have a good salary.
                Or, having sufficient knowledge, you can develop your own business project.</p>
              <p className="where-use__description">If it doesn’t matter to you that the building in which you study is
                not like
                Hogwarts, and if you do not
                want to leave your relatives and friends for years, then you can study from home or from any place where
                there is Internet and your device with Internet (laptop or smartphone). You do not have to spend tens or
                even hundreds of thousands of dollars to study at the university. You can get the necessary knowledge
                from
                the field of Computer Science for a lower budget. Moreover, you now have the opportunity to demand your
                desired price for a particular course. For example, if you want to take an introductory IT course, then
                this
                can be an absolutely reasonable price. Or, if you want to study web development in more depth, it can
                cost
                more, but still not tens or hundreds of thousands of dollars.
                Nowadays, any person from any city in the world has the opportunity to remotely study on a convenient
                schedule in a short time at an affordable price.</p>
              <p className="where-use__description">If you want not to study, but to teach, then our project gives you
                the opportunity
                to transfer your
                knowledge in an interactive way. Thus, you can earn money, being anywhere in the world.</p>
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
            <h3 className="refund__subheader">Refund Guaranteed</h3>
          </div>
          <div className="row align-items-center text-center">
            <div className="col-md-12">
              <p className="refund__description">If you do not like the course, then you can always send a request for a
                refund.
                All funds for the course, excluding the service fee and transfer fee, will be returned to your bank
                card</p>
            </div>
          </div>
        </div>
      </section>

      <div className="scroll-indicator" id="section09" data-scroll-indicator-title="Team"/>

      <Team_short />

      <div className="scroll-indicator" id="section10" data-scroll-indicator-title="Contacts"/>

      <Map />
    </body>
  );
}

export default Main;
