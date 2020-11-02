import React from 'react';
import './1.scss';
import { Link, BrowserRouter, Switch, Route} from 'react-router-dom';
import logo from './img/logo.png';
import en from './img/en.png';
import ru from './img/ru.png';

function Header() {
  return (
    <>
      <div>
        <div className="scroll-indicator" id="section01" data-scroll-indicator-title="Main"/>
      </div>


      <nav className="menu navbar navbar-expand-lg navbar-light">
        <div className="container">
          <div className="logo">
            <a className="logo__link navbar-brand" href="/">
              <img className="logo__img" src={logo} alt="Logo" />
            </a>
          </div>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"/>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="menu__list navbar-nav ml-auto mb-2 mb-lg-0">
              <li className="menu__list-item nav-item">
                <Link className="menu__link nav-link" aria-current="page" to="/">Main</Link>
              </li>
              <li className="menu__list-item nav-item">
                <Link className="menu__link nav-link" to="/study/">Study</Link>
              </li>
              <li className="menu__list-item nav-item">
                <Link className="menu__link nav-link" to="/crew/">Team</Link>
              </li>
              <li className="menu__list-item menu__auth nav-item">
                <Link className="menu__link menu__link-signin nav-link btn btn-outline-primary" to="/accounts/signin/">Sign
                  In</Link>
              </li>
              <li className="menu__list-item menu__register nav-item">
                <Link className="menu__link menu__link-signup nav-link btn btn-primary" to="/accounts/register/">Sign
                  Up</Link>
              </li>
              <li className="menu__list-item nav-item menu__language">
                <img className="menu__language-img" src={en} alt="English flag" />
                  <span className="menu__language-text">En</span>
              </li>
              <li className="menu__list-item nav-item menu__language">
                <img className="menu__language-img" src={ru} alt="Российский флаг" />
                  <Link className="menu__language-text" to="/ru/">Ру</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
