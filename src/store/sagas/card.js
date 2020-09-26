import { call, spawn, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import * as config from '../../config';

import * as card from "../actions/card";
import * as theme from "../actions/theme";

import getListCard from './card/getListCard';


export default function* cardSaga() {
    yield takeEvery( card.GET_LIST_CARD, getListCard );
}



/*
export default function* koreanSaga() {
    yield spawn(watchCall);
}

*/


