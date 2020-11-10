import React from 'react';
// import '../styles/vacancy_adding.scss';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import html from './img/html.svg';
import bootstrap from './img/bootstrap.svg';
import css from './img/css.svg';
import js from './img/js.svg';


function CoursesMain() {
  return (
    <section className="study">
      <div className="container">
        <div className="row pt-4 text-center justify-content-center">
          <div className="study__course col-md-5 pb-4 justify-content-center">
            <Link className="study__course-link" to="study/html/">
              <div className="study__course-background">
                <img className="study__course-cover" src={html} alt="Course cover" />
                <div className="study__course-name">
                  <h3 className="mb-0">HTML5</h3>
                </div>
              </div>
            </Link>
          </div>
          <div className="study__course col-md-5 pb-4 justify-content-center">
            <Link className="study__course-link" to="study/css/">
              <div className="study__course-background">
                <img className="study__course-cover" src={css} alt="Course cover" />
                <div className="study__course-name">
                  <h3 className="mb-0">CSS3</h3>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="row text-center justify-content-center">
          <div className="study__course col-md-5 pb-4 justify-content-center">
            <Link className="study__course-link" to="study/js/">
              <div className="study__course-background">
                <img className="study__course-cover" src={js} alt="Course cover" />
                <div className="study__course-name">
                  <h3 className="mb-0">JavaScript</h3>
                </div>
              </div>
            </Link>
          </div>
          <div className="study__course col-md-5 pb-4 justify-content-center">
            <Link className="study__course-link" to="study/bootstrap/">
              <div className="study__course-background">
                <img className="study__course-cover" src={bootstrap} alt="Course cover" />
                <div className="study__course-name">
                  <h3 className="mb-0">Bootstrap</h3>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CoursesMain;
