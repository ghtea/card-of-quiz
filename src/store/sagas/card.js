import { call, spawn, put, takeEvery, fork } from "redux-saga/effects";
import axios from "axios";
import * as config from '../../config';

import * as actionsCard from "../actions/card";
//import * as actionsTheme from "../actions/theme";

import getListCardQuiz from './card/getListCardQuiz';
import matchReward from './card/matchReward';
//import completeListCard from './card/completeListCard';
import submitAnswer from './card/submitAnswer';


export default function* cardSaga() {
    
    yield takeEvery( actionsCard.GET_LIST_CARD_QUIZ, getListCardQuiz );
    
    yield takeEvery( actionsCard.MATCH_REWARD, matchReward);
    
    yield takeEvery( actionsCard.SUBMIT_ANSWER, submitAnswer );

}



/*
export default function* koreanSaga() {
    yield spawn(watchCall);
}

*/


