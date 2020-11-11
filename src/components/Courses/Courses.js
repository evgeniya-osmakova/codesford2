import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import CoursesMain from './CoursesMain.js';
import Html from './Html.js';
import Bootstrap from './Bootstrap.js';
import Css from './Css.js';
import Js from './Js.js';


function Courses() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/study">
          <CoursesMain />
        </Route>
        <Route path="/study/html">
          <Html />
        </Route>
        <Route path="/study/css">
          <Css />
        </Route>
        <Route path="/study/bootstrap">
          <Bootstrap />
        </Route>
        <Route path="/study/js">
          <Js />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Courses;
