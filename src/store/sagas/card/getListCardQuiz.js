import { call, spawn, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import queryString from 'query-string';

import * as config from '../../../config';

import * as actionsBasic from "../../actions/basic";
import * as actionsCard from "../../actions/card";
//import * as actionsTheme from "../../actions/theme";



const getListCardQuiz_request = () => {
    
    let queryRequestBefore = {
        filterAuthor: 'Jeyon',
        filterSubject: 'Korean',
        filterSymbol: 'Heart'
    }
      
    const queryRequest = queryString.stringify(queryRequestBefore);
          
    return axios.get(`${config.URL_BACK}/cardQuiz/?` + queryRequest);
};


function* getListCardQuiz() {
    try {
        
            yield put( actionsBasic.return_REPLACE_BASIC({
                location: ['ready', 'listCardQuiz'],
                replacement: false
            }) );
            
            yield put( actionsBasic.return_REPLACE_BASIC({
                location: ['loading', 'listCardQuiz'],
                replacement: true
            }) );
        
        const { data } = yield call( getListCardQuiz_request );
        console.log(data);
        
        // main
        yield put( actionsCard.return_REPLACE_CARD({
            location: ['listCardQuiz'],
            replacement: data
        }) );

            yield put( actionsBasic.return_REPLACE_BASIC({
                location: ['loading', 'listCardQuiz'],
                replacement: false
            }) );
            
            yield put( actionsBasic.return_REPLACE_BASIC({
                location: ['ready', 'listCardQuiz'],
                replacement: true
            }) );
        
        
    } catch (error) {
        
            yield put( actionsBasic.return_REPLACE_BASIC({
                location: ['loading', 'listCardQuiz'],
                replacement: false
            }) );
            
            yield put( actionsBasic.return_REPLACE_BASIC({
                location: ['ready', 'listCardQuiz'],
                replacement: false
            }) );
            
        console.log(error);
        console.log('GET_LIST_CARD_QUIZ has been failed');
        //yield put( korean.return_GET_LIST_COLOR_Assignment_FAILURE() )
    }
}

export default getListCardQuiz;


/*

        
        yield put({
            type: korean.REPLACE_COLOR_Assignment,
            payload: {
                location: ['listColorAssignment'],
                replacement: data
            }
        });
*/