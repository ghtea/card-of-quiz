import { call, spawn, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import * as config from '../../config';

import * as korean from "../actions/korean";
import * as theme from "../actions/theme";

import getListCardKorean from './korean/getListCardKorean';


export default function* koreanSaga() {
    yield takeEvery( korean.GET_LIST_CARD_KOREAN, getListCardKorean );
}



/*
export default function* koreanSaga() {
    yield spawn(watchCall);
}

*/


