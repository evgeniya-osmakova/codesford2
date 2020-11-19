import React from 'react';
import './coursesMain.scss';
import { Link } from 'react-router-dom';
import html from './img/html.svg';
import bootstrap from './img/bootstrap.svg';
import css from './img/css.svg';
import js from './img/js.svg';


function CoursesMain() {

  const course = (link, img, title) => {
    return (
      <div className="study__course col-md-5 pb-4 justify-content-center">
        <Link className="study__course-link" to={link}>
          <div className="study__course-background">
            <img className="study__course-cover" src={img} alt="Course cover" />
            <div className="study__course-name">
              <h3 className="mb-0">{title}</h3>
            </div>
          </div>
        </Link>
      </div>
    )
  }
  return (
    <section className="study">
      <div className="container">
        <div className="row pt-4 text-center justify-content-center">
          {course('/study/html', html, 'HTML5')}
          {course('/study/css', css, 'CSS3')}
        </div>
        <div className="row text-center justify-content-center">
          {course('/study/js', js, 'JavaScript')}
          {course('/study/bootstrap', bootstrap, 'Bootstrap')}
        </div>
      </div>
    </section>
  );
}

export default CoursesMain;
