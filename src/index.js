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
import { createBrowserHistory } from 'history';


/* eslint-disable no-underscore-dangle */
const store = createStore(
  reducers,
  compose(
  applyMiddleware(thunk),
  )
);
/* eslint-enable */

const history = createBrowserHistory();

let root = document.getElementById('root');

if (root) {
  // // 1. Set up the browser history with the updated location
  // // (minus the # sign)
  // const path = (/#!(\/.*)$/.exec(location.hash) || [])[1];
  // console.log(path)
  // console.log(history)
  // if (path) {
  //   // location.pathname = `http://frontend-cf-test.s3-website-us-east-1.amazonaws.com/${path}`;
  //   history.replace(path);
  // }

  // 2. Render our app
  ReactDOM.render(
    <Provider store={store}>
      <React.StrictMode>
        <I18nextProvider i18n={i18n}>
          <App />
        </I18nextProvider>
      </React.StrictMode>
    </Provider>,
    root,
  );
}

