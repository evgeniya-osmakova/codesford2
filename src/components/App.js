import React, {Component, Suspense} from 'react';
// import '../styles/vacancy_adding.scss';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { useTranslation, withTranslation, Trans } from 'react-i18next';
import Header from './Header_and_Footer/Header.js';
import Footer from './Header_and_Footer/Footer.js';
import Main from './Main/Main.js';
import Team from './Team/Team.js';
import Courses from './Courses/Courses.js';

const Loader = () => (
  <div className="App">
    <div>loading...</div>
  </div>
);


function App() {
  return (
    <Suspense fallback={<Loader />}>
      <main className="main">
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
          </Switch>
          <Footer />
        </BrowserRouter>
      </main>
    </Suspense>
  );
}

export default App;
