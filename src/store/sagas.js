import { all, fork } from 'redux-saga/effects'
import colorSchemeSaga from './sagas/colorScheme';



export default function* rootSaga() {
  yield all ([
    fork(colorSchemeSaga)
  ])
  // code after fork-effect
}

// https://redux-saga.js.org/docs/advanced/RootSaga.html