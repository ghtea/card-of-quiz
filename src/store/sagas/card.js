import { call, spawn, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import * as config from '../../config';

import * as actionsCard from "../actions/card";
//import * as actionsTheme from "../actions/theme";

import getListCardQuiz from './card/getListCardQuiz';
import getListCardReward from './card/getListCardReward';


export default function* cardSaga() {
    yield takeEvery( actionsCard.GET_LIST_CARD_QUIZ, getListCardQuiz );
    yield takeEvery( actionsCard.GET_LIST_CARD_REWARD, getListCardReward );
}



/*
export default function* koreanSaga() {
    yield spawn(watchCall);
}

*/


