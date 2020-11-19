import React from 'react';
import business_model from './img/Business-model_svg.png';
import './Main.scss';
import {useTranslation} from 'react-i18next';

function Business_model() {
  const { t } = useTranslation();

  return (
    <section className="codesford">
      <div className="container">
        <div className="text-center">
          <h3 className="codesford__subheader">{t('codesford.title')}</h3>
        </div>
        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="codesford__description font-weight-bold">EdTech + GameTech + HRTech = CodesFord</p>
            <p className="codesford__description">{t('codesford.text')}</p>
          </div>
          <div className="col-md-6 pb-4">
            <img className="codesford__image" src={business_model} alt="business model" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Business_model;
