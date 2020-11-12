import React from 'react';
import {useTranslation} from 'react-i18next';
import {Link} from 'react-router-dom';
import bonus from './img/bonus.svg';
import './autorization.scss';
import {useDispatch} from 'react-redux';
import {registration} from '../../actions';

function Registration() {

  const { t } = useTranslation();

  const dispatch = useDispatch();

  const tryToRegister = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { username, first_name, last_name, email, password1, password2 } = Object.fromEntries(formData);
    registration({ username, first_name, last_name, email, password1, password2 })(dispatch);
  }

  return (
    <section className="sections-registration section section-icons center">
      <div className="container">
        <div className="row">
          <div className="col s12 m6">
            <h4 className="header-reasons">{t('registration.reasons.title')}</h4>
            <ul className="registration-reasons">
              <li className="reasons-item">
                <img src={bonus} />{t('registration.reasons.reason1')}
              </li>
            </ul>
          </div>
          <div className="col s12 m6">
            <h3 className="header-reasons">{t('registration.header')}</h3>
            <form action="" method="POST" onSubmit={tryToRegister}>
                <p>
                  <label htmlFor="id_username" className="">{t('registration.formFields.field1.text')}</label>
                  <input type="text" name="username" maxLength="150" autoFocus="" required="" id="id_username" />
                  <span className="helptext">{t('registration.formFields.field1.requirement')}</span>
                </p>
                <p>
                  <label htmlFor="id_first_name">{t('registration.formFields.field2')}</label>
                  <input type="text" name="first_name" maxLength="30" id="id_first_name" />
                </p>
                <p>
                  <label htmlFor="id_last_name">{t('registration.formFields.field3')}</label>
                  <input type="text" name="last_name" maxLength="150" id="id_last_name" />
                </p>
                <p>
                  <label htmlFor="id_email">{t('registration.formFields.field4')}</label>
                  <input type="email" name="email" maxLength="254" id="id_email" />
                </p>
                <p>
                  <label htmlFor="id_password1">{t('registration.formFields.field5.text')}</label>
                  <input type="password" name="password1" autoComplete="new-password" required="" id="id_password1" />
                  <span className="helptext"/>
                </p>
                <ul>
                  <li>{t('registration.formFields.field5.requirement1')}</li>
                  <li>{t('registration.formFields.field5.requirement2')}</li>
                  <li>{t('registration.formFields.field5.requirement3')}</li>
                </ul>
                <p>
                  <label htmlFor="id_password2">{t('registration.formFields.field6.text')}</label>
                  <input type="password" name="password2" autoComplete="new-password" required="" id="id_password2" />
                  <span className="helptext">{t('registration.formFields.field5.requirement')}</span>
                </p>
                <button type="submit" className="btn-reg waves-effect waves-light btn">{t('registration.btn')}</button>
                <Link className="have-account" to="/signin">{t('registration.link')}</Link>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Registration;
