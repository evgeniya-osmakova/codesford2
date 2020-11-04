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

function Team_short() {
  return (
    <section className="team">
      <div className="container">
        <div className="text-center">
          <h3 className="team__subheader">Team</h3>
        </div>
        <div className="row text-center">
          <div className="team__teammate col-md-4 pb-4 justify-content-center">
            <Link className="team__teammate-link" to="/crew/">
              <div className="team__background">
                <p className="team__position pt-2">Trainee IT Specialist</p>
                <img className="team__image mb-3" src={oleg} alt="Oleg" />
                <p className="team__name mb-0 font-weight-bold">Oleg</p>
                <p className="team__city">Melbourne</p>
              </div>
            </Link>
          </div>
          <div className="team__teammate col-md-4 pb-4">
            <Link className="team__teammate-link" to="/crew/">
              <div className="team__background">
                <p className="team__position pt-2">Head of Marketing</p>
                <img className="team__image mb-3" src={marie} alt="Maria" />
                <p className="team__name mb-0 font-weight-bold">Maria</p>
                <p className="team__city">Moscow</p>
              </div>
            </Link>
          </div>
          <div className="team__teammate col-md-4 pb-4">
            <Link className="team__teammate-link" to="/crew/">
              <div className="team__background">
                <p className="team__position pt-2">Team Lead</p>
                <img className="team__image mb-3" src={evgeniy} alt="John" />
                <p className="team__name mb-0 font-weight-bold">John</p>
                <p className="team__city">Krasnoyarsk</p>
              </div>
            </Link>
          </div>
        </div>
        <div className="row text-center">
          <div className="team__teammate col-md-4 pb-4">
            <Link className="team__teammate-link" to="/crew/">
              <div className="team__background">
                <p className="team__position pt-2">Junior Front End Developer</p>
                <img className="team__image mb-3" src={evgeniya} alt="Evgeniya" />
                <p className="team__name mb-0 font-weight-bold">Evgeniya</p>
                <p className="team__city">Moscow</p>
              </div>
            </Link>
          </div>
          <div className="team__teammate col-md-4 pb-4">
            <Link className="team__teammate-link" to="/crew/">
              <div className="team__background">
                <p className="team__position pt-2">Junior Digital Designer</p>
                <img className="team__image mb-3" src={alesya} alt="Alesya" />
                <p className="team__name mb-0 font-weight-bold">Alesya</p>
                <p className="team__city">Tomsk</p>
              </div>
            </Link>
          </div>
          <div className="team__teammate col-md-4 pb-4">
            <Link className="team__teammate-link" to="/crew/">
              <div className="team__background">
                <p className="team__position pt-2">Junior Digital Designer</p>
                <img className="team__image mb-3" src={maxim} alt="Maxim" />
                <p className="team__name mb-0 font-weight-bold">Max</p>
                <p className="team__city">Volgograd</p>
              </div>
            </Link>
          </div>
        </div>
        <div className="row text-center">
          <div className="team__teammate col-md-4 pb-4">
            <Link className="team__teammate-link" to="/crew/">
              <div className="team__background">
                <p className="team__position pt-2">Big Data Expert</p>
                <img className="team__image mb-3" src={jane} alt="Jane" />
                <p className="team__name mb-0 font-weight-bold">Jane</p>
                <p className="team__city">Melbourne</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team_short;
