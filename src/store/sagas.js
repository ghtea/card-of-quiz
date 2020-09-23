import { all, fork } from 'redux-saga/effects'
import colorAssignmentSaga from './sagas/colorAssignment';
import colorSaga from './sagas/color';


export default function* rootSaga() {
  yield all ([
    fork(colorAssignmentSaga), 
    fork(colorSaga)
  ])
  // code after fork-effect
}

// https://redux-saga.js.org/docs/advanced/RootSaga.html