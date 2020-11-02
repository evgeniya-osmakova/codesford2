import React from 'react';
import './1.scss';
import { Link, BrowserRouter, Switch, Route } from 'react-router-dom';
import ru from './img/ru.png';
import en from './img/en.png';
import fb from './img/fb.png';
import youtube from './img/youtube.png';
import telegram from './img/telegram.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row pt-4">
          <div className="footer__address col-md-4 pb-4">
            <p className="footer__address-header">Address</p>
            <p className="footer__address-office text-white-50">59-69 Pearcedale Parade Broadmeadows <br /> VIC 3047</p>
          </div>
          <div className="footer__menu col-md-4 pb-4 text-center">
            <ul className="footer__menu-list pl-0">
              <li>
                <Link className="footer__menu-link mr-4" to="/">Main</Link>
              </li>
              <li>
                <Link className="footer__menu-link mr-4" to="/study/">Study</Link>
              </li>
              <li>
                <Link className="footer__menu-link" to="/crew/">Team</Link>
              </li>
            </ul>
          </div>
          <div className="footer__social col-md-4 pb-4 text-right">
            <p className="footer__social-header">Join us on social networks</p>
            <a href="https://www.youtube.com/channel/UCAJdCHneL0v4Ad38UVaCjbg" target="_blank">
              <img src={youtube} alt="youtube icon" />
            </a>
            <a href="https://t.me/CodesFord" target="_blank">
              <img src={telegram} alt="telegram icon" />
            </a>
            <a href="https://www.facebook.com/CodesFord2020" target="_blank">
              <img src={fb} alt="fb icon" />
            </a>
          </div>
        </div>
        <hr />
          <div className="row pt-4">
            <div className="footer__copyright col-md-4 pb-4">
              <p>© 2020 CodesFord</p>
            </div>
            <div className="footer__menu col-md-4 pb-4 text-center">
              <ul className="footer__menu-list pl-0">
                <li>
                  <img className="menu__language-img" src={en} alt="English flag" />
                    <span className="footer__menu-link mr-4">En</span>
                </li>
                <li>
                  <img className="menu__language-img" src={ru} alt="Российский флаг" />
                    <Link className="footer__menu-link" to="/ru/">Ру</Link>
                </li>
              </ul>
            </div>
            <div className="footer__social col-md-4 pb-4 text-right">
              <a className="footer__email" href="mailto:email@codesford.com">email@codesford.com</a>
            </div>
          </div>
      </div>
    </footer>
  );
}

export default Footer;
