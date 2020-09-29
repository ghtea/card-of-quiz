import { call, spawn, put, takeEvery, select } from "redux-saga/effects";
import axios from "axios";
import queryString from 'query-string';

import * as config from '../../../config';

import * as actionsBasic from "../../actions/basic";
import * as actionsCard from "../../actions/card";
//import * as theme from "../../actions/theme";



function* changeCardFocused(action) {
    
    
    const movement = action.payload.movement;
    const indexCardNew = action.payload.indexCardNew;
    
    const lengthListCard =  yield select( (state) => state.card.getIn(['listCard']).toJS().length );
    const indexCardFocused =  yield select( (state) => state.card.getIn(['indexCardFocused']) );
    
    if (indexCardNew) {
        
        yield put( actionsCard.return_REPLACE_CARD({
            location: ['indexCardFocused'],
            replacement: indexCardNew
        }) );
        
    }
    else if (movement==='next'){
        if (indexCardFocused >= 0 && indexCardFocused < lengthListCard - 1){
            yield put( actionsCard.return_REPLACE_CARD({
                location: ['indexCardFocused'],
                replacement: indexCardFocused + 1
            }) );
        }
    }
    else if (movement==='before'){
        if (indexCardFocused >= 1 ){
            yield put( actionsCard.return_REPLACE_CARD({
                location: ['indexCardFocused'],
                replacement: indexCardFocused - 1
            }) );
        }
    }
    
        
}

export default changeCardFocused;
