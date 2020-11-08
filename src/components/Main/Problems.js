import React from 'react';
import './Problems.scss';
import './Main.scss';
import {useTranslation} from 'react-i18next';

function Problems() {
  const { t, i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  return (

    <section className="user-problems">
      <div className="container">
        <div className="text-center">
          <h3 className="user-problems__subheader">{t('problems.title')}</h3>
        </div>
        <div className="row">
          <div className="user-problems__problem col-md-4 pb-4">
            <div className="user-problems__background">
              <div className="user-problems__num">01</div>
              <div className="user-problems__description">{t('problems.problem1')}</div>
            </div>
          </div>
          <div className="user-problems__problem col-md-4 pb-4">
            <div className="user-problems__background">
              <div className="user-problems__num">02</div>
              <div className="user-problems__description">{t('problems.problem2')}</div>
            </div>
          </div>
          <div className="user-problems__problem col-md-4 pb-4">
            <div className="user-problems__background">
              <div className="user-problems__num">03</div>
              <div className="user-problems__description">{t('problems.problem4')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Problems;
