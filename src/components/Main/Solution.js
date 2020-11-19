import React from 'react';
import solving1 from './img/solving1.png';
import solving2 from './img/solving2.png';
import solving3 from './img/solving3.png';
import solving4 from './img/solving4.png';
import solving7 from './img/solving7.png';
import './Main.scss';
import {useTranslation} from 'react-i18next';

function Solution() {
  const { t } = useTranslation();

  return (
    <section className="solution">
      <div className="container">
        <div className="text-center">
          <h3 className="solution__subheader">{t('solution.title')}</h3>
        </div>
        <div className="row text-center">
          <div className="solution__step col-md-4 pb-4">
            <div className="solution__icon pb-4">
              <img src={solving1} alt="icon" />
            </div>
            <p className="solution__description">{t('solution.solution1')}</p>
          </div>
          <div className="solution__step col-md-4 pb-4">
            <div className="solution__icon pb-4">
              <img src={solving2} alt="icon" />
            </div>
            <p className="solution__description">{t('solution.solution2')}</p>
          </div>
          <div className="solution__step col-md-4 pb-4">
            <div className="solution__icon pb-4">
              <img src={solving3} alt="icon" />
            </div>
            <p className="solution__description">{t('solution.solution3')}</p>
          </div>
        </div>
        <div className="row text-center">
          <div className="solution__step col-md-4 offset-md-2 pb-4">
            <div className="solution__icon pb-4">
              <img src={solving4} alt="icon" />
            </div>
            <p className="solution__description">{t('solution.solution4')}</p>
          </div>
          <div className="solution__step col-md-4 pb-4">
            <div className="solution__icon pb-4">
              <img src={solving7} alt="icon"/>
            </div>
            <p className="solution__description">{t('solution.solution6')}</p>
          </div>
        </div>
      </div>
    </section>

  );
}

export default Solution;
