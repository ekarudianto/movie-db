import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/App';
import store from './src/app/redux/store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById('app'));