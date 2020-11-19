import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';
import ru from './img/ru.svg';
import en from './img/en.svg';
import fb from './img/fb.svg';
import vk from './img/vk.svg';
import youtube from './img/youtube.svg';
import telegram from './img/telegram.svg';
import {useTranslation} from 'react-i18next';
import { useHistory } from 'react-router-dom';

function Footer() {
  const { t, i18n } = useTranslation();

  const currentLanguage = i18n.language;

  let history = useHistory();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    history.push('/');
  };

  const add_vk = () => {
    return (currentLanguage === 'ru')
      ? (
        <a href="https://vk.com/codesford" target="_blank">
        <img className="social-img" src={vk} alt="vk icon" />
      </a>
      )
      : '';
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="row pt-4">
          <div className="footer__address col-md-4 pb-4">
            <p className="footer__address-header">{t('footer.address.title')}</p>
            <p className="footer__address-office text-white-50">{t('footer.address.text1')}
            <br/>{t('footer.address.text2')}
            </p>
          </div>
          <div className="footer__menu col-md-4 pb-4 text-center">
            <ul className="footer__menu-list pl-0">
              <li>
                <Link className="footer__menu-link mr-4" to="/">{t('footer.menu.item1')}</Link>
              </li>
              <li>
                <Link className="footer__menu-link mr-4" to="/study">{t('footer.menu.item2')}</Link>
              </li>
              <li>
                <Link className="footer__menu-link" to="/crew">{t('footer.menu.item3')}</Link>
              </li>
            </ul>
          </div>
          <div className="footer__social col-md-4 pb-4 text-right">
            <p className="footer__social-header">{t('footer.social')}</p>
            {add_vk()}
            <a href="https://www.youtube.com/channel/UCAJdCHneL0v4Ad38UVaCjbg" target="_blank">
              <img className="social-img" src={youtube} alt="youtube icon" />
            </a>
            <a href="https://t.me/CodesFord" target="_blank">
              <img className="social-img" src={telegram} alt="telegram icon" />
            </a>
            <a href="https://www.facebook.com/CodesFord2020" target="_blank">
              <img className="social-img" src={fb} alt="fb icon" />
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
                <li className="footer__menu__language" onClick={() => changeLanguage('en')}>
                  <img className="menu__language-img" src={en} alt="English flag" />
                  <span className="footer__menu-link mr-4">En</span>
                </li>
                <li className="footer__menu__language" onClick={() => changeLanguage('ru')}>
                  <img className="menu__language-img" src={ru} alt="Российский флаг" />
                  <span className="footer__menu-link">Ру</span>
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
