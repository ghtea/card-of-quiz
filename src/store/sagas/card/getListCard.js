import { call, spawn, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import queryString from 'query-string';

import * as config from '../../../config';

import * as card from "../../actions/card";
import * as theme from "../../actions/theme";



const getListCard_request = () => {
    
    let queryRequestBefore = {
        filterAuthor: 'Jeyon',
        filterSubject: 'Korean',
        filterSymbol: 'heart'
    }
      
    const queryRequest = queryString.stringify(queryRequestBefore);
          
    return axios.get(`${config.URL_BACK}/card/?` + queryRequest);
};


function* getListCard() {
    try {
        
        const { data } = yield call( getListCard_request );
        console.log(data);
        
        yield put( card.return_REPLACE_CARD({
            location: ['listCardFocused'],
            replacement: data
        }) );
        
        
    } catch (error) {
        console.log(error);
        console.log('GET_LIST_CARD has been failed');
        //yield put( korean.return_GET_LIST_COLOR_Assignment_FAILURE() )
    }
}

export default getListCard;


/*

        
        yield put({
            type: korean.REPLACE_COLOR_Assignment,
            payload: {
                location: ['listColorAssignment'],
                replacement: data
            }
        });
*/