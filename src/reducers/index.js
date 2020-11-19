import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import * as actions from '../actions/index';
import {videoListCss} from '../components/Courses/listOfCssVideos.js'
import {videoListHtml} from '../components/Courses/listOfHtmlVideos.js'
import {videoListJs} from '../components/Courses/listOfJsVideos.js';
import {videoListBootstrap} from '../components/Courses/listOfBootstrapVideos.js';

const appState = handleActions({
  [actions.changeState](state, {payload: { newState }}) {
    return newState;
  }
}, 'default');

const authorization = handleActions({
  [actions.signInRequest]() {
    return 'requested';
  },
  [actions.signInFailure](state, {payload: { err }}) {
    if (err.response) {
      return 'response_error'
    }
    return 'response_error'
    //return 'request_error';
  },
  [actions.signInSuccess]() {
    return 'finished';
  },
}, 'none');

const registration = handleActions({
  [actions.registrationRequest]() {
    return 'requested';
  },
  [actions.registrationSuccess]() {
    return 'finished';
  },
  [actions.registrationFailure](state, {payload: { err }}) {
    if (err.response) {
      return 'response_error'
    }
    return 'response_error'
    // return 'request_error';
  },
}, 'none');

const updating = handleActions({
  [actions.updatingRequest]() {
    return 'requested';
  },
  [actions.updatingSuccess]() {
    return 'finished';
  },
  [actions.updatingFailure](state, {payload: { err }}) {
    if (err.response) {
      return 'response_error'
    }
    return 'response_error'
    // return 'request_error';
  },
}, 'none');

const userData = handleActions({
  [actions.signInSuccess](state, {payload: { id, first_name, last_name, email }}) {
    return { ...state, isLoggedIn: true, id, first_name, last_name, email };
  },
  [actions.updatingSuccess](state, { payload: { name, last_name }}) {
    return { ...state, first_name: name, last_name: last_name };
  },
  [actions.logOut]() {
    return { isLoggedIn: false, id: null, first_name: '', last_name: '', email: '' };
  },
}, {isLoggedIn: true, id: null, first_name: 'Richard', last_name: 'Hendrix', email: '' });

const video = handleActions({
  [actions.changeCurrentVideo](state, { payload: { newVideo, type, language } }) {
    const oldData = state[type][language]
    return { ...state, [type]: { ...oldData, [language] : newVideo } };
  },
}, {
  html: {
    ru: videoListHtml.ru.courses['video-html-1'],
    en: videoListHtml.en.courses['video-html-1'],
  },
  js: {
    ru: videoListJs.ru.courses['video-js-1'],
    en: videoListJs.en.courses['video-js-1'],
  },
  css: {
    ru: videoListCss.ru.courses['video-css-1'],
    en: videoListCss.en.courses['video-css-1'],
  },
  bt: {
    ru: videoListBootstrap.ru.courses['video-bt-1'],
    en: videoListBootstrap.en.courses['video-bt-1'],
  }
});


export default combineReducers({
  video,
  authorization,
  registration,
  updating,
  userData,
  appState
});
