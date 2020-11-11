import React from 'react';
import './Header.scss';
import { Link, useHistory} from 'react-router-dom';
import logo from './img/logo.svg';
import en from './img/en.png';
import ru from './img/ru.png';
import {useTranslation} from 'react-i18next';
import {useDispatch} from 'react-redux';

function Header() {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();

  let history = useHistory();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    history.push('/');
  };

  return (
    <header className="headerBlock">
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
                <Link className="menu__link nav-link" aria-current="page" to="/">{t('header.menu.link1')}</Link>
              </li>
              <li className="menu__list-item nav-item">
                <Link className="menu__link nav-link" to="/study">{t('header.menu.link2')}</Link>
              </li>
              <li className="menu__list-item nav-item">
                <Link className="menu__link nav-link" to="/crew">{t('header.menu.link3')}</Link>
              </li>
              <li className="menu__list-item menu__auth nav-item">
                <Link className="menu__link menu__link-signin nav-link btn btn-outline-primary" to="/signin/">{t('header.btns.btn1')}</Link>
              </li>
              <li className="menu__list-item menu__register nav-item">
                <Link className="menu__link menu__link-signup nav-link btn btn-primary" to="/registration/">{t('header.btns.btn2')}</Link>
              </li>
              <li className="menu__list-item nav-item menu__language" onClick={() => changeLanguage('en')} >
                <img className="menu__language-img" src={en} alt="English flag" />
                <span className="menu__language-text">En</span>
              </li>
              <li className="menu__list-item nav-item menu__language" onClick={() => changeLanguage('ru')}>
                <img className="menu__language-img" src={ru} alt="Российский флаг" />
                <span className="menu__language-text">Ру</span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
