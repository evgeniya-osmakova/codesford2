import React from 'react';
import {Switch, Route, useRouteMatch, Link} from 'react-router-dom';
import Html from './Html.js';
import Bootstrap from './Bootstrap.js';
import Css from './Css.js';
import Js from './Js.js';
import './coursesMain.scss';
import html from './img/html.svg';
import bootstrap from './img/bootstrap.svg';
import css from './img/css.svg';
import js from './img/js.svg';


function Courses() {

  let { path, url } = useRouteMatch();

  const course = (link, img, title) => {
    return (
      <div className="study__course col-md-5 pb-4 justify-content-center">
        <Link className="study__course-link" to={`${url}/${link}`}>
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
      <Switch>
        <Route exact path={path}>
          <div className="container">
            <div className="row pt-4 text-center justify-content-center">
              {course('html', html, 'HTML5')}
              {course('css', css, 'CSS3')}
            </div>
            <div className="row text-center justify-content-center">
              {course('js', js, 'JavaScript')}
              {course('bootstrap', bootstrap, 'Bootstrap')}
            </div>
          </div>
        </Route>
        <Route path={`${path}/html`}>
          <Html />
        </Route>
        <Route path={`${path}/css`}>
          <Css />
        </Route>
        <Route path={`${path}/bootstrap`}>
          <Bootstrap />
        </Route>
        <Route path={`${path}/js`}>
          <Js />
        </Route>
      </Switch>
    </section>
  );
}

export default Courses;
