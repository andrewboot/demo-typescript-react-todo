import React from 'react';
import rootReducer from './reducer';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';

import Todos from '../Todos';

const localWindow: any = window;

const composeEnhancers = localWindow.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers());

const Root = () => (
  <Provider store={store}>
    <Todos />
  </Provider>
);

export default Root;
