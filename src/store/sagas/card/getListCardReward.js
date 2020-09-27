import { call, spawn, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import queryString from 'query-string';

import * as config from '../../../config';

import * as actionsBasic from "../../actions/basic";
import * as actionsCard from "../../actions/card";
//import * as theme from "../../actions/theme";



const getListCardReward_request = () => {
    
    let queryRequestBefore = {
        filterAuthor: 'Jeyon',
        filterSubject: 'Korean',
        filterSymbol: 'heart'
    }
      
    const queryRequest = queryString.stringify(queryRequestBefore);
          
    return axios.get(`${config.URL_BACK}/cardReward/?` + queryRequest);
};


function* getListCardReward() {
    try {
        
            yield put( actionsBasic.return_REPLACE_BASIC({
                location: ['ready', 'listCardRewardFocused'],
                replacement: false
            }) );
            
            yield put( actionsBasic.return_REPLACE_BASIC({
                location: ['loading', 'listCardRewardFocused'],
                replacement: true
            }) );
        
        const { data } = yield call( getListCardReward_request );
        console.log(data);
        
        // main
        yield put( actionsCard.return_REPLACE_CARD({
            location: ['listCardRewardFocused'],
            replacement: data
        }) );

            yield put( actionsBasic.return_REPLACE_BASIC({
                location: ['loading', 'listCardRewardFocused'],
                replacement: false
            }) );
            
            yield put( actionsBasic.return_REPLACE_BASIC({
                location: ['ready', 'listCardRewardFocused'],
                replacement: true
            }) );
        
        
    } catch (error) {
        
            yield put( actionsBasic.return_REPLACE_BASIC({
                location: ['loading', 'listCardRewardFocused'],
                replacement: false
            }) );
            
            yield put( actionsBasic.return_REPLACE_BASIC({
                location: ['ready', 'listCardRewardFocused'],
                replacement: false
            }) );
            
        console.log(error);
        console.log('GET_LIST_CARD_REWARD has been failed');
        //yield put( korean.return_GET_LIST_COLOR_Assignment_FAILURE() )
    }
}

export default getListCardReward;


/*

        
        yield put({
            type: korean.REPLACE_COLOR_Assignment,
            payload: {
                location: ['listColorAssignment'],
                replacement: data
            }
        });
*/