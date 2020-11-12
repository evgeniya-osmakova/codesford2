import React from 'react';
import {useTranslation} from 'react-i18next';
import {Link} from 'react-router-dom';
import './autorization.scss';
import {useDispatch} from 'react-redux';
import {signIn} from '../../actions';

function SignIn() {

  const { t } = useTranslation();

  const dispatch = useDispatch();

  const tryToSignIn = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { username, password } = Object.fromEntries(formData);
    signIn({ username, password })(dispatch);
  }

  return (
    <section className="signin">
      <div className="container">
        <div className="row align-items-center pt-4 text-center justify-content-center">
          <div className="signin__wrapper col-md-12 pb-4 justify-content-center">
            <h3 className="signin__form-header pb-4">{t('signIn.header')}</h3>
            <form className="signin__form" method="POST" action="" onSubmit={tryToSignIn}>
                <div className="signin__form-fields justify-content-center">
                  <div className="signin__form-field pb-4">
                    <input placeholder={t('signIn.placeholder1')} name="username" id="username" type="text"
                           className="validate form-control" />
                  </div>
                  <div className="signin__form-field pb-4">
                    <input placeholder={t('signIn.placeholder2')} name="password" id="password" type="password"
                           className="validate form-control" />
                  </div>
                  <button type="submit" className="signin__form-button btn btn-primary">{t('signIn.header')}</button>
                  <Link className="signin__form-register-link pt-3" to="/registration/">{t('signIn.link')}</Link>
                </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignIn;
