import { call, spawn, put, takeEvery, fork } from "redux-saga/effects";
import axios from "axios";
import * as config from '../../config';

import * as actionsCard from "../actions/card";
//import * as actionsTheme from "../actions/theme";

import getListQuiz from './card/getListQuiz';
import buildListCard from './card/buildListCard';
import matchReward from './card/matchReward';
//import completeListCard from './card/completeListCard';
import submitAnswer from './card/submitAnswer';
import changeCardFocused from './card/changeCardFocused';


export default function* cardSaga() {
    
    yield takeEvery( actionsCard.GET_LIST_QUIZ, getListQuiz );
    
    yield takeEvery( actionsCard.BUILD_LIST_CARD, buildListCard );
    
    yield takeEvery( actionsCard.MATCH_REWARD, matchReward);
    
    yield takeEvery( actionsCard.SUBMIT_ANSWER, submitAnswer );
    
    yield takeEvery( actionsCard.CHANGE_CARD_FOCUSED, changeCardFocused );

}



/*
export default function* koreanSaga() {
    yield spawn(watchCall);
}

*/


