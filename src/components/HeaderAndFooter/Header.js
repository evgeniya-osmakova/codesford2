import React from 'react';
import './Header.scss';
import { Link, useHistory} from 'react-router-dom';
import logo from './img/logo.svg';
import avatar from './img/ava.svg';
import en from './img/en.svg';
import ru from './img/ru.svg';
import burger from './img/burger.svg';
import {useTranslation} from 'react-i18next';
import {useSelector, useDispatch} from 'react-redux';
import * as allActions from '../../actions';
import ModalMenu from './ModalMenu.js';

function Header() {
  const { t, i18n } = useTranslation();

  let history = useHistory();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    history.push('/');
  };

  const userData = useSelector((state) => state.userData);
  const isLoggedIn = useSelector((state) => state.userData.isLoggedIn);
  const fullName = `${userData.first_name} ${userData.last_name}`;

  const dispatch = useDispatch();

  const currentState = useSelector((state) => state.appState);

  const showMenu = () => {
    dispatch(allActions.changeState({newState: 'modalMenu'}));
  }

  return (
    <header className="header">

      {(currentState === 'modalMenu') ? <ModalMenu /> : ''}

      <div className="header__left">
        <div className="logo">
          <Link to="/">
            <img className="logo__img" src={logo} alt="Logo" />
          </Link>
        </div>
        <div className="sidebar">
          <Link className="sidebar__item" to="/">{t('header.menu.link1')}</Link>
          <Link className="sidebar__item" to="/study">{t('header.menu.link2')}</Link>
          <Link className="sidebar__item" to="/crew">{t('header.menu.link3')}</Link>
        </div>
      </div>
      <div className="header__right">
        {
          (isLoggedIn)
            ? <Link className="header-profile" to="/profile">
                <img className="header-profile__photo" src={avatar} alt="avatar" />
                <div className="header-profile__name">{fullName}</div>
              </Link>
            : <>
                <Link className="button button--white" to="/signin">{t('header.btns.btn1')}</Link>
                <Link className="button button--blue" to="/registration">{t('header.btns.btn2')}</Link>
              </>
        }
        <div className="header-right__item language" onClick={() => changeLanguage('en')} >
          <img className="language__img" src={en} alt="flag"/>
          <div className="language__text">En</div>
        </div>
        <div className="header-right__item language" onClick={() => changeLanguage('ru')}>
          <img className="language__img" src={ru} alt="flag" />
          <div className="language__text">Ру</div>
        </div>
      </div>
      {(currentState === 'modalMenu') ? '' : <img className="burger" src={burger} alt="menu" onClick={showMenu}/>}
    </header>
  );
}

export default Header;
