import axios from 'axios';
import { createAction } from 'redux-actions';
import routes from '../routes.js';

export const changeState = createAction('STATE_CHANGE');

export const changeCurrentVideo = createAction('VIDEO_CHANGE');

export const signInRequest = createAction('SIGN_IN_REQUEST');
export const signInSuccess = createAction('SIGN_IN_SUCCESS');
export const signInFailure = createAction('SIGN_IN_FAILURE');

export const registrationRequest = createAction('REGISTRATION_REQUEST');
export const registrationSuccess = createAction('REGISTRATION_SUCCESS');
export const registrationFailure = createAction('REGISTRATION_FAILURE');

export const updatingRequest = createAction('UPDATING_REQUEST');
export const updatingSuccess = createAction('UPDATING_SUCCESS');
export const updatingFailure = createAction('UPDATING_FAILURE');

export const logOut = createAction('LOG_OUT');

export const signIn = (username, password) => async (dispatch) => {
  console.log(username, password)
  dispatch(signInRequest());
  try {
    const url = routes.signInUrl();
    const response = await axios.post(url, { username, password });
    const { id, first_name, last_name, email } = response.data;
    dispatch(signInSuccess({ id, first_name, last_name, email }));
  } catch (err) {
    console.log(err.response);
    console.log(err.request);
    dispatch(signInFailure({err}));
  }
};

export const registration = (name, last_name, email, password, passwordConfirmation) => async (dispatch) => {
  dispatch(registrationRequest());
  try {
    const url = routes.registrationUrl();
    await axios.post(url, { name, last_name, email, password, passwordConfirmation });
    dispatch(registrationSuccess());
  } catch (err) {
    console.log(err);
    console.log(err.response);
    console.log(err.request);
    dispatch(registrationFailure({err}));
  }
};

export const updateUserData = (name, last_name, id ) => async (dispatch) => {
  dispatch(updatingRequest());
  try {
    const url = routes.registrationUrl();
    await axios.put(`${url}${id}`, { name, last_name });
    dispatch(updatingSuccess(name, last_name));
  } catch (err) {
    console.log(err);
    console.log(err.response);
    console.log(err.request);
    dispatch(updatingFailure({err}));
  }
};
