import { createStore, applyMiddleware, combineReducers } from 'redux';
//import thunk from 'redux-thunk';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga'
import axios from 'axios';

import auth from './reducers/auth';
import basic from './reducers/basic';

import * as types from './actions/ActionTypes';




import mySaga from './sagas'



const reducers = combineReducers({
  
  auth: auth
  ,basic: basic
  ,reaction: reaction
  ,hots : hots
  ,player: player
  ,hero: hero
  ,team_planner : team_planner
  ,comp_gallery : comp_gallery
  
  //, session: sessionReducer // https://www.npmjs.com/package/redux-react-session
});

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()


// https://redux-saga.js.org/docs/api/

// https://react.vlpt.us/redux-middleware/10-redux-saga.html
// https://medium.com/@lyhlg0201/redux%EC%99%80-redux-saga%EC%9D%98-%EB%8F%84%EC%9E%85-2b065139d150

const store = createStore(
  reducers,
  applyMiddleware( sagaMiddleware, logger)
)

//sessionService.initSessionService(store);

export default store;

//https://github.com/nomadcoders/vanilla-redux/blob/ccaa1acd081f27239f2cc8ad3c571bd0a9923f73/src/store.js

/*
const store = createStore(
  reducers,
  applyMiddleware(thunk.withExtraArgument(axios), logger)
)
*/