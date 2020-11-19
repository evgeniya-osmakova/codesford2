import React from 'react';
import './NotFound.scss';
import {useTranslation} from 'react-i18next';

function NotFound() {
  const { t } = useTranslation();
  return (
    <h1>{t('notFound.text')}</h1>
  );
}

export default NotFound;
