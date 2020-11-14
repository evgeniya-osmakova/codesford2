import React from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {useTranslation} from 'react-i18next';
import {Link} from 'react-router-dom';
import './registration.scss';
import {useDispatch, useSelector} from 'react-redux';
import {signIn} from '../../actions';

const Authorization = () => {

  const { t, i18n } = useTranslation();

  const dispatch = useDispatch();

  const signInSchema = Yup.object().shape({
    email: Yup.string().email().required(t('registration.validation_errors.error3')),
    password: Yup.string()
      .required(t('registration.validation_errors.error4'))
  });

  const initialValues = {
    email: "",
    password: "",
  };

  const tryToSignIn = (values) => {
    const { username, password } = values;
    signIn({ username, password })(dispatch);
  }

  const authorization_error = useSelector((state) => state.authorization);

  const showError = () => {
    if (authorization_error === 'request_error') {
      return (<p className="error">{t('signIn.request_error')}</p>)
    }
    if (authorization_error === 'response_error') {
      return (<p className="error">{t('signIn.response_error')}</p>)
    }
  }

  return (
    <div className="form">
      <Formik
        initialValues={initialValues}
        validationSchema={signInSchema}
        onSubmit={(values) => {
          tryToSignIn(values);
        }}
      >
        {(formik) => {
          const { errors, touched, isValid, dirty } = formik;
          return (
            <div className="registration">
              <h1>{t('signIn.header')}</h1>
              {showError()}
              <Form className="registration-form">

                <div className="form-row">
                  <label htmlFor="email">{t('signIn.formFields.field1')}</label>
                  <Field
                    type="email"
                    name="email"
                    id="email"
                    className={
                      errors.email && touched.email ? "input-error" : null
                    }
                  />
                  <ErrorMessage name="email" component="span" className="error" />
                </div>

                <div className="form-row">
                  <label htmlFor="password">{t('signIn.formFields.field2')}</label>
                  <Field
                    type="password"
                    name="password"
                    id="password"
                    className={
                      errors.password && touched.password ? "input-error" : null
                    }
                  />
                  <ErrorMessage
                    name="password" component="span" className="error"
                  />
                </div>

                <button type="submit"
                        className={!(dirty && isValid) ? "disabled-btn" : ""}
                        disabled={!(dirty && isValid)}>
                  {t('registration.header')}
                </button>
              </Form>
              <Link className="form-link" to="/registration/">{t('signIn.link')}</Link>
            </div>
          );
        }}
      </Formik>
    </div>
  );
}

export default Authorization;
