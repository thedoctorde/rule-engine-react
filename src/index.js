import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {loadEvents} from './actions/eventActions';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import initialState from './reducers/initialState'


const store = configureStore(initialState);
store.dispatch(loadEvents());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
//registerServiceWorker();
