import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import './i18n.js';
import {createStore} from 'redux';
import reducers from './reducers/index';
import { Provider } from 'react-redux';

/* eslint-disable no-underscore-dangle */
const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
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
