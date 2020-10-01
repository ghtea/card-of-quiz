import { call, spawn, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import queryString from 'query-string';

import * as config from '../../../config';

import * as actionsBasic from "../../actions/basic";
import * as actionsCard from "../../actions/card";
//import * as actionsTheme from "../../actions/theme";



const getListQuiz_request = () => {
    
    let queryRequestBefore = {
        filterAuthor: 'Jeyon',
        filterSubject: 'Korean',
        filterSymbol: 'Heart'
    }
      
    const queryRequest = queryString.stringify(queryRequestBefore);
          
    return axios.get(`${config.URL_BACK}/quiz/?` + queryRequest);
};


function* getListQuiz() {
    try {
        
            yield put( actionsBasic.return_REPLACE_BASIC({
                location: ['ready', 'listQuiz'],
                replacement: false
            }) );
            
            yield put( actionsBasic.return_REPLACE_BASIC({
                location: ['loading', 'listQuiz'],
                replacement: true
            }) );
        
        const { data } = yield call( getListQuiz_request );
        //console.log(data);
        
        // main
        yield put( actionsCard.return_REPLACE_CARD({
            location: ['listQuiz'],
            replacement: data
        }) );
        
        yield put( actionsCard.return_BUILD_LIST_CARD() );

            yield put( actionsBasic.return_REPLACE_BASIC({
                location: ['loading', 'listQuiz'],
                replacement: false
            }) );
            
            yield put( actionsBasic.return_REPLACE_BASIC({
                location: ['ready', 'listQuiz'],
                replacement: true
            }) );
        
        
    } catch (error) {
        
            yield put( actionsBasic.return_REPLACE_BASIC({
                location: ['loading', 'listQuiz'],
                replacement: false
            }) );
            
            yield put( actionsBasic.return_REPLACE_BASIC({
                location: ['ready', 'listQuiz'],
                replacement: false
            }) );
            
        console.log(error);
        console.log('GET_LIST_QUIZ has been failed');
        //yield put( korean.return_GET_LIST_COLOR_Assignment_FAILURE() )
    }
}

export default getListQuiz;


/*

        
        yield put({
            type: korean.REPLACE_COLOR_Assignment,
            payload: {
                location: ['listColorAssignment'],
                replacement: data
            }
        });
*/