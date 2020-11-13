import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import './i18n.js';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import {createStore, applyMiddleware, compose} from 'redux';
import reducers from './reducers/index';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

/* eslint-disable no-underscore-dangle */
const store = createStore(
  reducers,
  compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk),
  )
);
/* eslint-enable */

ReactDOM.render(
    <Provider store={store}>
      <React.StrictMode>
        <I18nextProvider i18n={i18n}>
          <App />
        </I18nextProvider>
      </React.StrictMode>
    </Provider>,
  document.getElementById('root'),
);
