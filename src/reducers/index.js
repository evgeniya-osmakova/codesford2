import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import * as actions from '../actions/index';
import {videoListCss} from '../components/Courses/listOfCssVideos.js'
import {videoListHtml} from '../components/Courses/listOfHtmlVideos.js'
import {videoListJs} from '../components/Courses/listOfJSVideos.js';
import {videoListBootstrap} from '../components/Courses/listOfBootstrapVideos.js';

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
});
