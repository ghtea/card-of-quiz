import { call, spawn, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import * as config from '../../config';

import * as colorAssignment from "../actions/colorAssignment";
import * as theme from "../actions/theme";

import getListColorAssignment from './colorAssignment/getListColorAssignment';


export default function* colorAssignmentSaga() {
    yield takeEvery( colorAssignment.GET_LIST_COLOR_ASSIGNMENT, getListColorAssignment );
}



/*
export default function* colorAssignmentSaga() {
    yield spawn(watchCall);
}

*/


