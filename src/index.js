import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './_helpers';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import { App } from './App';
import registerServiceWorker from './registerServiceWorker';

import { configureFakeBackend } from './_helpers';
configureFakeBackend();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
