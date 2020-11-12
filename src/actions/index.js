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

export const signIn = ({ login, password }) => async (dispatch) => {
  dispatch(signInRequest());
  try {
    const url = routes.taskUrl(task.id);
    await axios.delete(url);
    dispatch(signInSuccess({ id: task.id }));
  } catch (e) {
    dispatch(signInFailure());
    throw e;
  }
};

export const registration = ({ login, password }) => async (dispatch) => {
  dispatch(registrationRequest());
  try {
    const url = routes.taskUrl(task.id);
    await axios.post(url);
    dispatch(registrationSuccess({ id: task.id }));
  } catch (e) {
    dispatch(registrationFailure());
    throw e;
  }
};
