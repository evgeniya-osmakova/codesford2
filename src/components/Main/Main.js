import React from 'react';
import Iframe from 'react-iframe'
import '../Header_and_Footer/1.scss';
import { Link, BrowserRouter, Switch, Route} from 'react-router-dom';
import alesya from './img/team/Alesya.png';
import evgeniy from './img/team/evgeniy.png';
import evgeniya from './img/team/evgeniya.png';
import jane from './img/team/jane.png';
import marie from './img/team/marie.jpg';
import maxim from './img/team/maxim.png';
import oleg from './img/team/oleg.jpg';
import vika from './img/team/vika.png';
import business_model from './img/Business-model_svg.png';
import reasons from './img/Reasons.png';
import service from './img/service.png';
import solving2 from './img/solving2.png';
import solving3 from './img/solving3.png';
import solving4 from './img/solving4.png';
import solving1 from './img/solving1.png';
import solving7 from './img/solving7.png';
import money from './img/Img_money.png';

function Main() {

  return (
    <>
      <header className="header">
        <div className="header__content">
          <div id="carouselExampleCaptions" className="header__carousel carousel slide" data-ride="carousel">
            <ol className="header__carousel-indicators carousel-indicators">
              <li data-target="#carouselExampleCaptions" data-slide-to="0" className=""/>
              <li data-target="#carouselExampleCaptions" data-slide-to="1" className=""/>
              <li data-target="#carouselExampleCaptions" data-slide-to="2" className=""/>
              <li data-target="#carouselExampleCaptions" data-slide-to="3" className=""/>
              <li data-target="#carouselExampleCaptions" data-slide-to="4" className="active"/>
              <li data-target="#carouselExampleCaptions" data-slide-to="5" className=""/>
            </ol>
            <div className="carousel-inner">
              <div className="header__content-slide header__content--first-slide carousel-item">
                <div className="carousel-item__text text-center">
                  <h1>It is the best time to learn coding from scratch!</h1>
                </div>
              </div>
              <div className="header__content-slide header__content--second-slide carousel-item">
                <div className="carousel-item__text text-center">
                  <h2 className="h1">On our website you can teach or learn</h2>
                </div>
              </div>
              <div className="header__content-slide header__content--third-slide carousel-item">
                <div className="carousel-item__text text-center">
                  <h2 className="h1">On our website you can set the price for the desired course</h2>
                </div>
              </div>
              <div className="header__content-slide header__content--fourth-slide carousel-item">
                <div className="carousel-item__text text-center">
                  <h2 className="h1">On our website you can play educational games</h2>
                </div>
              </div>
              <div className="header__content-slide header__content--fifth-slide carousel-item active">
                <div className="carousel-item__text text-center">
                  <h2 className="h1">On our website you can find a job or give a job</h2>
                </div>
              </div>
              <div className="header__content-slide header__content--sixth-slide carousel-item">
                <div className="carousel-item__text text-center">
                  <h2 className="h1">Ability to work and get educated</h2>
                </div>
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"/>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"/>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </header>

      <div>
        <div className="scroll-indicator" id="section02" data-scroll-indicator-title="About"/>
      </div>
      <section className="about">
        <div className="container">
          <div className="text-center">
            <h2 className="about__header">About project</h2>
          </div>
          <div className="row">
            <div className="about__video col-md-12 justify-content-center pb-4">
              <iframe className="about__video-screen" id="screen"
                src="https://www.youtube.com/embed/0g-pZWXpqhw?iv_load_policy=3&amp;showinfo=0&amp;controls=0"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen=""/>
            </div>
          </div>
        </div>
      </section>
      <section className="user-problems">
        <div className="container">
          <div className="text-center">
            <h3 className="user-problems__subheader">Potentional issues of users</h3>
          </div>
          <div className="row">
            <div className="user-problems__problem col-md-4 pb-4">
              <div className="user-problems__background">
                <div className="user-problems__num">01</div>
                <div className="user-problems__description">Difficult to find effective programming courses</div>
              </div>
            </div>
            <div className="user-problems__problem col-md-4 pb-4">
              <div className="user-problems__background">
                <div className="user-problems__num">02</div>
                <div className="user-problems__description">Ordinary old courses</div>
              </div>
            </div>
            <div className="user-problems__problem col-md-4 pb-4">
              <div className="user-problems__background">
                <div className="user-problems__num">03</div>
                <div className="user-problems__description">Hard to find a job</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div>
        <div className="scroll-indicator" id="section03" data-scroll-indicator-title="Solution"/>
      </div>
      <section className="solution">
        <div className="container">
          <div className="text-center">
            <h3 className="solution__subheader">Solution</h3>
          </div>
          <div className="row text-center">
            <div className="solution__step col-md-4 pb-4">
              <div className="solution__icon pb-4">
                <img src={solving1} alt="icon" />
              </div>
              <p className="solution__description">We will train just in development (HTML5, CSS3, Front-end, Back-end,
                QA testing,
                Team Leadership, IT Architecture, etc.), not in everything</p>
            </div>
            <div className="solution__step col-md-4 pb-4">
              <div className="solution__icon pb-4">
                <img src={solving2} alt="icon" />
              </div>
              <p className="solution__description">Train not only with the help of texts and videos, but also with the
                help of
                homework, tasks, projects</p>
            </div>
            <div className="solution__step col-md-4 pb-4">
              <div className="solution__icon pb-4">
                <img src={solving3} alt="icon" />
              </div>
              <p className="solution__description">It will be possible to pass tests and exams on our web site and to
                get a serious
                certificate with a serial number or you can prepare for third-party certification</p>
            </div>
          </div>
          <div className="row text-center">
            <div className="solution__step col-md-4 offset-md-2 pb-4">
              <div className="solution__icon pb-4">
                <img src={solving4} alt="icon" />
              </div>
              <p className="solution__description">Successful students will be able to take practice on our startup, and
                they will also
                be able to get recommendations on paper or in electronic form</p>
            </div>
            <div className="solution__step col-md-4 pb-4">
              <div className="solution__icon pb-4">
                <img src={solving7} alt="icon"/>
              </div>
              <p className="solution__description">We will help in finding ads about employment, giving advice on how to
                write your CV
                with a portfolio, how to find jobs with a high salary, and how to prepare for an interview</p>
            </div>
          </div>
        </div>
      </section>

      <div>
        <div className="scroll-indicator" id="section04" data-scroll-indicator-title="Price"/>
      </div>
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

      <div>
        <div className="scroll-indicator" id="section05" data-scroll-indicator-title="Codesford"/>
      </div>
      <section className="codesford">
        <div className="container">
          <div className="text-center">
            <h3 className="codesford__subheader">Business model</h3>
          </div>
          <div className="row align-items-center">
            <div className="col-md-6">
              <p className="codesford__description font-weight-bold">EdTech + GameTech + HRTech = CodesFord</p>
              <p className="codesford__description">Our startup is at the junction of three technologies: EdTech,
                GameTech and HRTech.
                Despite the fact that a lot of useful elements will be free on our web site and inside in our mobile
                apps, our team plans to develop a commercial project.
                In this regard, we will be grateful to users for feedback and for orders for paid products, for example,
                Initial Professional Orientation,
                training interactive courses, assistance in finding your future job, and much more that you need</p>
            </div>
            <div className="col-md-6 pb-4">
              <img className="codesford__image" src={business_model} alt="business model" />
            </div>
          </div>
        </div>
      </section>

      <div>
        <div className="scroll-indicator" id="section06" data-scroll-indicator-title="Reasons"/>
      </div>
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

      <div>
        <div className="scroll-indicator" id="section07"
  data-scroll-indicator-title="Where you can use our service"/>
      </div>
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

      <div>
        <div className="scroll-indicator" id="section08" data-scroll-indicator-title="Refund Guaranteed"/>
      </div>
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

      <div>
        <div className="scroll-indicator" id="section09" data-scroll-indicator-title="Team"/>
      </div>
      <section className="team">
        <div className="container">
          <div className="text-center">
            <h3 className="team__subheader">Team</h3>
          </div>
          <div className="row text-center">
            <div className="team__teammate col-md-4 pb-4 justify-content-center">
              <Link className="team__teammate-link" to="/crew/">
                <div className="team__background">
                  <p className="team__position pt-2">Trainee IT Specialist</p>
                  <img className="team__image mb-3" src={oleg} alt="Oleg" />
                    <p className="team__name mb-0 font-weight-bold">Oleg</p>
                    <p className="team__city">Melbourne</p>
                </div>
              </Link>
            </div>
            <div className="team__teammate col-md-4 pb-4">
              <Link className="team__teammate-link" to="/crew/">
                <div className="team__background">
                  <p className="team__position pt-2">Head of Marketing</p>
                  <img className="team__image mb-3" src={marie} alt="Maria" />
                    <p className="team__name mb-0 font-weight-bold">Maria</p>
                    <p className="team__city">Moscow</p>
                </div>
              </Link>
            </div>
            <div className="team__teammate col-md-4 pb-4">
              <Link className="team__teammate-link" to="/crew/">
                <div className="team__background">
                  <p className="team__position pt-2">Team Lead</p>
                  <img className="team__image mb-3" src={evgeniy} alt="John" />
                    <p className="team__name mb-0 font-weight-bold">John</p>
                    <p className="team__city">Krasnoyarsk</p>
                </div>
              </Link>
            </div>
          </div>
          <div className="row text-center">
            <div className="team__teammate col-md-4 pb-4 justify-content-center">
              <Link className="team__teammate-link" to="/crew/">
                <div className="team__background">
                  <p className="team__position pt-2">Tech Lead</p>
                  <img className="team__image mb-3" src={vika} alt="Vika" />
                    <p className="team__name mb-0 font-weight-bold">Victoria</p>
                    <p className="team__city">Moscow</p>
                </div>
              </Link>
            </div>
            <div className="team__teammate col-md-4 pb-4">
              <Link className="team__teammate-link" to="/crew/">
                <div className="team__background">
                  <p className="team__position pt-2">Junior Front End Developer</p>
                  <img className="team__image mb-3" src={evgeniya} alt="Evgeniya" />
                    <p className="team__name mb-0 font-weight-bold">Evgeniya</p>
                    <p className="team__city">Moscow</p>
                </div>
              </Link>
            </div>
            <div className="team__teammate col-md-4 pb-4">
              <Link className="team__teammate-link" to="/crew/">
                <div className="team__background">
                  <p className="team__position pt-2">Junior Digital Designer</p>
                  <img className="team__image mb-3" src={alesya} alt="Alesya" />
                    <p className="team__name mb-0 font-weight-bold">Alesya</p>
                    <p className="team__city">Tomsk</p>
                </div>
              </Link>
            </div>
          </div>
          <div className="row text-center">
            <div className="team__teammate col-md-4 pb-4">
              <Link className="team__teammate-link" to="/crew/">
                <div className="team__background">
                  <p className="team__position pt-2">Junior Digital Designer</p>
                  <img className="team__image mb-3" src={maxim} alt="Maxim" />
                    <p className="team__name mb-0 font-weight-bold">Max</p>
                    <p className="team__city">Volgograd</p>
                </div>
              </Link>
            </div>
            <div className="team__teammate col-md-4 pb-4">
              <Link className="team__teammate-link" to="/crew/">
                <div className="team__background">
                  <p className="team__position pt-2">Big Data Expert</p>
                  <img className="team__image mb-3" src={jane} alt="Jane" />
                    <p className="team__name mb-0 font-weight-bold">Jane</p>
                    <p className="team__city">Melbourne</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div>
        <div className="scroll-indicator" id="section10" data-scroll-indicator-title="Contacts"/>
      </div>
      <section className="map">
        <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3157.7684975402503!2d144.91644641531485!3d-37.678147179777206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65a884af12a1f%3A0xcc6725131d70e540!2s59-69%20Pearcedale%20Parade%2C%20Broadmeadows%20VIC%203047!5e0!3m2!1sen!2sau!4v1590832676337!5m2!1sen!2sau"
          frameBorder="0" style="border:0;" allowFullScreen="" aria-hidden="false" tabIndex="0"/>
      </section>

  {/*    <div className="scroll-indicator-controller"><span></span>*/}
  {/*      <div className="active" data-indi-controller-id="section01" onClick="scrollIndiClicked('section01');">*/}
  {/*        <span>Main</span>*/}
  {/*        <div></div>*/}
  {/*      </div>*/}
  {/*      <div className="" data-indi-controller-id="section02" onClick="scrollIndiClicked('section02');">*/}
  {/*        <span>About</span>*/}
  {/*        <div></div>*/}
  {/*      </div>*/}
  {/*      <div className="" data-indi-controller-id="section03" onClick="scrollIndiClicked('section03');">*/}
  {/*        <span>Solution</span>*/}
  {/*        <div></div>*/}
  {/*      </div>*/}
  {/*      <div className="" data-indi-controller-id="section04" onClick="scrollIndiClicked('section04');">*/}
  {/*        <span>Price</span>*/}
  {/*        <div></div>*/}
  {/*      </div>*/}
  {/*      <div className="" data-indi-controller-id="section05" onClick="scrollIndiClicked('section05');">*/}
  {/*        <span>Codesford</span>*/}
  {/*        <div></div>*/}
  {/*      </div>*/}
  {/*      <div className="" data-indi-controller-id="section06" onClick="scrollIndiClicked('section06');">*/}
  {/*        <span>Reasons</span>*/}
  {/*        <div></div>*/}
  {/*      </div>*/}
  {/*      <div className="" data-indi-controller-id="section07" onClick="scrollIndiClicked('section07');"><span>Where you can use our service</span>*/}
  {/*        <div></div>*/}
  {/*      </div>*/}
  {/*      <div className="" data-indi-controller-id="section08" onClick="scrollIndiClicked('section08');"><span>Refund Guaranteed</span>*/}
  {/*        <div></div>*/}
  {/*      </div>*/}
  {/*      <div className="" data-indi-controller-id="section09" onClick="scrollIndiClicked('section09');">*/}
  {/*        <span>Team</span>*/}
  {/*        <div></div>*/}
  {/*      </div>*/}
  {/*      <div className="" data-indi-controller-id="section10" onClick="scrollIndiClicked('section10');">*/}
  {/*        <span>Contacts</span>*/}
  {/*        <div></div>*/}
  {/*      </div>*/}
  {/*    </div>*/}
  {/*    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"*/}
  {/*integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"*/}
  {/*crossOrigin="anonymous"/>*/}
  {/*    <script src="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/js/bootstrap.min.js"*/}
  {/*integrity="sha384-oesi62hOLfzrys4LxRF63OJCXdXDipiYWBnvTl9Y9/TRlw5xlKIEHpNyvvDShgf/"*/}
  {/*crossOrigin="anonymous"/>*/}
    </>
  );
}

export default Main;
