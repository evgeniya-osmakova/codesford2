import React from 'react';
import './Team.scss';
import alesya from '../Main/img/Alesya.png';
import evgeniy from '../Main/img/Evgeniy.png';
import evgeniya from '../Main/img/Evgeniya.png';
import jane from '../Main/img/Jane.png';
import marie from '../Main/img/Marie.jpg';
import oleg from './img/Oleg.jpg';
import alex from '../Main/img/Alex.png';
import twitter from './img/twitter.svg';
import telegram from './img/telegram.svg';
import github from './img/github.svg';
import linkedin from './img/linkedin.svg';
import facebook from './img/facebook.svg';
import behance from './img/behance.svg';
import stack from './img/stack.svg';
import kangan from './img/kangan.png';
import darenta from './img/darenta.png';
import olegStack from './img/olegStack.png';
import jhonStack from './img/jhonStack.png';
import AlesyaUniverEn from './img/AlesyaUniverEn.png';
import janeUniverEn from './img/janeUniverEn.png';
import jhonUniver from './img/jhonUniver.png';
import marieUniverEn from './img/marieUniverEn.png';
import AlexUniver from './img/AlexUniver.jpg';
import mgsu from './img/mgsu.png';
import {useTranslation} from 'react-i18next';


function Team() {
  const { t } = useTranslation();

  return (
    <main>
      <section className="team-page">
        <div className="container">
          <div className="row pt-4">
            <div className="team-page__background">
              <div className="team-page__teammate col-md-2 offset-md-1 text-center">
                <img className="team-page__image pt-4" src={oleg} alt="Photo of Oleg Gribanov" />
                <p className="team-page__city pt-3 text-black-50">{t('teamPage.oleg.city')}</p>
                <hr />
                <div className="team-page__social">
                  <a href="https://github.com/veryfatwombat" target="_blank">
                    <img src={github} alt="github"/>
                  </a>
                  <a href="https://www.linkedin.com/in/neoguru" target="_blank">
                    <img src={linkedin} alt="linkedin"/>
                  </a>
                  <a href="https://stackoverflow.com/users/11926992/oleg-gribanov" target="_blank">
                    <img src={stack} alt="stack"/>
                  </a>
                  <a href="https://www.facebook.com/darentacom/" target="_blank">
                    <img src={facebook} alt="facebook"/>
                  </a>
                  <a href="https://twitter.com/darenta_ru" target="_blank">
                    <img src={twitter} alt="twitter" />
                  </a>
                  <a href="https://t.me/darenta" target="_blank">
                    <img src={telegram} alt="telegram" />
                  </a>
                </div>
                <hr />
                <img className="team-page__university" src={kangan} alt="kangan" />
                <img className="team-page__company" src={darenta} alt="darenta" />
                <a href="https://darenta.com" target="_blank">
                  https://darenta.com
                </a>
                <img className="team-page__stack pb-4" src={olegStack} alt="stack" />
              </div>
              <div className="team-page__teammate col-md-7 offset-sm-1">
                <h3 className="team-page__name pt-4">{t('teamPage.oleg.name')}</h3>
                <p className="team-page__position text-black-50">{t('teamPage.oleg.position')}</p>
                <ul className="team-page__description pl-3">
                  <li>{t('teamPage.oleg.text1')}</li>
                  <li>{t('teamPage.oleg.text2')}</li>
                  <li>{t('teamPage.oleg.text3')}</li>
                  <li>{t('teamPage.oleg.text4')}</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row pt-4">
            <div className="team-page__background">
              <div className="team-page__teammate col-md-2 offset-md-1 text-center">
                <img className="team-page__image pt-4" src={marie} alt="Photo of Marie Volkova" />
                <p className="team-page__city pt-3 text-black-50">{t('teamPage.marie.city')}</p>
                <hr />
                <div className="team-page__social">
                  <a href="https://www.linkedin.com/in/maria-volkova-241b3b1b4/" target="_blank">
                    <img src={linkedin} alt="linkedin" />
                  </a>
                  <a href="https://www.facebook.com/profile.php?id=100021635349624" target="_blank">
                    <img src={facebook} alt="facebook" />
                  </a>
                  <a href="https://t.me/marievol" target="_blank">
                    <img src={telegram} alt="telegram" />
                  </a>
                </div>
                <hr />
                <img className="team-page__university pb-4" src={marieUniverEn} alt="university" />
              </div>
              <div className="team-page__teammate col-md-7 offset-sm-1">
                <h3 className="team-page__name pt-4">{t('teamPage.marie.name')}</h3>
                <p className="team-page__position text-black-50">{t('teamPage.marie.position')}</p>
                <p className="team-page__description">{t('teamPage.marie.text1')}</p>
                <ul className="team-page__description pl-3">
                  <li>{t('teamPage.marie.text2')}</li>
                  <li>{t('teamPage.marie.text3')}</li>
                  <li>{t('teamPage.marie.text4')}</li>
                  <li>{t('teamPage.marie.text5')}</li>
                </ul>
                <p className="team-page__description">
                  {t('teamPage.marie.text6')}
                  <br />
                  {t('teamPage.marie.text7')}
                </p>
              </div>
            </div>
          </div>
          <div className="row pt-4">
            <div className="team-page__background">
              <div className="team-page__teammate col-md-2 offset-md-1 text-center">
                <img className="team-page__image pt-4" src={evgeniy} alt="Photo of John Korobkov" />
                <p className="team-page__city pt-3 text-black-50">{t('teamPage.evgeniy.city')}</p>
                <hr />
                <div className="team-page__social">
                  <a href="https://github.com/evgeniykorobkov" target="_blank">
                    <img src={github} alt="github"/>
                  </a>
                  <a href="https://www.linkedin.com/in/evgeniykorobkov" target="_blank">
                    <img src={linkedin} alt="linkedin"/>
                  </a>
                  <a href="https://stackoverflow.com/users/13094165/evgeniy-korobkov" target="_blank">
                    <img src={stack} alt="stack"/>
                  </a>
                  <a href="https://www.facebook.com/evgeniykorobkovv" target="_blank">
                    <img src={facebook} alt="facebook"/>
                  </a>
                  <a href="https://t.me/evgeniykorobkov" target="_blank">
                    <img src={telegram} alt="telegram"/>
                  </a>
                </div>
                <hr />
                <img className="team-page__university" src={jhonUniver} alt="university" />
                <img className="team-page__stack pb-4" src={jhonStack} alt="stack" />
              </div>
              <div className="team-page__teammate col-md-7 offset-sm-1">
                <h3 className="team-page__name pt-4">{t('teamPage.evgeniy.name')}</h3>
                <p className="team-page__position text-black-50">{t('teamPage.evgeniy.position')}</p>
                <p className="team-page__description">{t('teamPage.evgeniy.text1')}</p>
                <ul className="team-page__description pl-3">
                  <li>{t('teamPage.evgeniy.text2')}</li>
                  <li>{t('teamPage.evgeniy.text3')}</li>
                  <li>{t('teamPage.evgeniy.text4')}</li>
                </ul>
                <p className="team-page__description">{t('teamPage.evgeniy.text5')}</p>
                <ul className="team-page__description pl-3">
                  <li>{t('teamPage.evgeniy.text6')}</li>
                  <li>{t('teamPage.evgeniy.text7')}</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row pt-4">
            <div className="team-page__background">
              <div className="team-page__teammate col-md-2 offset-md-1 text-center">
                <img className="team-page__image pt-4" src={evgeniya}
                     alt="Photo of Evgeniya Osmakova" />
                <p className="team-page__city pt-3 text-black-50">{t('teamPage.evgeniya.city')}</p>
                <hr />
                <div className="team-page__social">
                  <a href="https://github.com/evgeniya-osmakova" target="_blank">
                    <img src={github} alt="github"/>
                  </a>
                  <a href="https://www.linkedin.com/in/evgeniya-osmakova-54a05139/" target="_blank">
                    <img src={linkedin} alt="linkedin"/>
                  </a>
                  <a href="https://stackoverflow.com/users/14372820/evgeniya-osmakova" target="_blank">
                    <img src={stack} alt="stack"/>
                  </a>
                </div>
                <hr />
                <img className="team-page__university" src={mgsu} alt="university"/>
                <img className="team-page__stack pb-4" src={jhonStack} alt="stack"/>
              </div>
              <div className="team-page__teammate col-md-7 offset-sm-1">
                <h3 className="team-page__name pt-4">{t('teamPage.evgeniya.name')}</h3>
                <p className="team-page__position text-black-50">{t('teamPage.evgeniya.position')}</p>
                <p className="team-page__description">{t('teamPage.evgeniya.text1')}</p>
                <ul className="team-page__description pl-3">
                  <li>{t('teamPage.evgeniya.text2')}</li>
                  <li>{t('teamPage.evgeniya.text3')}</li>
                  <li>{t('teamPage.evgeniya.text4')}</li>
                  <li>{t('teamPage.evgeniya.text5')}</li>
                  <li>{t('teamPage.evgeniya.text6')}</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row pt-4">
            <div className="team-page__background">
              <div className="team-page__teammate col-md-2 offset-md-1 text-center">
                <img className="team-page__image pt-4" src={alex}
                     alt="Photo of Alex Osipenko" />
                <p className="team-page__city pt-3 text-black-50">{t('teamPage.alex.city')}</p>
                <hr />
                <div className="team-page__social">
                  <a href="https://github.com/AlexOsipenko" target="_blank">
                    <img src={github} alt="github"/>
                  </a>
                  <a href="https://www.linkedin.com/in/alex-osipenko-a64ba41b2/" target="_blank">
                    <img src={linkedin} alt="linkedin"/>
                  </a>
                  <a href="https://stackoverflow.com/users/14517056/alex-osipenko" target="_blank">
                    <img src={stack} alt="stack"/>
                  </a>
                  <a href="https://www.facebook.com/osipenkoalex1" target="_blank">
                    <img src={facebook} alt="facebook"/>
                  </a>
                </div>
                <hr />
                <img className="team-page__university" src={AlexUniver} alt="university"/>
                <img className="team-page__stack pb-4" src={jhonStack} alt="stack"/>
              </div>
              <div className="team-page__teammate col-md-7 offset-sm-1">
                <h3 className="team-page__name pt-4">{t('teamPage.alex.name')}</h3>
                <p className="team-page__position text-black-50">{t('teamPage.alex.position')}</p>
                <p className="team-page__description">{t('teamPage.alex.text1')}</p>
                <ul className="team-page__description pl-3">
                  <li>{t('teamPage.alex.text2')}</li>
                  <li>{t('teamPage.alex.text3')}</li>
                  <li>{t('teamPage.alex.text4')}</li>
                  <li>{t('teamPage.alex.text5')}</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row pt-4">
            <div className="team-page__background">
              <div className="team-page__teammate col-md-2 offset-md-1 text-center">
                <img className="team-page__image pt-4" src={alesya}
                     alt="Photo of Alesya Livanova" />
                <p className="team-page__city pt-3 text-black-50">{t('teamPage.alesya.city')}</p>
                <hr />
                <div className="team-page__social">
                  <a href="https://www.linkedin.com/in/alesya-livanova-884543b3/" target="_blank">
                    <img src={linkedin} alt="linkedin" />
                  </a>
                  <a href="https://www.facebook.com/alesya.livanova/" target="_blank">
                    <img src={facebook} alt="facebook" />
                  </a>
                  <a href="https://www.behance.net/alesyalivanova" target="_blank">
                    <img src={behance} alt="behance" />
                  </a>
                </div>
                <hr />
                <img className="team-page__university pb-4" src={AlesyaUniverEn} alt="university"/>
              </div>
              <div className="team-page__teammate col-md-7 offset-sm-1">
                <h3 className="team-page__name pt-4">{t('teamPage.alesya.name')}</h3>
                <p className="team-page__position text-black-50">{t('teamPage.alesya.position')}</p>
                <p className="team-page__description">{t('teamPage.alesya.text1')}</p>
                <ul className="team-page__description pl-3">
                  <li>{t('teamPage.alesya.text2')}</li>
                  <li>{t('teamPage.alesya.text3')}</li>
                  <li>{t('teamPage.alesya.text4')}</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row py-4">
            <div className="team-page__background">
              <div className="team-page__teammate col-md-2 offset-md-1 text-center">
                <img className="team-page__image pt-4" src={jane} alt="Photo of Jane Spirina" />
                  <p className="team-page__city pt-3 text-black-50">{t('teamPage.jane.city')}</p>
                  <hr />
                    <div className="team-page__social">
                      <a href="https://github.com/pandafuwa" target="_blank">
                        <img src={github} alt="github" />
                      </a>
                      <a href="https://www.linkedin.com/in/espirina" target="_blank">
                        <img src={linkedin} alt="linkedin" />
                      </a>
                      <a href="https://www.facebook.com/pandafuwa" target="_blank">
                        <img src={facebook} alt="facebook" />
                      </a>
                      <a href="https://t.me/espirina" target="_blank">
                        <img src={telegram} alt="telegram" />
                      </a>
                    </div>
                    <hr />
                      <img className="team-page__university pb-4" src={janeUniverEn} alt="university" />
              </div>
              <div className="team-page__teammate col-md-7 offset-sm-1">
                <h3 className="team-page__name pt-4">{t('teamPage.jane.name')}</h3>
                <p className="team-page__position text-black-50">{t('teamPage.jane.position')}</p>
                <ul className="team-page__description pl-3">
                  <li>{t('teamPage.jane.text1')}</li>
                  <li>{t('teamPage.jane.text2')}</li>
                  <li>{t('teamPage.jane.text3')}</li>
                  <li>{t('teamPage.jane.text4')}</li>
                  <li>{t('teamPage.jane.text5')}</li>
                  <li>{t('teamPage.jane.text6')}</li>
                  <li>{t('teamPage.jane.text7')}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Team;
