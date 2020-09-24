import { all, fork } from 'redux-saga/effects'
import koreanSaga from './sagas/korean';


export default function* rootSaga() {
  yield all ([
    fork(koreanSaga)
  ])
  // code after fork-effect
}

// https://redux-saga.js.org/docs/advanced/RootSaga.html