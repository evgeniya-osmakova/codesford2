import axios from 'axios';
import { createAction } from 'redux-actions';
import routes from '../routes.js';


export const changeCurrentVideo = createAction('VIDEO_CHANGE');
// export const signIn = createAction('SIGN_IN');

export const signInRequest = createAction('SIGN_IN_REQUEST');
export const signInSuccess = createAction('SIGN_IN_SUCCESS');
export const signInFailure = createAction('SIGN_IN_FAILURE');

export const registrationRequest = createAction('REGISTRATION_REQUEST');
export const registrationSuccess = createAction('REGISTRATION_SUCCESS');
export const registrationFailure = createAction('REGISTRATION_FAILURE');

export const signIn = (username, password) => async (dispatch) => {
  console.log(username, password)
  dispatch(signInRequest());
  try {
    const url = routes.signInUrl();
    const response = await axios.post(url, { username, password });
    const { id } = response.data;
    dispatch(signInSuccess({ id }));
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
    const response = await axios.post(url, { name, last_name, email, password, passwordConfirmation });
    dispatch(registrationSuccess());
  } catch (err) {
    console.log(err);
    console.log(err.response);
    console.log(err.request);
    dispatch(registrationFailure({err}));
  }
};
