import { call, spawn, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import * as config from '../../config';

import * as color from "../actions/color";
import spreadHsl from './color/spreadHsl';
import spreadRgb from './color/spreadRgb';
import spreadText from './color/spreadText';


export default function* colorSaga() {
    yield takeEvery( color.SPREAD_HSL, spreadHsl );
    yield takeEvery( color.SPREAD_RGB, spreadRgb );
    yield takeEvery( color.SPREAD_TEXT, spreadText);
}


/*
export default function* paletteSaga() {
    yield spawn(watchCall);
}

*/


