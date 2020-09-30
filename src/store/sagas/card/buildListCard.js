import { call, spawn, put, takeEvery, select } from "redux-saga/effects";
import axios from "axios";
import queryString from 'query-string';

import * as config from '../../../config';

import * as actionsBasic from "../../actions/basic";
import * as actionsCard from "../../actions/card";
//import * as theme from "../../actions/theme";


function* buildListCard(action) {
    
    //const indexCardMatching = action.payload.indexCardMatching;
    const listQuiz =  yield select( (state) => state.card.getIn(['listQuiz']) ); 
    
    const lengthListCard = listQuiz.size;
    let listCardTemp = []; 
    for (var indexCard = 0; indexCard < lengthListCard; indexCard++){
        const objCard = {
            quiz: listQuiz.toJS()[indexCard],
            reward: {},
            status: {
                solved: false,
                rotation: 0,
                reward: {
                    loading: false,
                    ready: false,
                    showing: false
                },
                answer: {
                    text: ""
                }
            }
        }; // objCard
        listCardTemp.push(objCard);
    }
    
    yield put( actionsCard.return_REPLACE_CARD({
        location: ['listCard'],
        replacement: listCardTemp
    }) );
        
        yield put( actionsBasic.return_REPLACE_BASIC({
            location: ['ready', 'listCard'],
            replacement: true
        }) );
    
}

export default buildListCard;

