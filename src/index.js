import React from 'react';
import ReactDOM from 'react-dom';

// Redux imports
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import {carSalesReducer} from './reducers';

import App from './App';

import 'bulma/css/bulma.css';
import './styles.scss';

const store = createStore(carSalesReducer);
console.log(store);

const rootElement = document.getElementById('root');
ReactDOM.render(
<Provider store={store}><App /></Provider>,
 rootElement);