import React from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {useTranslation} from 'react-i18next';
import {Link} from 'react-router-dom';
import './registration.scss';
import {useDispatch} from 'react-redux';
import {signIn} from '../../actions';

const signInSchema = Yup.object().shape({
  email: Yup.string().email().required("Email is required"),
  password: Yup.string()
    .required("Password is required")
});

const initialValues = {
  email: "",
  password: "",
};

const Authorization = () => {

  const { t, i18n } = useTranslation();

  const dispatch = useDispatch();

  const tryToSignIn = (values) => {
    const { username, password } = values;
    signIn({ username, password })(dispatch);
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
