import React, { Component } from 'react';
import { Router, Scene, ActionConst } from 'react-native-router-flux';

import Increment from './Increment';
import Decrement from './Decrement';

import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider, connect } from 'react-redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import * as reducers from '../reducers/';

const logger = createLogger();
const middlewares = [thunk, logger];
const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Scene key="root">
            <Scene key="increment" component={Increment} title="Increment mode" initial={true} />
            <Scene key="decrement" component={Decrement} title="Decrement mode" />
          </Scene>
        </Router>
      </Provider>
    );
  }
}
