import React from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {useTranslation} from 'react-i18next';
import {Link, useHistory} from 'react-router-dom';
import './registration.scss';
import { useDispatch, useSelector } from 'react-redux';
import { registration } from '../../actions';

const Registration = () => {

  const { t } = useTranslation();

  const dispatch = useDispatch();

  const signInSchema = Yup.object().shape({
    first_name: Yup.string()
      .required(t('registration.validation_errors.error1')),
    last_name: Yup.string()
      .required(t('registration.validation_errors.error2')),
    email: Yup.string().email().required(t('registration.validation_errors.error3')),
    password: Yup.string()
      .required(t('registration.validation_errors.error4'))
      .min(8, t('registration.validation_errors.error5'))
      .matches(/^(?=.*[a-z])(?=.*[0-9])/, t('registration.validation_errors.error6')),
    passwordConfirmation: Yup.string()
      .oneOf([Yup.ref('password'), null], t('registration.validation_errors.error7'))
      .required(t('registration.validation_errors.error4'))
  });

  const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    passwordConfirmation: ""
  };

  const registration_state = useSelector((state) => state.registration);

  let history = useHistory();

  const tryToRegister = (values) => {
    const { first_name, last_name, email, password, passwordConfirmation } = values;
    registration({ first_name }, { last_name }, { email },
      { password }, { passwordConfirmation })(dispatch);
    if ( registration_state === 'finished') {
      history.push('/');
    }
  }

  const showError = () => {
    if (registration_state === 'request_error') {
      return (<p className="error">{t('registration.request_error')}</p>)
    }
    if (registration_state === 'response_error') {
      return (<p className="error">{t('registration.response_error')}</p>)
    }
  }

  return (
    <div className="form">
      <Formik
        initialValues={initialValues}
        validationSchema={signInSchema}
        onSubmit={(values) => {
          tryToRegister(values);
        }}
      >
        {(formik) => {
          const { errors, touched, isValid, dirty } = formik;
          return (
            <div className="registration">
              <h1>{t('registration.header')}</h1>
              {showError()}
              <Form className="registration-form">
                <div className="form-row">
                  <label htmlFor="first_name">{t('registration.formFields.field1')}</label>
                  <Field
                    type="text"
                    name="first_name"
                    id="first_name"
                    className={
                      errors.first_name && touched.first_name ? "input-error" : null
                    }
                  />
                  <ErrorMessage name="first_name" component="span" className="error" />
                </div>

                <div className="form-row">
                  <label htmlFor="last_name">{t('registration.formFields.field2')}</label>
                  <Field
                    type="text"
                    name="last_name"
                    id="last_name"
                    className={
                      errors.last_name && touched.last_name ? "input-error" : null
                    }
                  />
                  <ErrorMessage name="last_name" component="span" className="error" />
                </div>

                <div className="form-row">
                  <label htmlFor="email">{t('registration.formFields.field3')}</label>
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
                  <label htmlFor="password">{t('registration.formFields.field4')}</label>
                  <Field
                    type="password"
                    name="password"
                    id="password"
                    autoComplete="on"
                    className={
                      errors.password && touched.password ? "input-error" : null
                    }
                  />
                  <ErrorMessage
                    name="password" component="span" className="error"
                  />
                </div>

                <div className="form-row">
                  <label htmlFor="passwordConfirmation">{t('registration.formFields.field5')}</label>
                  <Field
                    type="password"
                    name="passwordConfirmation"
                    id="passwordConfirmation"
                    autoComplete="on"
                    className={
                      errors.passwordConfirmation && touched.passwordConfirmation ? "input-error" : null
                    }
                  />
                  <ErrorMessage
                    name="passwordConfirmation" component="span" className="error"
                  />
                </div>

                <p className="password-requirement">
                  {t('registration.requirement.text1')}
                </p>
                <p className="password-requirement">
                  {t('registration.requirement.text2')}
                </p>
                <p className="password-requirement">
                  {t('registration.requirement.text3')}
                </p>
                <p className="password-requirement">
                  {t('registration.requirement.text4')}
                </p>
                <button type="submit"
                  className={!(dirty && isValid) ? "disabled-btn" : ""}
                  disabled={!(dirty && isValid)}>
                  {t('registration.header')}
                </button>
              </Form>
              <Link className="form-link" to="/signin">{t('registration.link')}</Link>
            </div>
          );
        }}
      </Formik>
    </div>
  );
}

export default Registration;
