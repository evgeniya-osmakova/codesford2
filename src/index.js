import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import './i18n.js';
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
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root'),
);
