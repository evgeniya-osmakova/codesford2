import React from 'react';
import './ModalMenu.scss';
import {useTranslation} from 'react-i18next';
import en from './img/en.svg';
import ru from './img/ru.svg';
import close from './img/close.svg';
import {Link, useHistory} from 'react-router-dom';
import * as allActions from '../../actions';
import {useDispatch} from 'react-redux';

function ModalMenu() {
  const { t, i18n } = useTranslation();

  const dispatch = useDispatch();

  let history = useHistory();

  const closeMenu = () => {
    dispatch(allActions.changeState({newState: 'default'}));
  }

  const changeLanguage = (lng) => {
    closeMenu();
    i18n.changeLanguage(lng);
    history.push('/');
  };

  return (
    <>
      <section className="modal">
        <div className="modal-menu">
          <div className="modal-menu__links">

            <Link className="modal-menu__item" to="/" onClick={() => closeMenu()}>
              {t('header.menu.link1')}
            </Link>
            <Link className="modal-menu__item" to="/study" onClick={() => closeMenu()}>
              {t('header.menu.link2')}
            </Link>
            <Link className="modal-menu__item modal-menu__item--underscored" to="/crew" onClick={() => closeMenu()}>
              {t('header.menu.link3')}
            </Link>

            <Link className="modal-menu__item modal-menu__item--color" to="/signin" onClick={() => closeMenu()}>
              {t('header.btns.btn1')}
            </Link>
            <Link className="modal-menu__item modal-menu__item--color" to="/registration" onClick={() => closeMenu()}>
              {t('header.btns.btn2')}
            </Link>
          </div>


          <div className="modal-menu__languages">
            <div className="header-right__item language" onClick={() => changeLanguage('en')} >
              <img className="language__img" src={en} alt="flag"/>
              <div className="modal-menu__item modal-menu__item--color">En</div>
            </div>
            <div className="header-right__item language" onClick={() => changeLanguage('ru')}>
              <img className="language__img" src={ru} alt="flag" />
              <div className="modal-menu__item modal-menu__item--color">Ру</div>
            </div>
          </div>
        </div>
        <img className="modal-close" src={close} alt="close" onClick={() => closeMenu()} />
      </section>

      <div className="modal-overlay"/>
    </>
  );
}

export default ModalMenu;
