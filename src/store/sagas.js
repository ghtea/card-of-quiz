import { all, fork } from 'redux-saga/effects'

import cardSaga from './sagas/card';


export default function* rootSaga() {
  yield all ([
    fork(cardSaga)
  ])
  // code after fork-effect
}

// https://redux-saga.js.org/docs/advanced/RootSaga.html