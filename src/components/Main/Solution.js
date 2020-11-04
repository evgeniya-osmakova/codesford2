import React from 'react';
import solving1 from './img/solving1.png';
import solving2 from './img/solving2.png';
import solving3 from './img/solving3.png';
import solving4 from './img/solving4.png';
import solving7 from './img/solving7.png';
// import '../styles/vacancy_adding.scss';

function Solution() {
  return (
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

  );
}

export default Solution;
