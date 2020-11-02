import React from 'react';
// import '../styles/vacancy_adding.scss';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Header from './Header_and_Footer/Header.js';
import Footer from './Header_and_Footer/Footer.js';
import Main from './Main/Main.js';
import Team from './Team/Team.js';
import Courses from './Courses/Courses.js';

function App() {
  return (
    <>


      <main className="main">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route path="/crew/">
              <Team />
            </Route>
            <Route path="/study/">
              <Courses />
            </Route>
          </Switch>
          <Footer />
        </BrowserRouter>
      </main>


    </>
  );
}

export default App;
