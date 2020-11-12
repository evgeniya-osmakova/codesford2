import React, {Component, Suspense} from 'react';
// import '../styles/vacancy_adding.scss';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { useTranslation, withTranslation, Trans } from 'react-i18next';
import Header from './Header_and_Footer/Header.js';
import Footer from './Header_and_Footer/Footer.js';
import Main from './Main/Main.js';
import Team from './Team/Team.js';
import Courses from './Courses/Courses.js';
import Registration from './Authorization/Registration.js';
import SignIn from './Authorization/SignIn.js';

const Loader = () => (
  <div className="App">
    <div>loading...</div>
  </div>
);


function App() {
  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/crew">
            <Team />
          </Route>
          <Route path="/study">
            <Courses />
          </Route>
          <Route path="/registration/">
            <Registration />
          </Route>
          <Route path="/signin/">
            <SignIn />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
