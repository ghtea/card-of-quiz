import { call, spawn, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import * as config from '../../../config';

import * as korean from "../../actions/korean";
import * as theme from "../../actions/theme";



const getCardKorean_request = (idDeck) => {
  return axios.get(`${config.URL_BACK}/${idDeck}`);
};


function* getCardKorean(idDeck) {
    try {
        const { data } = yield call( getCardKorean_request(idDeck) );
        console.log(data);
        
        yield put( korean.return_REPLACE_KOREAN({
            location: ['deckFocused'],
            replacement: data
        }) );
        
        
    } catch (error) {
        
        console.log('GET_CARD_KOREAN has been failed');
        //yield put( korean.return_GET_LIST_COLOR_Assignment_FAILURE() )
    }
}

export default getListColorAssignment;


/*

        
        yield put({
            type: korean.REPLACE_COLOR_Assignment,
            payload: {
                location: ['listColorAssignment'],
                replacement: data
            }
        });
*/