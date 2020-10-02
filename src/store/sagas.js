import { all, fork } from 'redux-saga/effects'

import cardSaga from './sagas/card';
import authSaga from './sagas/auth';

export default function* rootSaga() {
  yield all ([
    fork(cardSaga),
    fork(authSaga)
  ])
  // code after fork-effect
}

// https://redux-saga.js.org/docs/advanced/RootSaga.html