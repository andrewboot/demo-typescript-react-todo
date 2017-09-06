import React from 'react';
import rootReducer from './reducer';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';

import Todos from '../Todos';

// TypeScript complained about unknown variables on window object
// So I copied it
const localWindow: any = window;

const composeEnhancers = process.env.NODE_ENV === 'development'
  ? localWindow.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  : compose;

const store = createStore(rootReducer, composeEnhancers());

const Root = () => (
  <Provider store={store}>
    <Todos />
  </Provider>
);

export default Root;
