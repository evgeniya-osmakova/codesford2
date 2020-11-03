import React from 'react';
import '../Header_and_Footer/1.scss';
import alesya from '../Main/img/Alesya.png';
import evgeniy from '../Main/img/Evgeniy.png';
import evgeniya from '../Main/img/Evgeniya.png';
import jane from '../Main/img/Jane.png';
import marie from '../Main/img/Marie.jpg';
import maxim from '../Main/img/Maxim.png';
import oleg from './img/Oleg.jpg';
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
import MaximUniverEn from './img/MaximUniverEn.jpg';
import mgsu from './img/mgsu.png';


function Team() {
  return (
    <body>
      <section className="team-page">
        <div className="container">
          <div className="row pt-4">
            <div className="team-page__background">
              <div className="team-page__teammate col-md-2 offset-md-1 text-center">
                <img className="team-page__image pt-4" src={oleg} alt="Photo of Oleg Gribanov" />
                <p className="team-page__city pt-3 text-black-50">Melbourne</p>
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
                <h3 className="team-page__name pt-4">Oleg Gribanov</h3>
                <p className="team-page__position text-black-50">Trainee IT Specialist</p>
                <ul className="team-page__description pl-3">
                  <li>he has the necessary expertise in IT and education;</li>
                  <li>his career at EdTech began in early 2011 as an educational startup that developed interactive,
                    engaging courses for HR departments in various American corporations;
                  </li>
                  <li>at the end of 2011, Oleg Gribanov became a sales manager at the FIRST Education Production (FIRST
                    EP) Digital Agency, which was engaged in the creation of interactive, engaging courses for the large
                    corporations such as DHL and others;
                  </li>
                  <li>Oleg Gribanov became the CEO of the company and 100% founder. The company was in the TOP-100 of the
                    best companies in the industry for 3 years, that is, all the time it was active.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row pt-4">
            <div className="team-page__background">
              <div className="team-page__teammate col-md-2 offset-md-1 text-center">
                <img className="team-page__image pt-4" src={marie} alt="Photo of Marie Volkova" />
                <p className="team-page__city pt-3 text-black-50">Moscow</p>
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
                <h3 className="team-page__name pt-4">Maria Volkova</h3>
                <p className="team-page__position text-black-50">Head of Marketing</p>
                <p className="team-page__description">She came to a startup as a marketer and she has the necessary
                  experience in marketing and IT education.</p>
                <ul className="team-page__description pl-3">
                  <li>conducted an analysis of competitors, identified points of product differentiation;</li>
                  <li>working on a marketing strategy;</li>
                  <li>leads social networks;</li>
                  <li>divided the product development process into stages.</li>
                </ul>
                <p className="team-page__description">
                  She previously worked for Skyeng.
                  <br />
                  She has an experience in content management.
                </p>
              </div>
            </div>
          </div>
          <div className="row pt-4">
            <div className="team-page__background">
              <div className="team-page__teammate col-md-2 offset-md-1 text-center">
                <img className="team-page__image pt-4" src={evgeniy} alt="Photo of John Korobkov" />
                <p className="team-page__city pt-3 text-black-50">Krasnoyarsk</p>
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
                <h3 className="team-page__name pt-4">John Korobkov</h3>
                <p className="team-page__position text-black-50">Team Lead</p>
                <p className="team-page__description">He joined a startup as a junior full stack developer. In the
                  process, he was transferred to the position of team lead. He has the necessary expertise in IT.</p>
                <ul className="team-page__description pl-3">
                  <li>developed a frontend (using HTML, CSS, JavaScript and Materialize CSS Framework);</li>
                  <li>backend (using Django and MySQL);</li>
                  <li>arranged hosting on AWS.</li>
                </ul>
                <p className="team-page__description">Plans to develop:</p>
                <ul className="team-page__description pl-3">
                  <li>cross-platform Flutter application;</li>
                  <li>chatbots for social networks in python.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row pt-4">
            <div className="team-page__background">
              <div className="team-page__teammate col-md-2 offset-md-1 text-center">
                <img className="team-page__image pt-4" src={evgeniya}
                     alt="Photo of Evgeniya Osmakova" />
                <p className="team-page__city pt-3 text-black-50">Moscow</p>
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
                  <a href="https://www.facebook.com/" target="_blank">
                    <img src={facebook} alt="facebook"/>
                  </a>
                </div>
                <hr />
                <img className="team-page__university" src={mgsu} alt="university"/>
                <img className="team-page__stack pb-4" src={jhonStack} alt="stack"/>
              </div>
              <div className="team-page__teammate col-md-7 offset-sm-1">
                <h3 className="team-page__name pt-4">Evgeniya Osmakova</h3>
                <p className="team-page__position text-black-50">Junior Front End Developer</p>
                <p className="team-page__description">Evgeniya joined a startup as a Junior Front End Developer. She has
                  the necessary expertise in IT.</p>
                <ul className="team-page__description pl-3">
                  <li>Front end (HTML, CSS, SCSS, JavaScript, WebPack);</li>
                  <li>Back end (Node.js);</li>
                  <li>JS games on canvas;</li>
                  <li>Vue and React frameworks;</li>
                  <li>Testing with Jest.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row pt-4">
            <div className="team-page__background">
              <div className="team-page__teammate col-md-2 offset-md-1 text-center">
                <img className="team-page__image pt-4" src={alesya}
                     alt="Photo of Alesya Livanova" />
                <p className="team-page__city pt-3 text-black-50">Tomsk</p>
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
                <h3 className="team-page__name pt-4">Alesya Livanova</h3>
                <p className="team-page__position text-black-50">Junior Digital Designer</p>
                <p className="team-page__description">Undertaking an internship at a startup as a designer.</p>
                <ul className="team-page__description pl-3">
                  <li>UX/UI design of interfaces of site, applications, browser games in Figma;</li>
                  <li>site prototyping in Axure;</li>
                  <li>basic vector drawing skills.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row pt-4">
            <div className="team-page__background">
              <div className="team-page__teammate col-md-2 offset-md-1 text-center">
                <img className="team-page__image pt-4" src={maxim} alt="Photo of Maxim Popov" />
                  <p className="team-page__city pt-3 text-black-50">Volgograd</p>
                  <hr />
                    <div className="team-page__social">
                      <a href="https://www.linkedin.com/in/maxim-popov-6b46b51b7/" target="_blank">
                        <img src={linkedin} alt="linkedin" />
                      </a>
                      <a href="https://www.facebook.com/pma486" target="_blank">
                        <img src={facebook} alt="facebook" />
                      </a>
                      <a href="https://t.me/max742" target="_blank">
                        <img src={telegram} alt="telegram" />
                      </a>
                      <a href="https://www.behance.net/pmaxim4863ced" target="_blank"><img
                        src={behance} alt="behance" />
                      </a>
                    </div>
                    <hr />
                      <img className="team-page__university pb-4" src={MaximUniverEn} alt="university" />
              </div>
              <div className="team-page__teammate col-md-7 offset-sm-1">
                <h3 className="team-page__name pt-4">Maxim Popov</h3>
                <p className="team-page__position text-black-50">Junior Digital Designer</p>
                <p className="team-page__description">Undertaking an internship at a startup as a designer.</p>
                <ul className="team-page__description pl-3">
                  <li>UX/UI design of interfaces of site, applications, browser games in Figma;</li>
                  <li>usability testing of the product;</li>
                  <li>creating a showreel.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row py-4">
            <div className="team-page__background">
              <div className="team-page__teammate col-md-2 offset-md-1 text-center">
                <img className="team-page__image pt-4" src={jane} alt="Photo of Jane Spirina" />
                  <p className="team-page__city pt-3 text-black-50">Melbourne</p>
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
                <h3 className="team-page__name pt-4">Jane Spirina</h3>
                <p className="team-page__position text-black-50">Big Data Expert</p>
                <ul className="team-page__description pl-3">
                  <li>2+ years of experience managing and growing high performance data science teams;</li>
                  <li>5+ years of industry experience in a decision science context;</li>
                  <li>ability to communicate effectively with non-technical stakeholders;</li>
                  <li>strong knowledge of applied statistics, experimental design, and causal inference;</li>
                  <li>proficiency with SQL and programming languages;</li>
                  <li>domain experience in educational assessment and psychometrics;</li>
                  <li>experience using big data technologies.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </body>
  );
}

export default Team;
