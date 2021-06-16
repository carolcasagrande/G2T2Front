import 'bootstrap/dist/css/bootstrap.css';

import { Provider } from 'react-redux';
import {store} from './redux/store';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);



