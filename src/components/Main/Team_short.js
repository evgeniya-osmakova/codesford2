import React from 'react';
import {Link} from 'react-router-dom';
import oleg from './img/Oleg.jpg';
import marie from './img/Marie.jpg';
import evgeniy from './img/Evgeniy.png';
import evgeniya from './img/Evgeniya.png';
import alesya from './img/Alesya.png';
import maxim from './img/Maxim.png';
import jane from './img/Jane.png';
import './Team_short.scss';
import './Main.scss';
import {useTranslation} from 'react-i18next';

function Team_short() {
  const { t, i18n } = useTranslation();

  return (
    <section className="team">
      <div className="container">
        <div className="text-center">
          <h3 className="team__subheader">{t('team.title')}</h3>
        </div>
        <div className="row text-center">
          <div className="team__teammate col-md-4 pb-4 justify-content-center">
            <Link className="team__teammate-link" to="/crew/">
              <div className="team__background">
                <p className="team__position pt-2">{t('team.oleg.position')}</p>
                <img className="team__image mb-3" src={oleg} alt="Oleg" />
                <p className="team__name mb-0 font-weight-bold">{t('team.oleg.name')}</p>
                <p className="team__city">{t('team.oleg.city')}</p>
              </div>
            </Link>
          </div>
          <div className="team__teammate col-md-4 pb-4">
            <Link className="team__teammate-link" to="/crew/">
              <div className="team__background">
                <p className="team__position pt-2">{t('team.marie.position')}</p>
                <img className="team__image mb-3" src={marie} alt="Maria" />
                <p className="team__name mb-0 font-weight-bold">{t('team.marie.name')}</p>
                <p className="team__city">{t('team.marie.city')}</p>
              </div>
            </Link>
          </div>
          <div className="team__teammate col-md-4 pb-4">
            <Link className="team__teammate-link" to="/crew/">
              <div className="team__background">
                <p className="team__position pt-2">{t('team.evgeniy.position')}</p>
                <img className="team__image mb-3" src={evgeniy} alt="John" />
                <p className="team__name mb-0 font-weight-bold">{t('team.evgeniy.name')}</p>
                <p className="team__city">{t('team.evgeniy.city')}</p>
              </div>
            </Link>
          </div>
        </div>
        <div className="row text-center">
          <div className="team__teammate col-md-4 pb-4">
            <Link className="team__teammate-link" to="/crew/">
              <div className="team__background">
                <p className="team__position pt-2">{t('team.evgeniya.position')}</p>
                <img className="team__image mb-3" src={evgeniya} alt="Evgeniya" />
                <p className="team__name mb-0 font-weight-bold">{t('team.evgeniya.name')}</p>
                <p className="team__city">{t('team.evgeniya.city')}</p>
              </div>
            </Link>
          </div>
          <div className="team__teammate col-md-4 pb-4">
            <Link className="team__teammate-link" to="/crew/">
              <div className="team__background">
                <p className="team__position pt-2">{t('team.alesya.position')}</p>
                <img className="team__image mb-3" src={alesya} alt="Alesya" />
                <p className="team__name mb-0 font-weight-bold">{t('team.alesya.name')}</p>
                <p className="team__city">{t('team.alesya.city')}</p>
              </div>
            </Link>
          </div>
          <div className="team__teammate col-md-4 pb-4">
            <Link className="team__teammate-link" to="/crew/">
              <div className="team__background">
                <p className="team__position pt-2">{t('team.jane.position')}</p>
                <img className="team__image mb-3" src={jane} alt="Jane" />
                <p className="team__name mb-0 font-weight-bold">{t('team.jane.name')}</p>
                <p className="team__city">{t('team.jane.city')}</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team_short;
