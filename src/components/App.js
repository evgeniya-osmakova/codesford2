import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Header from './HeaderAndFooter/Header.js';
import Footer from './HeaderAndFooter/Footer.js';
import Main from './Main/Main.js';
import Team from './Team/Team.js';
import Courses from './Courses/Courses.js';
import Registration from './Authorization/Registration.js';
import SignIn from './Authorization/SignIn.js';
import NotFound from './NotFound/NotFound.js';
import {useSelector} from 'react-redux';
import Profile from './PersonalPage/Profile.js';

const Loader = () => (
  <div className="App">
    <div>loading...</div>
  </div>
);

function App() {
  const isLoggedIn = useSelector((state) => state.userData.isLoggedIn);

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
          <Route path="/registration">
            <Registration />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/profile">
            {(isLoggedIn) ? <Profile /> : <Redirect push to="/signin" />}
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
