import { call, spawn, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import * as config from '../../config';

import * as colorScheme from "../actions/colorScheme";
import * as theme from "../actions/theme";

import getListColorScheme from './colorScheme/getListColorScheme';


export default function* colorSchemeSaga() {
    yield takeEvery( colorScheme.GET_LIST_COLOR_SCHEME, getListColorScheme );
}



/*
export default function* colorSchemeSaga() {
    yield spawn(watchCall);
}

*/


