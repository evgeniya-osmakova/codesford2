import React from 'react';
import './Header.scss';
import { Link, useHistory} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import {useDispatch} from 'react-redux';

function Header() {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();

  let history = useHistory();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    history.push('/signin');
  };

  return (
    <div>Регистрация прошла успешно</div>
  );
}

export default Header;
