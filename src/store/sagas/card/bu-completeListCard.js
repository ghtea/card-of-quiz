import { call, spawn, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import * as config from '../../config';

import * as actionsCard from "../actions/card";
//import * as actionsTheme from "../actions/theme";

import getListCardQuiz from './completeListCard/getListCardQuiz';
import getListReward from './completeListCard/getListReward';
import getListReward from './completeListCard/getListReward';
//import submitAnswer from './card/submitAnswer';


// https://blog.naver.com/bunggl/221709929792
// https://blog.javarouka.me/2019/04/02/redux-saga-1/
export default function* completeListCard() {
    
    yield takeEvery( actionsCard.GET_LIST_CARD_QUIZ, getListCardQuiz );
    
    yield takeEvery( actionsCard.GET_LIST_REWARD, getListReward);
    
    yield takeEvery( actionsCard.MATCH_REWARD_TO_QUIZ, getListReward );
    
}



/*
export default function* koreanSaga() {
    yield spawn(watchCall);
}

*/


/*
    
    while
    
*/