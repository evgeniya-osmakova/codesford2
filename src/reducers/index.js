import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import * as actions from '../actions/index';

const language = handleActions({
  [actions.changeLanguage](state, { payload: { language } }) {
    const { currentLanguage } = state;
    return { currentLanguage: language };
  },
}, { currentLanguage: 'en' });

export default combineReducers({
  language,
});
